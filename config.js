const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "STRAVA 3.2"
global.ownerName = "nun"
global.botNumber = "6285337306261"
global.devNumber = ["6285337306261"]

global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})