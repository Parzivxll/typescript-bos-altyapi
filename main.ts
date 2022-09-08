import { createDBI } from '@mostfeatured/dbi';
import config from './config';

export const dbi = createDBI("witcher", {
    discord: {
        token: config.clientToken,
        options: {
            intents: [3276799],
        }
    },
    defaults: {
        locale: 'en',
        defaultMemberPermissions: [],
        directMessages: false
    },
});

dbi.events.on('beforeInteraction', async (ctx) => {
    return true;
});