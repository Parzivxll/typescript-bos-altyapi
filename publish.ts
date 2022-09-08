import { dbi } from './main';
import { recursiveImport } from '@mostfeatured/dbi';
import config from './config';

(async () => {
    config
    await recursiveImport('./src');
    await dbi.load();
    if(config.publish.type == 1) {
        await dbi.publish('Global', config.publish.clear);
        dbi.data.interactions.map(inter => {
            console.info(`${inter.name} | discorda gönderildi.`)
        })
    } else {
        await dbi.publish('Guild', config.publish.guildID, config.publish.clear);
        dbi.data.interactions.forEach((inter) => {
            console.info(`${inter.name} | discorda gönderildi.`)
        })
    }
})();
