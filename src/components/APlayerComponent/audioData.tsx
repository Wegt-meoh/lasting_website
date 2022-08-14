interface APlayerAudioOptionType {
    name: string
    artist: string
    cover: string
    url: string
}

const audios: APlayerAudioOptionType[] = [{
    name: "Ed Sheeran / J.Fla - Shape of You (Mashup)",
    artist: "ɴᴏᴛʜɪɴɢ.",
    cover: "https://p3.music.126.net/qfSm3q6JhRwf8IeLpyfIpw==/109951162970500060.jpg?param=240y240&type=webp",
    url: "https://m9.music.126.net/20220728142845/e03f65fc96b98836abb2f968259a544f/ymusic/c3af/e475/b49e/9d5ec73cb14a00419bffef7389f31cdc.mp3"
}, {
    name: "Keep Going - 继续前行",
    artist: "ChakYoun9",
    cover: "https://p3.music.126.net/vcbH0U-oGi8y4DJswh84vg==/109951163006324085.jpg?param=240y240&type=webp",
    url: "https://m9.music.126.net/20220728143405/f66bdfd7a306c61b2adf1e83b3a6d22d/ymusic/1c0f/05d4/ab4f/266744d8fb496d731bb1733307badc9d.mp3"
}, {
    name: "One Last Kiss",
    artist: "宇多田ヒカル",
    cover: "https://p3.music.126.net/l3G4LigZnOxFE9lB4bz_LQ==/109951165791860501.jpg?param=240y240&type=webp",
    url: "https://m801.music.126.net/20220728142323/a034c7e9ae4dfccf1042b04557898f58/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/15965327913/3c28/baa3/d890/0737b6ba66b948d61f80b77cdd6bca5e.mp3"
}, {
    name: "水星记",
    artist: "郭顶",
    cover: "https://api.iwz.me/meting/api.php?server=netease&type=pic&id=2946691248081599",
    url: "https://m801.music.126.net/20220728142646/8143b52beb7703eafc6b81f11416a411/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096417185/a70a/53e9/6da0/e8230f5602c27e363e8642cbd9fac036.mp3"
}];

function getAudios (): APlayerAudioOptionType[] {
    return audios;
}

export { getAudios };
