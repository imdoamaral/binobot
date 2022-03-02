const { Client, Intents, Message } = require('discord.js');
const { token } = require('../config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// EVENTOS
client.on('ready', () => {
    console.log(`${client.user.username} está online :)`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    // Nossa missão
    if (message.content === 'nossa missão' ||
        message.content === 'nossa missao' ||
        message.content === 'nossamissao') {

        message.channel.send('Promover o **empreendedorismo júnior** e **democratizar a transformação digital** \natravés de soluções tecnológicas que contribuem para o desenvolvimento da região que atuamos.');
    }

    // Nossa Visão <3
    if (message.content === 'nossa visão' ||
        message.content === 'nossa visao' ||
        message.content === 'nossavisao') {

        message.channel.send('Ser uma empresa **referência em serviços de Tecnologia da Informação** \ne reconhecida pelo MEJ pela sua atuação, resultados e projetos de alto \nimpacto nas regiões do Médio Piracicaba e Vale do Aço.')
    }

    // Nossos valores
    if (message.content === 'nossos valores' ||
        message.content === 'nossosvalores') {

            message.channel.send('🗸 Orgulho de ser visionário\n🗸 Empatia\n🗸 Transparência\n🗸 Resiliência\n🗸 Agilidade\n🗸 Responsabilidade Socioambiental\n🗸 Proatividade\n🗸 Colaboração\n')
    }

    // Nossa paleta de cores
    if(message.content === 'nossa paleta') {
        message.channel.send('#88B04B, #292929, #1F1F28');
    }

    // Teste
    if (message.content === 'teste') {
        message.channel.send('Quem testa é o usuário.')
    }
});

client.login(token);