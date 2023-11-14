const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('blueline')
		.setDescription('Gets all information about currently running Blue Line subway vehicles'),
	async execute(interaction) {
		
	},
};
