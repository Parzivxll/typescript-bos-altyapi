import { ActivityType } from 'discord.js';
import { dbi } from '../../main';

dbi.register(({ Event }) => {
    Event({
        name: "ready",
        async onExecute() {
            console.log(`${dbi.client.user.username} aktif edildi.`)
            await dbi.client.user.setActivity({ name: `The Witcher`, type: ActivityType.Watching})
        }
    })
});