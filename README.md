# Chat-Angular-2-e-Node.js---Sockect-io
Chat Angular 2 e Node.js - Sockect-io


Quando estava iniciando com angular 2 percebi que não tinha muita coisa relacionado com servidor Nodejs e socket.io, por isso decidi resevar um tempo para criar um chat simples que utiliza atravez de socket-io para enviar mensagem a outro usúario, projeto simples mas de grande conhecimento para quem quiser de fato aprender e apromorar os seus.
Bom estudos.

1- Ao baixar o repositorio abra a pasta "Chat-simples" 
 
 *OBS: Certifique-se que o npm está instalado. (Estou levando em consideração que já saiba utilizar o npm) abra o terminal dentro desta pasta ou navegue até ela e digite " npm install ". Irá baixar todos os dados da pasta "node_modules".

- Pronto seu app angular foi baixado e configurado.

2 - Agora você precisa colocar o servidor Noje.js no ar para pode abrir aplicação.
  -Navegue ou abra a pasta "servidor-nodejs" e abra o terminal dentro dela,  lá vai conter um arquivo chamado "server.js",
  execute o comando o comando dessa forma "nodemon server.js" se tudo ocorrer bem vai aparecer uma mensagem igual a essa. 

  [nodemon] starting `node server.js`
  servidor node ligado na port 3000
	
	*OBS: O arquivo chamado server.js esta contido todos o codigo usado para startar a aplicação no node.js 
	
3- abra duas janelas no novegador em http://localhost:3000 e pronto, pode curtir e aproveitar para criar varias funcionalidades usando o socket-io.

*OBS: Se você quiser mudar a estrutura da aplicaçao em angular, bascar ir até a pasta "chat-simples" abrir o terminal e usar o comando "ng build" ou se for para prudução use o "ng build --prod", o comondo ng server não funcionara nesse situação pois ele vai criar outro servidor na port 4200 e nao vai conectar o socket-io.

Para maiores duvidas, informações e criticas, pode mandar um email para "esllenjulio@hotmail.com" que responderei o mais breve possivel.

Link para duvidas do socket.io: https://socket.io/docs/


  
