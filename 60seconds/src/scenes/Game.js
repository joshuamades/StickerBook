import Phaser from "phaser";

import { adStart, onAudioVolumeChange } from "../networkPlugin";

const BATCH_SIZE = 3;
const IDLE_HINT_DELAY = 2000;
const SNAP_DISTANCE_RATIO = 0.12;
const DEBUG_SHOW_ALL_TARGETS = false;

const TARGET_LAYOUT = {
  1: { x: 0.39, y: 0.49, size: 0.20, depth: 8, numX: 0, numY: 0 },
  2: { x: 0.65, y: 0.61, size: 0.15, depth: 10, numX: 0, numY: 0 },
  3: { x: 0.28, y: 0.69, size: 0.15, depth: 16, numX: 0, numY: 0 },
  4: { x: 0.16, y: 0.43, size: 0.16, depth: 12, numX: 0, numY: 0 },
  5: { x: 0.42, y: 0.13, size: 0.12, depth: 10, numX: 0, numY: 0 },
  6: { x: 0.78, y: 0.0475, size: 0.15, depth: 12, numX: 0, numY: 30 },
  7: { x: 0.78, y: 0.42, size: 0.34, depth: 10, numX: 0, numY: 0 },
  8: { x: 0.52, y: 0.62, size: 0.12, depth: 12, numX: 0, numY: 50 },
  9: { x: 0.87, y: 0.68, size: 0.16, depth: 12, numX: 0, numY: 0 },
  10: { x: 0.17, y: 0.49, size: 0.23, depth: 10, numX: 0, numY: 0 },
  11: { x: 0.34, y: 0.25, size: 0.22, depth: 10, numX: 0, numY: 0 },
  12: { x: 0.7, y: 0.05, size: 0.12, depth: 10, numX: 0, numY: 40 },
  13: { x: 0.84, y: 0.37, size: 0.12, depth: 12, numX: 0, numY: 0 },
  14: { x: 0.55, y: 0.55, size: 0.55, depth: 2, numX: 0, numY: 0 },
  15: { x: 0.1, y: 0.53, size: 0.15, depth: 10, numX: 0, numY: 0 },
  16: { x: 0.37, y: 0.35, size: 0.13, depth: 10, numX: 0, numY: 0 },
  17: { x: 0.42, y: 0.04, size: 0.12, depth: 10, numX: 0, numY: 0 },
  18: { x: 0.64, y: 0.25, size: 0.19, depth: 10, numX: 0, numY: 0 },
  19: { x: 0.70, y: 0.49, size: 0.15, depth: 12, numX: 0, numY: 0 },
  20: { x: 0.62, y: 0.72, size: 0.16, depth: 13, numX: 0, numY: 0 },
  21: { x: 0.21, y: 0.58, size: 0.14, depth: 24, numX: 0, numY: 0 },
  22: { x: 0.12, y: 0.35, size: 0.12, depth: 12, numX: 0, numY: 0 },
  23: { x: 0.69, y: 0.15, size: 0.12, depth: 10, numX: 0, numY: 0 },
  24: { x: 0.55, y: 0.45, size: 0.12, depth: 12, numX: 0, numY: -20 },
  25: { x: 0.81, y: 0.59, size: 0.15, depth: 13, numX: 0, numY: 0 },
  26: { x: 0.19, y: 0.25, size: 0.25, depth: 9, numX: 0, numY: 0 },
  27: { x: 0.85, y: 0.27, size: 0.15, depth: 10, numX: 0, numY: 0 },
  28: { x: 0.57, y: 0.54, size: 0.12, depth: 10, numX: 0, numY: 0 },
  29: { x: 0.30, y: 0.35, size: 0.25, depth: 9, numX: -70, numY: 0 },
  30: { x: 0.55, y: 0.15, size: 0.12, depth: 10, numX: 0, numY: 0 },
  31: { x: 0.79, y: 0.49, size: 0.15, depth: 12, numX: 0, numY: 0 },
  32: { x: 0.35, y: 0.60, size: 0.15, depth: 12, numX: 0, numY: 0 },
  33: { x: 0.09, y: 0.30, size: 0.12, depth: 10, numX: 0, numY: 0 },
  34: { x: 0.84, y: 0.045, size: 0.12, depth: 10, numX: 0, numY: 40 },
  35: { x: 0.61, y: 0.36, size: 0.18, depth: 11, numX: 0, numY: 0 },
  36: { x: 0.43, y: 0.71, size: 0.23, depth: 13, numX: 0, numY: 0 },
  37: { x: 0.31, y: 0.43, size: 0.25, depth: 7, numX: 0, numY: 0 },
  38: { x: 0.90, y: 0.34, size: 0.13, depth: 10, numX: 0, numY: 0 },
  39: { x: 0.77, y: 0.72, size: 0.17, depth: 13, numX: 0, numY: 0 },
  40: { x: 0.15, y: 0.68, size: 0.20, depth: 25, numX: 0, numY: 0 },
  41: { x: 0.48, y: 0.38, size: 0.18, depth: 11, numX: 0, numY: 0 },
  42: { x: 0.58, y: 0.05, size: 0.18, depth: 10, numX: 0, numY: -20 },
  43: { x: 0.74, y: 0.37, size: 0.12, depth: 10, numX: 0, numY: 0 },
  44: { x: 0.24, y: 0.51, size: 0.16, depth: 20, numX: 0, numY: 0 },
  45: { x: 0.82, y: 0.16, size: 0.15, depth: 9, numX: 0, numY: 0 },
  46: { x: 0.68, y: 0.44, size: 0.15, depth: 10, numX: 0, numY: 0 },
  47: { x: 0.50, y: 0.265, size: 0.19, depth: 10, numX: 0, numY: 0 },
  48: { x: 0.92, y: 0.49, size: 0.12, depth: 10, numX: 0, numY: 0 },
  49: { x: 0.47, y: 0.56, size: 0.12, depth: 10, numX: 0, numY: -10 },
  50: { x: 0.42, y: 0.22, size: 0.15, depth: 4, numX: 0, numY: 0 },
};

const STICKERS = [
  { id: 10, coloredKey: "coloredSticker10Kursi", outlineKey: "draggableSticker10KursiOutline", numberKey: "numbered10" },
  { id: 14, coloredKey: "coloredSticker14Karpet", outlineKey: "draggableSticker14KarpetOutline", numberKey: "numbered14" },
  { id: 7, coloredKey: "coloredSticker7Meja", outlineKey: "draggableSticker7MejaOutline", numberKey: "numbered7" },
  { id: 47, coloredKey: "coloredSticker47Cat", outlineKey: "draggableSticker47CatOutline", numberKey: "numbered47" },
  { id: 18, coloredKey: "coloredSticker18Bantal", outlineKey: "draggableSticker18BantalOutline", numberKey: "numbered18" },
  { id: 11, coloredKey: "coloredSticker11GirlSleep", outlineKey: "draggableSticker11GirlSleepOutline", numberKey: "numbered11" },
  { id: 1, coloredKey: "coloredSticker1GirlPinkDuduk", outlineKey: "draggableSticker1GirlPinkDudukOutline", numberKey: "numbered1" },
  { id: 2, coloredKey: "coloredSticker2GirlDuduk", outlineKey: "draggableSticker2GirlDudukOutline", numberKey: "numbered2" },
  { id: 3, coloredKey: "coloredSticker3GirlTea2", outlineKey: "draggableSticker3GirlTea2Outline", numberKey: "numbered3" },
  { id: 4, coloredKey: "coloredSticker4Telfon", outlineKey: "draggableSticker4TelfonOutline", numberKey: "numbered4" },
  { id: 5, coloredKey: "coloredSticker5PigoraGunung", outlineKey: "draggableSticker5PigoraGunungOutline", numberKey: "numbered5" },
  { id: 6, coloredKey: "coloredSticker6PewangiRuangan", outlineKey: "draggableSticker6PewangiRuanganOutline", numberKey: "numbered6" },
  { id: 8, coloredKey: "coloredSticker8Majalah", outlineKey: "draggableSticker8MajalahOutline", numberKey: "numbered8" },
  { id: 9, coloredKey: "coloredSticker9IbuMasak", outlineKey: "draggableSticker9IbuMasakOutline", numberKey: "numbered9" },
  { id: 12, coloredKey: "coloredSticker12Buku", outlineKey: "draggableSticker12BukuOutline", numberKey: "numbered12" },
  { id: 13, coloredKey: "coloredSticker13Cheesecake", outlineKey: "draggableSticker13CheesecakeOutline", numberKey: "numbered13" },
  { id: 15, coloredKey: "coloredSticker15Water", outlineKey: "draggableSticker15WaterOutline", numberKey: "numbered15" },
  { id: 16, coloredKey: "coloredSticker16Remote", outlineKey: "draggableSticker16RemoteOutline", numberKey: "numbered16" },
  { id: 17, coloredKey: "coloredSticker17JamDinding", outlineKey: "draggableSticker17JamDindingOutline", numberKey: "numbered17" },
  { id: 19, coloredKey: "coloredSticker19Bayi", outlineKey: "draggableSticker19BayiOutline", numberKey: "numbered19" },
  { id: 20, coloredKey: "coloredSticker20BoyKucing", outlineKey: "draggableSticker20BoyKucingOutline", numberKey: "numbered20" },
  { id: 21, coloredKey: "coloredSticker21Keys", outlineKey: "draggableSticker21KeysOutline", numberKey: "numbered21" },
  { id: 22, coloredKey: "coloredSticker22Bear", outlineKey: "draggableSticker22BearOutline", numberKey: "numbered22" },
  { id: 23, coloredKey: "coloredSticker23PigoraTulip", outlineKey: "draggableSticker23PigoraTulipOutline", numberKey: "numbered23" },
  { id: 24, coloredKey: "coloredSticker24BalokMenara", outlineKey: "draggableSticker24BalokMenaraOutline", numberKey: "numbered24" },
  { id: 25, coloredKey: "coloredSticker25BoyJuice", outlineKey: "draggableSticker25BoyJuiceOutline", numberKey: "numbered25" },
  { id: 26, coloredKey: "coloredSticker26Pot", outlineKey: "draggableSticker26PotOutline", numberKey: "numbered26" },
  { id: 27, coloredKey: "coloredSticker27BoyHideLamp", outlineKey: "draggableSticker27BoyHideLampOutline", numberKey: "numbered27" },
  { id: 28, coloredKey: "coloredSticker28DotSusu", outlineKey: "draggableSticker28DotSusuOutline", numberKey: "numbered28" },
  { id: 29, coloredKey: "coloredSticker29Yarn", outlineKey: "draggableSticker29YarnOutline", numberKey: "numbered29" },
  { id: 30, coloredKey: "coloredSticker30Dekorasi", outlineKey: "draggableSticker30DekorasiOutline", numberKey: "numbered30" },
  { id: 31, coloredKey: "coloredSticker31IbuBayi", outlineKey: "draggableSticker31IbuBayiOutline", numberKey: "numbered31" },
  { id: 32, coloredKey: "coloredSticker32BoyDudukSila", outlineKey: "draggableSticker32BoyDudukSilaOutline", numberKey: "numbered32" },
  { id: 33, coloredKey: "coloredSticker33TongSampah", outlineKey: "draggableSticker33TongSampahOutline", numberKey: "numbered33" },
  { id: 34, coloredKey: "coloredSticker34Kaktus", outlineKey: "draggableSticker34KaktusOutline", numberKey: "numbered34" },
  { id: 35, coloredKey: "coloredSticker35BoyCookie", outlineKey: "draggableSticker35BoyCookieOutline", numberKey: "numbered35" },
  { id: 36, coloredKey: "coloredSticker36BoyPlane", outlineKey: "draggableSticker36BoyPlaneOutline", numberKey: "numbered36" },
  { id: 37, coloredKey: "coloredSticker37BoyTiduran", outlineKey: "draggableSticker37BoyTiduranOutline", numberKey: "numbered37" },
  { id: 38, coloredKey: "coloredSticker38BoyLaper", outlineKey: "draggableSticker38BoyLaperOutline", numberKey: "numbered38" },
  { id: 39, coloredKey: "coloredSticker39BapakMauMakan", outlineKey: "draggableSticker39BapakMauMakanOutline", numberKey: "numbered39" },
  { id: 40, coloredKey: "coloredSticker40GirlTea1", outlineKey: "draggableSticker40GirlTea1Outline", numberKey: "numbered40" },
  { id: 41, coloredKey: "coloredSticker41BoyTelp", outlineKey: "draggableSticker41BoyTelpOutline", numberKey: "numbered41" },
  { id: 42, coloredKey: "coloredSticker42Cicak", outlineKey: "draggableSticker42CicakOutline", numberKey: "numbered42" },
  { id: 43, coloredKey: "coloredSticker43Teh", outlineKey: "draggableSticker43TehOutline", numberKey: "numbered43" },
  { id: 44, coloredKey: "coloredSticker44GirlRead", outlineKey: "draggableSticker44GirlReadOutline", numberKey: "numbered44" },
  { id: 45, coloredKey: "coloredSticker45GantunganTopi", outlineKey: "draggableSticker45GantunganTopiOutline", numberKey: "numbered45" },
  { id: 46, coloredKey: "coloredSticker46Truck", outlineKey: "draggableSticker46TruckOutline", numberKey: "numbered46" },
  { id: 48, coloredKey: "coloredSticker48GirlBoneka", outlineKey: "draggableSticker48GirlBonekaOutline", numberKey: "numbered48" },
  { id: 49, coloredKey: "coloredSticker49BalokAngka", outlineKey: "draggableSticker49BalokAngkaOutline", numberKey: "numbered49" },
  { id: 50, coloredKey: "coloredSticker50Blanket", outlineKey: "draggableSticker50BlanketOutline", numberKey: "numbered50" },
];

export class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  init() {
    console.log("%cSCENE::Game", "color: #fff; background: #f0f;");
  }

  adNetworkSetup() {
    adStart();
    onAudioVolumeChange(this.scene);
  }

  create() {
    this.adNetworkSetup();
    this.bgmSfx = this.sound.add("bgm", { loop: true, volume: 0.2 });
    this.correctSfx = this.sound.add("audioCorrectAnswer", { volume: 0.35 });
    this.wrongSfx = this.sound.add("audioWrongAnswer", { volume: 0.3 });
    this.finishedSfx = this.sound.add("audioFinished", { volume: 0.4 });
    this.hasStartedBgm = false;

    this.batchIndex = 0;
    this.completedCount = 0;
    this.currentBatch = [];
    this.targetNodes = new Map();
    this.draggableNodes = new Map();
    this.placedNodes = [];
    this.motionGhosts = [];
    this.isDragging = false;

    this.background = this.add
      .image(0, 0, "backgroundBgColoredWhiteExtended1")
      .setOrigin(0.5)
      .setDepth(-10);
    this.tray = this.add.image(0, 0, "blueCointainer").setOrigin(0.5).setDepth(200);
    this.handGuide = this.add
      .image(0, 0, "handIcon")
      .setOrigin(0.25, 0.15)
      .setDepth(250)
      .setVisible(false);

    this.createAllTargets();

    this.input.on("dragstart", this.handleDragStart, this);
    this.input.on("drag", this.handleDrag, this);
    this.input.on("dragend", this.handleDragEnd, this);
    this.input.on("pointerdown", () => {
      this.startAudioOnFirstInteraction();
      this.resetIdleGuide();
    });

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
      this.input.off("dragstart", this.handleDragStart, this);
      this.input.off("drag", this.handleDrag, this);
      this.input.off("dragend", this.handleDragEnd, this);
      this.clearIdleGuide();

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
    });

    this.applyResponsiveLayout(this.scale.gameSize);
    this.showNextBatch();
  }

  showNextBatch() {
    this.clearBatchNodes();
    this.currentBatch = STICKERS.slice(this.batchIndex, this.batchIndex + BATCH_SIZE);

    if (!this.currentBatch.length) {
      this.finishGame();
      return;
    }

    this.currentBatch.forEach((sticker) => {
      const draggable = this.createDraggableNode(sticker);

      this.draggableNodes.set(sticker.id, draggable);

      const target = this.targetNodes.get(sticker.id);
      if (target) {
        target.setVisible(true);
      }
    });

    this.layoutGameObjects();
    this.resetIdleGuide();
  }

  createTargetNode(sticker) {
    const targetLayout = TARGET_LAYOUT[sticker.id];
    const depth = targetLayout ? targetLayout.depth : 2;
    const numX = targetLayout && targetLayout.numX ? targetLayout.numX : 0;
    const numY = targetLayout && targetLayout.numY ? targetLayout.numY : 0;

    // Draw the empty target outline above all placed stickers (which go up to ~40)
    // but keep it behind the tray (which is 100)
    const container = this.add.container(0, 0).setDepth(90 + depth);
    const outline = this.add.image(0, 0, sticker.numberKey).setOrigin(0.5);
    const number = this.add
      .text(numX, numY, String(sticker.id), {
        fontFamily: "Arial",
        fontSize: "34px",
        fontStyle: "700",
        color: "#222222",
        align: "center",
      })
      .setOrigin(0.5);

    container.add([outline, number]);
    container.sticker = sticker;
    container.outline = outline;
    container.number = number;
    container.isPlaced = false;
    container.setVisible(DEBUG_SHOW_ALL_TARGETS);
    return container;
  }

  createAllTargets() {
    STICKERS.forEach((sticker) => {
      if (!this.targetNodes.has(sticker.id)) {
        this.targetNodes.set(sticker.id, this.createTargetNode(sticker));
      }
    });
  }

  createDraggableNode(sticker) {
    const container = this.add.container(0, 0).setDepth(210);
    const image = this.add.image(0, 0, sticker.outlineKey).setOrigin(0.5);
    const badgeCircle = this.add.circle(0, 0, 34, 0xffffff, 1).setStrokeStyle(4, 0x222222, 1);
    const badgeText = this.add
      .text(0, 0, String(sticker.id), {
        fontFamily: "Arial",
        fontSize: "34px",
        fontStyle: "700",
        color: "#222222",
        align: "center",
      })
      .setOrigin(0.5);

    container.add([image, badgeCircle, badgeText]);
    container.setSize(image.width, image.height);
    container.sticker = sticker;
    container.image = image;
    container.inputTarget = image;
    container.badgeCircle = badgeCircle;
    container.badgeText = badgeText;
    container.isPlaced = false;
    container.homeX = 0;
    container.homeY = 0;
    container.baseScale = 1;

    image.sticker = sticker;
    image.dragContainer = container;
    image.setInteractive();
    this.input.setDraggable(image);
    return container;
  }

  clearBatchNodes() {
    this.clearIdleGuide();
    this.draggableNodes.forEach((node) => node.destroy(true));
    this.draggableNodes.clear();
    this.motionGhosts.forEach((ghost) => ghost.destroy());
    this.motionGhosts = [];
  }

  applyBackgroundLayout(width, height, isLandscape, viewportAspect) {
    if (!this.background) {
      return;
    }

    const sourceWidth = Math.max(this.background.width || 1, 1);
    const sourceHeight = Math.max(this.background.height || 1, 1);
    const sourceAspect = sourceWidth / sourceHeight;
    const widePortrait = !isLandscape && viewportAspect > sourceAspect;

    // In portrait phones, use Math.max to cover the screen entirely (no blue bars top/bottom).
    // In landscape OR wide-portrait (tablets), use Math.min to fit the screen vertically, keeping the exact portrait layout and letterboxing the sides.
    const scale = (isLandscape || widePortrait)
      ? Math.min(width / sourceWidth, height / sourceHeight)
      : Math.max(width / sourceWidth, height / sourceHeight);

    this.background.setPosition(width * 0.5, height * 0.5);
    this.background.setScale(scale);
    this.backgroundBounds = {
      x: width * 0.5 - (sourceWidth * scale) * 0.5,
      y: height * 0.5 - (sourceHeight * scale) * 0.5,
      width: sourceWidth * scale,
      height: sourceHeight * scale,
    };
  }

  applyResponsiveLayout(gameSize) {
    const width = Math.max(gameSize?.width || this.scale.width, 1);
    const height = Math.max(gameSize?.height || this.scale.height, 1);
    const viewportWidth = Math.max(
      Math.round(window.visualViewport?.width || window.innerWidth || width),
      1,
    );
    const viewportHeight = Math.max(
      Math.round(window.visualViewport?.height || window.innerHeight || height),
      1,
    );
    const viewportAspect = viewportWidth / viewportHeight;
    const isLandscape = viewportWidth > viewportHeight;

    this.applyBackgroundLayout(width, height, isLandscape, viewportAspect);
    this.currentLayout = this.computeLayout(width, height, isLandscape);
    this.layoutGameObjects();
    this.resetIdleGuide();
  }

  computeLayout(width, height, isLandscape) {
    const board = this.backgroundBounds || { x: 0, y: 0, width, height };
    const trayMinHeight = Math.min(210, board.height * 0.2);
    const trayMaxHeight = Math.min(390, board.height * 0.28);
    const trayHeight = Phaser.Math.Clamp(board.height * 0.205, trayMinHeight, trayMaxHeight);
    const trayY = board.y + board.height - trayHeight * 0.5;
    const boardInsetX = board.width * 0.015;
    const boardTop = board.y + board.height * 0.02;
    const boardBottom = board.y + board.height - trayHeight - board.height * 0.025;
    const playLeft = board.x + boardInsetX;
    const playWidth = board.width - boardInsetX * 2;
    const playTop = boardTop;
    const playBottom = Math.max(boardBottom, playTop + board.height * 0.45);
    const playHeight = Math.max(playBottom - playTop, board.height * 0.45);
    const targetY = playTop + playHeight * 0.68;
    const targetXs = [
      playLeft + playWidth * 0.22,
      playLeft + playWidth * 0.5,
      playLeft + playWidth * 0.78,
    ];
    const draggableXs = [
      playLeft + playWidth * 0.19,
      playLeft + playWidth * 0.5,
      playLeft + playWidth * 0.81,
    ];

    return {
      width,
      height,
      isLandscape,
      board,
      playLeft,
      playWidth,
      playTop,
      playBottom,
      playHeight,
      targetY,
      targetXs,
      draggableXs,
      trayHeight,
      trayY,
      snapDistance: Math.max(Math.min(playWidth, playHeight) * SNAP_DISTANCE_RATIO, 34),
    };
  }

  layoutGameObjects() {
    if (!this.currentLayout) {
      return;
    }

    const layout = this.currentLayout;
    if (this.tray) {
      const trayScale = Math.max(
        layout.board.width / this.tray.width,
        layout.trayHeight / this.tray.height,
      );
      this.tray
        .setPosition(layout.board.x + layout.board.width * 0.5, layout.trayY)
        .setScale(trayScale)
        .setDepth(200);
    }

    this.targetNodes.forEach((target) => {
      const targetLayout = TARGET_LAYOUT[target.sticker.id];
      if (!targetLayout) {
        return;
      }

      this.layoutTargetNode(
        target,
        layout.board.x + layout.board.width * targetLayout.x,
        layout.board.y + layout.board.height * targetLayout.y,
        targetLayout.size,
      );
    });
    this.layoutPlacedImages();

    this.currentBatch.forEach((sticker, index) => {
      const draggable = this.draggableNodes.get(sticker.id);
      const dragX = layout.draggableXs[index] ?? layout.width * 0.5;
      const dragY = layout.trayY + layout.trayHeight * 0.12;

      if (draggable && !draggable.isPlaced && !draggable.isDragging) {
        this.layoutDraggableNode(draggable, dragX, dragY);
      }
    });
  }

  layoutTargetNode(target, x, y, sizeRatio = 0.16) {
    const maxWidth = this.currentLayout.board.width * sizeRatio;
    const maxHeight = this.currentLayout.board.height * sizeRatio * 1.15;
    const sourceWidth = Math.max(target.outline.width, 1);
    const sourceHeight = Math.max(target.outline.height, 1);
    const scale = Math.min(maxWidth / sourceWidth, maxHeight / sourceHeight, 1.15);
    const numberScale = Math.min(1.2 / scale, Math.max(0.62 / scale, 0.82));

    target.setPosition(x, y).setScale(scale);
    target.number.setScale(numberScale);
    target.dropX = x;
    target.dropY = y;
    target.dropScale = scale;
  }

  layoutPlacedImages() {
    this.placedNodes.forEach((placed) => this.layoutPlacedImage(placed));
  }

  layoutPlacedImage(placed) {
    const targetLayout = TARGET_LAYOUT[placed.stickerId];
    if (!this.currentLayout || !targetLayout) {
      return;
    }

    const boardX = this.currentLayout.board.x + this.currentLayout.board.width * targetLayout.x;
    const y = this.currentLayout.board.y + this.currentLayout.board.height * targetLayout.y;
    placed.setPosition(boardX, y).setScale(this.getPlacedScaleFromLayout(placed, targetLayout));
  }

  layoutDraggableNode(draggable, x, y) {
    const maxWidth = this.currentLayout.playWidth * 0.31;
    const maxHeight = this.currentLayout.trayHeight * 0.85;
    const sourceWidth = Math.max(draggable.image.width, 1);
    const sourceHeight = Math.max(draggable.image.height, 1);
    const scale = Math.min(maxWidth / sourceWidth, maxHeight / sourceHeight, 1.05);

    draggable.homeX = x;
    draggable.homeY = y;
    draggable.baseScale = scale;
    draggable.setPosition(x, y).setScale(scale);
    const badgeX = sourceWidth * 0.25;
    const badgeY = -sourceHeight * 0.38;
    const badgeScale = Math.min(0.7 / scale, 1);
    draggable.badgeCircle.setPosition(badgeX, badgeY).setScale(badgeScale);
    draggable.badgeText.setPosition(badgeX, badgeY).setScale(badgeScale);
  }

  handleResize(gameSize) {
    const width = Math.max(gameSize.width || this.scale.width, 1);
    const height = Math.max(gameSize.height || this.scale.height, 1);
    this.cameras.main.setSize(width, height);
    this.applyResponsiveLayout({ width, height });
  }

  resolveDraggableNode(gameObject) {
    return gameObject?.dragContainer || gameObject;
  }

  handleDragStart(_pointer, gameObject) {
    const draggable = this.resolveDraggableNode(gameObject);
    if (!draggable?.sticker || draggable.isPlaced) {
      return;
    }

    this.clearIdleGuide();
    this.startAudioOnFirstInteraction();
    this.isDragging = true;
    draggable.isDragging = true;
    draggable.setDepth(220);
    draggable.setScale(draggable.baseScale * 1.08);
    this.createMotionGhosts(draggable);
  }

  handleDrag(pointer, gameObject) {
    const draggable = this.resolveDraggableNode(gameObject);
    if (!draggable?.sticker || draggable.isPlaced) {
      return;
    }

    draggable.setPosition(pointer.x, pointer.y);
    this.updateMotionGhosts(draggable);
  }

  handleDragEnd(_pointer, gameObject) {
    const draggable = this.resolveDraggableNode(gameObject);
    if (!draggable?.sticker || draggable.isPlaced) {
      return;
    }

    this.isDragging = false;
    draggable.isDragging = false;
    this.fadeMotionGhosts();

    const target = this.targetNodes.get(draggable.sticker.id);
    const distance = target
      ? Phaser.Math.Distance.Between(draggable.x, draggable.y, target.dropX, target.dropY)
      : Number.POSITIVE_INFINITY;

    if (target && distance <= this.currentLayout.snapDistance) {
      this.placeSticker(draggable, target);
      return;
    }

    this.playWrongSound();
    this.tweens.add({
      targets: draggable,
      x: draggable.homeX,
      y: draggable.homeY,
      scale: draggable.baseScale,
      duration: 260,
      ease: "Back.Out",
      onComplete: () => this.resetIdleGuide(),
    });
  }

  placeSticker(draggable, target) {
    draggable.isPlaced = true;
    draggable.inputTarget?.disableInteractive();
    target.isPlaced = true;
    target.setVisible(false);

    this.playCorrectSound();

    const targetLayout = TARGET_LAYOUT[draggable.sticker.id];
    const depth = targetLayout ? targetLayout.depth : 4;

    const placed = this.add
      .image(target.dropX, target.dropY, draggable.sticker.coloredKey)
      .setOrigin(0.5)
      .setDepth(depth)
      .setAlpha(0);
    placed.stickerId = draggable.sticker.id;
    this.placedNodes.push(placed);
    this.layoutPlacedImage(placed);

    this.tweens.add({
      targets: draggable,
      x: target.dropX,
      y: target.dropY,
      scale: target.dropScale,
      duration: 160,
      ease: "Quad.Out",
      onComplete: () => draggable.setVisible(false),
    });
    this.tweens.add({
      targets: placed,
      alpha: { from: 0, to: 1 },
      scale: { from: placed.scale * 0.9, to: placed.scale },
      duration: 180,
      ease: "Sine.Out",
    });

    this.playStarBurst(target.dropX, target.dropY, target.dropScale);
    this.completedCount += 1;

    if (this.currentBatch.every((sticker) => this.targetNodes.get(sticker.id)?.isPlaced)) {
      this.time.delayedCall(520, () => {
        this.batchIndex += BATCH_SIZE;
        this.showNextBatch();
      });
      return;
    }

    this.resetIdleGuide();
  }

  getPlacedScale(draggable, target) {
    return this.getPlacedScaleFromTarget(draggable.image, target);
  }

  getPlacedScaleFromLayout(image, targetLayout) {
    const maxWidth = this.currentLayout.board.width * targetLayout.size * 0.98;
    const maxHeight = this.currentLayout.board.height * targetLayout.size * 1.12;
    return Math.min(
      maxWidth / Math.max(image.width, 1),
      maxHeight / Math.max(image.height, 1),
      1.15,
    );
  }

  getPlacedScaleFromTarget(image, target) {
    const maxWidth = target.outline.width * target.dropScale * 0.98;
    const maxHeight = target.outline.height * target.dropScale * 0.98;
    return Math.min(
      maxWidth / Math.max(image.width, 1),
      maxHeight / Math.max(image.height, 1),
      target.dropScale * 1.2,
    );
  }

  createMotionGhosts(draggable) {
    this.motionGhosts.forEach((ghost) => ghost.destroy());
    this.motionGhosts = [0.18, 0.12, 0.07].map((alpha, index) =>
      this.add
        .image(draggable.x, draggable.y, draggable.sticker.outlineKey)
        .setOrigin(0.5)
        .setScale(draggable.scale)
        .setAlpha(alpha)
        .setTint(0x93c8ff)
        .setDepth(45 - index),
    );
  }

  updateMotionGhosts(draggable) {
    this.motionGhosts.forEach((ghost, index) => {
      this.tweens.killTweensOf(ghost);
      this.tweens.add({
        targets: ghost,
        x: draggable.x,
        y: draggable.y,
        scale: draggable.scale * (1 + index * 0.04),
        duration: 55 + index * 45,
        ease: "Sine.Out",
      });
    });
  }

  fadeMotionGhosts() {
    this.motionGhosts.forEach((ghost) => {
      this.tweens.add({
        targets: ghost,
        alpha: 0,
        duration: 140,
        onComplete: () => ghost.destroy(),
      });
    });
    this.motionGhosts = [];
  }

  playStarBurst(x, y, targetScale) {
    const burst = this.add
      .image(x, y, "starBurst")
      .setOrigin(0.5)
      .setScale(targetScale * 0.18)
      .setAlpha(0.95)
      .setDepth(20);

    this.tweens.add({
      targets: burst,
      scale: targetScale * 0.55,
      alpha: 0,
      angle: 35,
      duration: 420,
      ease: "Cubic.Out",
      onComplete: () => burst.destroy(),
    });
  }

  playBackgroundCompleteBurst() {
    const width = this.currentLayout?.width || this.scale.width;
    const height = this.currentLayout?.height || this.scale.height;
    const centerX = width * 0.5;
    const centerY = height * 0.48;
    const baseScale = Math.min(width, height) / 900;

    const flash = this.add
      .circle(centerX, centerY, Math.min(width, height) * 0.2, 0xffffff, 0.28)
      .setDepth(18);

    this.tweens.add({
      targets: flash,
      scale: 2.4,
      alpha: 0,
      duration: 520,
      ease: "Cubic.Out",
      onComplete: () => flash.destroy(),
    });

    for (let index = 0; index < 12; index += 1) {
      const angle = Phaser.Math.DegToRad((360 / 12) * index + Phaser.Math.Between(-12, 12));
      const distance = Phaser.Math.Between(55, 170) * baseScale;
      const burst = this.add
        .image(centerX, centerY, "starBurst")
        .setOrigin(0.5)
        .setScale(baseScale * Phaser.Math.FloatBetween(0.1, 0.22))
        .setAlpha(0.95)
        .setAngle(Phaser.Math.Between(0, 360))
        .setDepth(19);

      this.tweens.add({
        targets: burst,
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        scale: baseScale * Phaser.Math.FloatBetween(0.28, 0.5),
        alpha: 0,
        angle: burst.angle + Phaser.Math.Between(45, 150),
        duration: Phaser.Math.Between(520, 760),
        ease: "Cubic.Out",
        onComplete: () => burst.destroy(),
      });
    }
  }

  resetIdleGuide() {
    this.clearIdleGuide();
    this.idleGuideTimer = this.time.delayedCall(IDLE_HINT_DELAY, () => this.showIdleGuide());
  }

  clearIdleGuide() {
    if (this.idleGuideTimer) {
      this.idleGuideTimer.remove(false);
      this.idleGuideTimer = null;
    }
    if (this.handGuideTween) {
      this.handGuideTween.stop();
      this.handGuideTween = null;
    }
    if (this.handGuide) {
      this.handGuide.setVisible(false);
    }
  }

  showIdleGuide() {
    if (this.isDragging || !this.handGuide) {
      return;
    }

    const draggable = [...this.draggableNodes.values()].find((node) => node.active && !node.isPlaced);
    if (!draggable) {
      return;
    }

    const target = this.targetNodes.get(draggable.sticker.id);
    if (!target || target.isPlaced) {
      return;
    }

    const handScale = Math.min(this.currentLayout.width / 1080, this.currentLayout.height / 1920) * 1.15;
    this.handGuide
      .setVisible(true)
      .setAlpha(0)
      .setScale(handScale)
      .setPosition(draggable.x + draggable.displayWidth * 0.18, draggable.y + draggable.displayHeight * 0.08);

    this.handGuideTween = this.tweens.add({
      targets: this.handGuide,
      x: target.dropX + target.outline.displayWidth * 0.1,
      y: target.dropY + target.outline.displayHeight * 0.05,
      alpha: { from: 1, to: 0.25 },
      duration: 900,
      ease: "Sine.InOut",
      repeat: -1,
      repeatDelay: 280,
      onRepeat: () => {
        this.handGuide
          .setAlpha(1)
          .setPosition(draggable.x + draggable.displayWidth * 0.18, draggable.y + draggable.displayHeight * 0.08);
      },
    });
  }

  playCorrectSound() {
    if (this.correctSfx) {
      this.correctSfx.play();
    } else {
      this.playSwitchComboSound(this.completedCount + 1);
    }
  }

  playWrongSound() {
    if (this.wrongSfx) {
      this.wrongSfx.play();
    } else {
      this.playSwitchSound();
    }
  }

  finishGame() {
    this.clearIdleGuide();
    if (this.background) {
      this.background.setTexture("backgroundBgColoredExtended1");
      this.applyResponsiveLayout(this.scale.gameSize);
    }
    this.playBackgroundCompleteBurst();
    if (this.finishedSfx) {
      this.finishedSfx.play();
    }
    this.time.delayedCall(1050, () => {
      this.scene.launch("EndScene");
      this.scene.pause();
    });
  }

  playSwitchSound() {
    if (!this.sound || !this.sound.get("switch") || !this.switchSfx) return;
    if (this.switchSfx.isPlaying) {
      this.switchSfx.stop();
    }
    this.switchSfx.play();
  }

  playSwitchComboSound(combo) {
    const normalizedCombo = ((Math.max(combo, 1) - 1) % 3) + 1;
    const comboKey = `switchCombo${normalizedCombo}`;
    if (!this.sound || !this.sound.get(comboKey)) return;

    const comboSfx = this[`switchCombo${normalizedCombo}Sfx`];
    if (!comboSfx) {
      return;
    }

    if (comboSfx.isPlaying) {
      comboSfx.stop();
    }
    comboSfx.play();
  }

  playBGMSound() {
    if (!this.sound || !this.sound.get("bgm")) return false;
    if (!this.bgmSfx) return false;
    if (this.bgmSfx.isPlaying) return true;
    if (this.bgmSfx.isPaused) {
      this.bgmSfx.resume();
      return true;
    }
    return this.bgmSfx.play();
  }

  startAudioOnFirstInteraction() {
    if (!this.gameTimerStarted) {
      this.gameTimerStarted = true;
      this.time.delayedCall(60000, () => {
        this.scene.launch("EndScene");
        this.scene.pause();
      });
    }

    if (this.hasStartedBgm) {
      return;
    }

    this.hasStartedBgm = this.playBGMSound();
  }
}
