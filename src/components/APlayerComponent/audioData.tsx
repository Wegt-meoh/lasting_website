interface APlayerAudioOptionType {
    name: string
    artist: string
    cover: string
    url: string
}

const audios: APlayerAudioOptionType[] = [
];

function getAudios (): APlayerAudioOptionType[] {
    return audios;
}

export { getAudios };
