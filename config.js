module.exports = {
    app: {
        token: 'xxx'
        playing: 'com amor by iCrash ❤️',
        global: true,
        guild:'xxx',
        extraMessages: false,
        loopMessage: false,
        lang:'en',
        enableEmojis:false,
        },

    emojis:{
        'voltar':'⏪',
        'passar': '⏩',
        'ResumePause': '⏯️',
        'Salvar a track': '💾',
        'volume+': '🔊',
        'volumeDown': '🔉',
        'loop':'🔁',

    },

    opt:{
        DJ:{
            ligado:false,
            NomeCargo:'',
            commands:[]
        },
        Translate_Timeout:10000,
        maxVol:100,
        spotifyBridge: true,
        volume:75,
        leaveOnEmpty:true,
        leaveOnEmptyCooldown:30000,
        leaveOnEnd:true,
        leaveOnEndCooldown:30000,
        discordPlayer:{
            ytdlOptions:{
                quality:'highestaudio',
                highWaterMark:1 <<25
            }
        }
    }
};