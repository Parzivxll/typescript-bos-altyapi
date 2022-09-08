export default {
    /// Token
    clientToken: "" as string,

    /// Developers
    developers: new Set([
        "299955838368612353"
    ]),
    /// Publish Config 
    publish: {
        type: 0 as number, /// 0 = Guild || 1 = Global
        guildID: "" as string, /// Required only type Guild
        clear: false as boolean
    }
}