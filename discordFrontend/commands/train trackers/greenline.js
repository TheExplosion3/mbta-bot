const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('greenline')
		.setDescription('Gets all information about currently running Green Line LRVs'),
	async execute(interaction) {
		
	},
};
