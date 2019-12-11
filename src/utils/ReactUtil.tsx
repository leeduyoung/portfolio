export namespace ReactUtil
{
    let agent: string = navigator.userAgent;

    export function isNode(): boolean
    {
        return typeof process === "object"
            && typeof process.versions === "object"
            && typeof process.versions.node === "object";
    }

    export function isBrowser(): boolean
    {
        return !ReactUtil.isNode()
            && (typeof window !== "undefined" || typeof self !== "undefined");
    }

    export function isMobile(): boolean
    {
        return /Android/i.test(agent)
            || /BlackBerry/i.test(agent)
            || /iPhone|iPad|iPod/i.test(agent)
            || /IEMobile/i.test(agent);
    }

    export function isIOS(): boolean
    {
        return /iPhone|iPad|iPod/i.test(agent);
    }
}