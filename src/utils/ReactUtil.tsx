export class ReactUtil
{
    public static isNode(): boolean
    {
        return typeof process === 'object' 
            && typeof process.versions  === "object"
            && typeof process.versions.node === "object"
    }

    public static isBrowser(): boolean
    {
        return !ReactUtil.isNode()
            && (typeof window !== "undefined" || typeof self !== "undefined");
    }

    public static isMobile(): boolean
	{
		let agent: string = navigator.userAgent;
		return /Android/i.test(agent)
			|| /BlackBerry/i.test(agent)
			|| /iPhone|iPad|iPod/i.test(agent)
			|| /Opera Mini/i.test(agent)
			|| /IEMobile/i.test(agent);
    }

    public static isIos(): boolean
    {
        let agent: string = navigator.userAgent;
        return /iPhone|iPad|iPod/i.test(agent);
    }
}