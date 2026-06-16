import Phaser from "phaser";

import { mraidAdNetworks, networkPlugin } from "./networkPlugin.js";
import { isIpadScreen } from "./utils/isIpadScreen.js";

import { Game } from "./scenes/Game";
import { Preloader } from "./scenes/Preloader";
import { config } from "./config.js";
import { EndScene } from "./scenes/EndScene.js";

const gameConfig = {
  type: Phaser.AUTO,
  parent: "ad-container",
  width: 1080,
  height: 1920,
  backgroundColor: "transparent",
  transparent: true,
  audio: {
    disableWebAudio: true,
  },
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [Preloader, Game, EndScene],
};

function initializePhaserGame() {
  return new Phaser.Game(gameConfig);
}

function bindResponsiveResize(game) {
  const shouldRunDelayedResize = isIpadScreen();

  const getViewportSize = () => {
    return {
      width: Math.max(Math.ceil(document.documentElement.clientWidth), Math.ceil(window.innerWidth), 1),
      height: Math.max(Math.ceil(document.documentElement.clientHeight), Math.ceil(window.innerHeight), 1),
    };
  };

  const applyResize = () => {
    // Phaser creates the canvas asynchronously; guard until it's ready
    if (!game.isBooted || !game.canvas) {
      return;
    }
    const { width, height } = getViewportSize();
    const container = document.getElementById("ad-container");
    const app = document.getElementById("app");

    if (container) {
      container.style.setProperty("width", "100%", "important");
      container.style.setProperty("height", "100%", "important");
      container.style.setProperty("margin", "0", "important");
      container.style.setProperty("padding", "0", "important");
    }
    if (app) {
      app.style.setProperty("width", "100vw", "important");
      app.style.setProperty("height", "100vh", "important");
      app.style.setProperty("margin", "0", "important");
      app.style.setProperty("padding", "0", "important");
    }

    game.scale.resize(width, height);
    game.scale.refresh();
    
    if (game.canvas) {
      game.canvas.style.setProperty("width", "100%", "important");
      game.canvas.style.setProperty("height", "100%", "important");
      game.canvas.style.display = "block";
    }
  };

  let rafId = null;
  const scheduleResize = () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    rafId = requestAnimationFrame(() => {
      applyResize();
      if (shouldRunDelayedResize) {
        // iPad can report final viewport size slightly later after rotation.
        window.setTimeout(applyResize, 120);
      }
    });
  };

  window.addEventListener("resize", scheduleResize);
  window.addEventListener("orientationchange", scheduleResize);
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", scheduleResize);
  }
  game.events.once("destroy", () => {
    window.removeEventListener("resize", scheduleResize);
    window.removeEventListener("orientationchange", scheduleResize);
    if (window.visualViewport) {
      window.visualViewport.removeEventListener("resize", scheduleResize);
    }
  });

  // Run once the game is booted so scale manager has a canvas to resize
  if (game.isBooted) {
    scheduleResize();
  } else {
    game.events.once(Phaser.Core.Events.READY, scheduleResize);
  }
}

function setupGameInitialization(adNetworkType) {
  const game = initializePhaserGame();
  bindResponsiveResize(game);

  if (mraidAdNetworks.has(adNetworkType)) {
    networkPlugin.initMraid(() => game);
  } else {
    // vungle, google ads, facebook, tiktok
    return game;
  }
}

setupGameInitialization(config.adNetworkType);
