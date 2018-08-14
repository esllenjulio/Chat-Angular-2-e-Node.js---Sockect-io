import { Component } from '@angular/core';
import * as io from 'socket.io-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  msgRetorn: string = '';
  listaMensagemRecebida: any[] = [];
  listaMensagemEnviadas: any[] = [];

  socket;

  constructor() {
    this.socket = io();
    // this.socket.emit('msg', "seu nome");

    this.socket.on('msg', (msg) => {
      console.log(msg)
      this.adicionarMensagemRecebida(msg)
    })
  }



  /* metodo usado para enviar uma nova mensagem 
  para o servidor atraves do sockect */
  public enviarMensagem(novaMensagem: any): void {

    this.adicionarMensagemEnviadas(novaMensagem)
    this.socket.emit('msg', novaMensagem);

  }


  /* metodo usado para receber a nova mensagem e adicionar no array listaMesagem*/
  adicionarMensagemRecebida(msg: any) {
    this.listaMensagemRecebida.push(msg)
  }

  adicionarMensagemEnviadas(msg: any) {
    this.listaMensagemEnviadas.push(msg)
  }

}
