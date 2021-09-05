const Discord = require ('discord.js');
const { Intents, Collection } = Discord;
const client = new Discord.Client({
    intents:
    [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_INVITES
    ] 
});

const { Token } = require('./config.json');

client.commands = new Collection();
client.cooldowns = new Collection();

// client.once("ready", () =>  {
//     console.log('The client is now online 🟢');
//     client.user.setActivity("Serendib Roleplay", {type: 'WATCHING'});
// });
['eventsHandler', 'commandsHandler'].forEach(handler => {
    require(`./Handlers/${handler}`)(client, Discord);
});

client.login(Token)
