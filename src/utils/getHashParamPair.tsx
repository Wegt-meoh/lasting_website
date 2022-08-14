export default function getHashParamPair (hash: string): { [index: string]: string } {
    if (!hash.includes("?")) return {};
    const hashParamGroup = hash.slice(hash.indexOf("?") + 1).split("&");
    const result: { [index: string]: string } = {};

    hashParamGroup.forEach((item) => {
        if (!item.includes("=")) return;
        const pair = item.split("=");
        const _name = pair[0]; const _value = pair[1];
        result[_name] = decodeURI(_value);
    });

    return result;
}
