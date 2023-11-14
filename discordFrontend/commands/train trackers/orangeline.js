const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('orangeline')
		.setDescription('Gets all information about currently running Orange Line subway vehicles'),
	async execute(interaction) {
		
	},
};
