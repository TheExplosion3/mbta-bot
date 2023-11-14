const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('redline')
		.setDescription('Gets all information about currently running Red Line subway vehicles'),
	async execute(interaction) {
		
	},
};
