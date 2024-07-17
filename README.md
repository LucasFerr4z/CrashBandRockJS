# CrashBandRockJS
Meu Bot para  músicas para servers do discord, Obrigado pela atenção.


Um código completo para baixar música🎧 

Procurando um código para um bot de música? Este código totalmente aberto é feito para o seu projeto!

Se você precisar de ajuda com este projeto, para obter suporte mais rápido você pode se juntar ao servidor de ajuda 
https://discord.gg/kzAX4rYT

Se você não tiver nenhum conhecimento de desenvolvimento, é recomendável entrar no servidor de suporte do Discord para obter ajuda.

⚡ Configuração
Abra o arquivo de configuração localizado na pasta principal .config.js

Configuração básica

app/token, o token do bot disponível na seção Desenvolvedores do Discord

app/playing, a atividade do bot

app/global, se os comandos funcionarão em todos os servidores ou apenas em um (se globais, eles podem levar até uma hora para aparecer)

app/guild, a guilda para a qual o comando barra será carregado (isso só se aplica se global estiver definido como false)

app/extraMessages aumentará a quantidade de spam de bot, enquanto você obtém mais informações (não recomendado)

app/lang irá alterar o idioma do cliente do bot [Consulte abaixo os códigos de idioma suportados]

app/Translate_Timeout definirá o limite de tempo que o bot tem para criar a tradução com sucesso. Se o tempo acabar, apenas a versão original em inglês será impressa. Defina como se você deseja desativá-lo (Sem tempo limite).none

app/enableEmojis mudará os botões do player com emojis se definido como true. irá substituí-los por palavras básicas em inglêsfalse

opt/loopMessage, se a mensagem de que uma música é reproduzida deve ser enviada quando ela estiver em loop

(¯`·.¸¸.·´¯`·.¸¸.·´¯)
  ( \                 / )
 ( \ )               ( / )
( ) (Configuração modo dj) ( )
 ( / )               ( \ )
  ( /                 \ )
   (_.·´¯`·.¸¸.·´¯`·.¸_)


   opt/DJ/enabled, se o modo DJ deve ser ativado ou não
opt/DJ/roleName, o nome da função de DJ a ser usada
opt/DJ/commands, a lista de comandos limitada a membros com a função de DJ
Configuração avançada (só altere se você souber o que está fazendo)

opt/maxVol, o volume máximo que os usuários podem definir
opt/spotifyBridge, pega músicas/playlists do Spotify e pesquisa no YouTube e reproduz (altamente recomendado)
opt/volume, é o volume defaul em que a fila começará
opt/leaveOnEmpty, se o bot sair quando a fila estiver vazia
opt/leaveOnEmptyCooldown, o resfriamento antes que o bot saia quando a fila estiver vazia
opt/leaveOnEnd, se o bot vai sair ao terminar a fila
opt/leaveOnEndCooldown, o resfriamento antes que o bot saia ao terminar a fila
opt/discordPlayer, opções usadas pelo jogador do Discord


📑 Instalação


   ______________________________
 / \                             \.
|   |                            |.
 \_ |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |                            |.
    |   _________________________|___
    |  /                            /.
    \_/__________________________/.



    Para usar o projeto corretamente você precisará de algumas ferramentas.

AVISO: Você DEVE usar Node.js versão, caso contrário, você encontrará grandes problemas de compatibilidade.v18.20.2

FFmpeg para processar áudio

JS () === para ambientev18.20.2 =====

fios para gerenciamento de pacotes

Sem esquecer, é claro, o editor de código, recomendamos o código do Visual Studio

Agora em seu terminal, execute os seguintes comandos, supondo que você esteja no mesmo diretório que o projeto.

yarn install (ou não recomendado, pois pode não funcionar)npm install

node . (ou node main.js)

e Feito, seu bot deve estar rodando!

Realizado com ❤️ pela Comunidade.

Por favor, não retire a licença e mantenha os créditos neste projeto.

Para ter acesso total ao projeto e poder retirar os créditos, uma pequena doação é aceita.
