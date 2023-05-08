module.exports = (client, interaction) => {
    if(interaction.isChatInputCommand()) {
        let command = client.commands.get(interaction.commandName)
        if(!command) return;
        command(client, interaction)
    }
    if(interaction.isButton()) {
        //require(interaction.customId)(client, interaction)
    }
}
