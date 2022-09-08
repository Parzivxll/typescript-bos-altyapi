import { dbi } from '../../main';

dbi.register(({ ChatInput, ChatInputOptions }) => {
    ChatInput({
        name: "deneme deneme",
        description: "...",
        options: [
            ChatInputOptions.string({
                name: "deneme",
                description: "...",
                required: true
            })
        ],
        async onExecute({ interaction, locale }) {
            await interaction.deferReply();
            interaction.editReply({ content: `${locale.user.data.test.test()}` })
        }
    });
});