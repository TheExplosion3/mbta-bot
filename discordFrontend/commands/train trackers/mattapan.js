const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mattapan')
		.setDescription('Gets all information about currently running Mattapan Trolley LRVs'),
	async execute(interaction) {
		
	},
};
