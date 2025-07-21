const { SlashCommandBuilder } = require('discord.js');
const state = require('../../state');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Leave Them Alone!'),
    async execute(interaction) {
        // only if user who ran command is an admin
        if (!(interaction.member.roles.cache.some(role => role.name === 'Minions'))) {
            return interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
        }
        // clear the wanted list
        users = state.getList();
        if (users.length === 0) {
            return interaction.reply({ content: 'There are no users to clear.', ephemeral: true });
        }
        str = ""
        for (const user of users) {
            str += `${user.user.toString()}, `;
        }
        await interaction.reply({ content: `${str}you can now rest in peace!` });
        state.clear();

    },
};