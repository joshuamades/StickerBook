export function LoadBase64Audio (scene, audioFiles)
{
    audioFiles.forEach(file => {
        scene.load.audio({
            key: file.key,
            url: file.data,
            config: file.config || {},
        });
    });
}
