import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Array<Frase> = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;
  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();


  //Inicia rodadaFrase com a frase da rodada
  constructor() {
    this.atualizarRodada();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  //Recebe a frase digitada pelo usuário a cada letra digitada
  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  //Verifica se a resposta está correta quando clica-se no botão Verificar
  public verificarResposta(): void {
    if (this.resposta == this.rodadaFrase.frasePtBr) {
      //atualiza a barra de progresso
      this.progresso += (100.0 / this.frases.length);

      this.rodada++;
      //Caso ganhe
      if (this.rodada === 4) {
        this.encerrarJogo.emit('Vitória');
      }
      this.atualizarRodada();
    } else {

      //atualiza a vida
      this.tentativas--;

      //caso as vidas acabe
      if (this.tentativas == -1) {
        this.encerrarJogo.emit('Derrota');
      }
    }
  }

  public atualizarRodada(): void {
    //atualiza a nova frase da rodada
    this.rodadaFrase = this.frases[this.rodada];

    //Limpa a resposta
    this.resposta = '';
  }

}
