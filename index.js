const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('eos', 'EOS');
bot.registry.registerGroup('iota', 'IOTA');
bot.registry.registerGroup('btc', 'BTC');
bot.registry.registerGroup('c', 'C');
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(process.env.ACCESS_TOKEN);


