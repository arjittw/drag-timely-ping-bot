const { SlashCommandBuilder } = require('discord.js');
const state = require('../../state');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('drag')
        .setDescription('Drags someone out!')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('The user to drag out')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('message')
                .setDescription('Wanna say something?')
                .setRequired(true)
        ),
    async execute(interaction) {
        // only if user who ran command is an admin
        if (!(interaction.member.roles.cache.some(role => role.name === 'Minions'))) {
            return interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
        }
        // const user = interaction.options.getUser('target');
        const user = interaction.options.getUser('target');
        const message = interaction.options.getString('message');

        state.add(user, message, interaction);


        // await interaction.reply({ content: `${user.username} has been dragged out!` });
        // Additional logic for dragging the user can be added here

        // ping that user every 5 seconds with @
        await interaction.reply(`About to drag you out, ${user.toString()}!`);
        // add user to "to drag array"
    },
};