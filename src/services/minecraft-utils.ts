export class MinecraftUtils {

    static getSkinUrl(skinData: string) {
        return JSON.parse(Buffer.from(skinData, 'base64').toString('ascii')).textures.SKIN.url;
    }

}