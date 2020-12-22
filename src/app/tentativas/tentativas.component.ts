import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = "../../assets/coracao_vazio.png";
  public coracaoCheio: string = "../../assets/coracao_cheio.png";

  public vida1: string = this.coracaoVazio;
  public vida2: string = this.coracaoCheio;
  public vida3: string = this.coracaoCheio;

  constructor() { }

  ngOnInit(): void {
  }

}
