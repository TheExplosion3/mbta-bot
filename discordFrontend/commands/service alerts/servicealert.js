const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('servicealerts')
		.setDescription('Pulls up all current MBTA service alerts.'),
	async execute(interaction) {
		
	},
};
