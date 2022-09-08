import { dbi } from './main';
import { recursiveImport } from '@mostfeatured/dbi';

(async ()=> {
    let i = 1
    await recursiveImport('./src')
    await dbi.load();
    await dbi.login();
    dbi.data.interactions.forEach(inter => {
        console.info(`${i} | ${inter.name} | yüklendi.`)
        i++
    })
})();