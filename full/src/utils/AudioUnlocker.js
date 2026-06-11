export function unlockHtml5AudioTags(scene) {
  const sound = scene.sound;
  if (!sound) return;

  sound.locked = false;
  sound.unlocked = true;

  if (sound.lockedActionsQueue) {
    sound.lockedActionsQueue.length = 0;
  }

  scene.game?.cache?.audio?.entries?.each((key, tags) => {
    tags.forEach((tag) => {
      tag.dataset.locked = "false";
    });
    return true;
  });
}

export function createNativeBgm(src, { volume = 0.2 } = {}) {
  const audio = new Audio(src);
  audio.loop = true;
  audio.preload = "auto";
  audio.playsInline = true;
  audio.setAttribute("playsinline", "true");
  audio.setAttribute("webkit-playsinline", "true");
  audio.volume = volume;
  audio.muted = true;
  audio.targetVolume = volume;
  audio.load();
  return audio;
}

export function startNativeBgmSilently(audio) {
  if (!audio || audio.hasStarted) return;
  audio.hasStarted = true;
  audio.muted = true;
  audio.volume = audio.targetVolume ?? 0.2;
  const playPromise = audio.play();
  if (playPromise?.catch) {
    playPromise.catch((e) => {
      console.warn("Failed to start native BGM", e);
      audio.hasStarted = false;
    });
  }
}

export function raiseNativeBgmVolume(audio) {
  if (!audio || (audio.hasRaisedVolume && !audio.paused)) return;
  audio.hasRaisedVolume = true;
  audio.defaultMuted = false;
  audio.muted = false;
  audio.volume = audio.targetVolume ?? 0.2;
  audio.hasStarted = true;

  const playPromise = audio.play();
  if (playPromise?.catch) {
    playPromise.catch((e) => {
      console.warn("Failed to raise native BGM", e);
      audio.hasStarted = false;
      audio.hasRaisedVolume = false;
    });
  }
}

export function stopNativeBgm(audio) {
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
  audio.hasStarted = false;
  audio.hasRaisedVolume = false;
}
