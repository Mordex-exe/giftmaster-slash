const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../config.json');
const stock = require('./stock');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Display the command list.'),

	async execute(interaction) {
		const { commands } = interaction.client;

		const commandListEmbed = new MessageEmbed()
			.setColor(config.color.default)
			.setTitle('Help Panel')
			.setDescription(`👋 Merhaba, **${interaction.guild.name}**'a hoş geldiniz! 🌟 Sizlere en iyi hizmetleri sunmak için buradayız. 🚀`)
			.setImage(config.banner)
			.setThumbnail(interaction.client.user.displayAvatarURL({ dynamic: true, size: 64 })) // Set the bot's avatar as the thumbnail
			.addFields({
				name: `Commands`,
				value: "`/help`   **Yardım komutlarını görüntüler**\n`/create` **Yeni bir servis oluştur**\n`/free`   **Ücretsiz bir ödül oluşturur**\n`/add`    **Stoğa yeni bir ödül ekler**\n`/stock`  **Mevcut stoğu görüntüler**\n`/premium` **Premium bir ödül oluşturur**"
			})
			.setFooter(interaction.user.tag, interaction.user.displayAvatarURL({ dynamic: true, size: 64 }))
			.setTimestamp()
			.addField('Bağlantılar', `[**Discord**](https://discord.gg/bedavahesaplar)`);

		await interaction.reply({ embeds: [commandListEmbed] });
	},
};
