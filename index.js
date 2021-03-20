const Discord = require('discord.js');
const client = new Discord.Client();

const {
    magentaBright,
    white
} = require('chalk')

const { token, prefix } = require('./config.json')

client.once('ready', () => {
    console.log('Ready to spam')
})

client.on('message', (message) => {
    const msg = message;

    const args = msg.content.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLocaleLowerCase();

    if (command === 'spam') {
        message.guild.channels.forEach((ch) => {
            if (ch.type === 'text') {
                setInterval(() => {
                    message.guild.fetchWebhooks().then(webs => webs.forEach((webhooks) => {
                        webhooks.send('@everyone Slayer runs u').then((msg) => {
                            console.log(magentaBright('[')+white('+')+magentaBright(']') + white(' Sent webhook message ') + magentaBright(msg.id))
                        }).catch(() => {
                            console.log(magentaBright('[')+white('-')+magentaBright(']') + white(' Failed to send webhook message '))
                        })
                    }))
                ch.createWebhook('Slayer runs cord').then((webhook) => {
                    console.log(magentaBright('[')+white('+')+magentaBright(']') + white(' Created webhook') + magentaBright(webhook.id))
                    setInterval(() => {
                        webhook.send('@everyone slayer runs yo ').then((msg) => {
                            console.log(magentaBright('[')+white('+')+magentaBright(']') + white(' Sent webhook message ') + magentaBright(msg.id))
                        }).catch(() => {
                            console.log(magentaBright('[')+white('-')+magentaBright(']') + white(' Failed to send webhook message '))
                        })
                    })
                }).catch(() => {
                    console.log(magentaBright('[')+white('-')+magentaBright(']') + white(' Failed to create webhook'))
                })
            })
            }
        })
    }
})

client.login(token);