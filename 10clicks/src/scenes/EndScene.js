import Phaser from "phaser";

import { adStart, onAudioVolumeChange, onCtaPressed } from "../networkPlugin";

export class EndScene extends Phaser.Scene {
  constructor() {
    super("EndScene");
  }

  init() {
    console.log("%cSCENE::EndScene", "color: #fff; background: #111;");
  }

  adNetworkSetup() {
    adStart();
    onAudioVolumeChange(this.scene);
  }

  create() {
    this.adNetworkSetup();
    this.ctaTween = null;
    this.viewportLayoutTimeout = null;

    document.body.style.background = "linear-gradient(to bottom, #FADBF1 0%, #FADBF1 calc(33.3% - .5px), #000000ff calc(33.3% - .5px), #000000 calc(33.3% + .5px), #F8E6BA calc(33.31% + .5px), #F8E6BA 100%)";
    const app = document.getElementById("app");
    if (app) app.style.background = "linear-gradient(to bottom, #FADBF1 0%, #FADBF1 calc(33.3% - .5px), #000000 calc(33.3% - .5px), #000000 calc(33.3% + .5px), #F8E6BA calc(33.31% + .5px), #F8E6BA 100%)";

    this.overlay = this.add.rectangle(0, 0, 1, 1, 0x000000, 0.25).setOrigin(0);
    this.logo = this.add.image(0, 0, "logo").setOrigin(0.5);
    this.cta = this.add
      .image(0, 0, "cta")
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    this.onScenePointerDown = () => onCtaPressed();
    this.input.on("pointerdown", this.onScenePointerDown);

    this.applyResponsiveLayout(this.scale.gameSize);
    this.playSceneFadeIn();

    this.onViewportLayoutChange = () => {
      this.applyResponsiveLayout(this.scale.gameSize);
      if (this.viewportLayoutTimeout) {
        window.clearTimeout(this.viewportLayoutTimeout);
      }
      this.viewportLayoutTimeout = window.setTimeout(() => {
        this.applyResponsiveLayout(this.scale.gameSize);
        this.viewportLayoutTimeout = null;
      }, 120);
    };

    window.addEventListener("resize", this.onViewportLayoutChange);
    window.addEventListener("orientationchange", this.onViewportLayoutChange);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", this.onViewportLayoutChange);
    }

    this.scale.on("resize", this.handleResize, this);
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      this.scale.off("resize", this.handleResize, this);
      if (this.onViewportLayoutChange) {
        window.removeEventListener("resize", this.onViewportLayoutChange);
        window.removeEventListener("orientationchange", this.onViewportLayoutChange);
        if (window.visualViewport) {
          window.visualViewport.removeEventListener("resize", this.onViewportLayoutChange);
        }
      }
      if (this.viewportLayoutTimeout) {
        window.clearTimeout(this.viewportLayoutTimeout);
        this.viewportLayoutTimeout = null;
      }
      if (this.ctaTween) {
        this.ctaTween.stop();
        this.ctaTween.remove();
        this.ctaTween = null;
      }
      if (this.onScenePointerDown) {
        this.input.off("pointerdown", this.onScenePointerDown);
      }
    });
  }

  playSceneFadeIn(duration = 420) {
    const camera = this.cameras?.main;
    if (!camera) {
      return;
    }

    if (camera.fadeEffect?.isRunning) {
      camera.fadeEffect.reset();
    }
    camera.fadeIn(duration, 0, 0, 0);
  }

  applyResponsiveLayout(gameSize) {
    const width = Math.max(gameSize?.width || this.scale.width, 1);
    const height = Math.max(gameSize?.height || this.scale.height, 1);
    const viewportWidth = Math.max(Math.round(window.visualViewport?.width || window.innerWidth || width), 1);
    const viewportHeight = Math.max(Math.round(window.visualViewport?.height || window.innerHeight || height), 1);
    const isLandscape = viewportWidth > viewportHeight;
    const centerX = width * 0.5;
    const centerY = height * 0.5;

    const gameScene = this.scene.get("Game");
    if (gameScene && gameScene.backgroundBounds) {
      // Just so we can calculate if needed, but we force full screen for overlay
    }
    this.overlay.setPosition(0, 0).setSize(width, height).setDepth(1);

    const logoTargetWidth = isLandscape
      ? Phaser.Math.Clamp(width * 0.28, 220, 460)
      : Phaser.Math.Clamp(width * 0.68, 250, 520);
    const ctaTargetWidth = isLandscape
      ? Phaser.Math.Clamp(width * 0.28, 230, 470)
      : Phaser.Math.Clamp(width * 0.72, 280, 560);
    const groupGap = isLandscape ? height * 0.06 : height * 0.035;
    const logoScale = logoTargetWidth / Math.max(this.logo.width || 1, 1);
    const ctaScale = ctaTargetWidth / Math.max(this.cta.width || 1, 1);
    const logoHeight = this.logo.height * logoScale;
    const ctaHeight = this.cta.height * ctaScale;
    const groupHeight = logoHeight + groupGap + ctaHeight;
    const logoY = centerY - groupHeight * 0.5 + logoHeight * 0.5;
    const ctaY = logoY + logoHeight * 0.5 + groupGap + ctaHeight * 0.5;

    this.logo
      .setPosition(centerX, logoY)
      .setScale(logoScale)
      .setDepth(2);

    this.applyCtaLayout(centerX, ctaY, ctaScale);
  }

  applyCtaLayout(x, y, baseScale) {
    this.cta
      .setPosition(x, y)
      .setScale(baseScale)
      .setDepth(3);

    if (this.ctaTween) {
      this.ctaTween.stop();
      this.ctaTween.remove();
      this.ctaTween = null;
    }

    this.ctaTween = this.tweens.add({
      targets: this.cta,
      scale: {
        from: baseScale * 0.96,
        to: baseScale * 1.04,
      },
      duration: 620,
      ease: "Sine.InOut",
      repeat: -1,
      yoyo: true,
    });
  }

  handleResize(gameSize) {
    const width = Math.max(gameSize?.width || this.scale.width, 1);
    const height = Math.max(gameSize?.height || this.scale.height, 1);
    this.cameras.main.setSize(width, height);
    this.applyResponsiveLayout({ width, height });
  }
}
