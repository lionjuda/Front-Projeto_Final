import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato-read.model';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contato-read',
  templateUrl: './contato-read.component.html',
  styleUrls: ['./contato-read.component.css']
})
export class ContatoReadComponent implements OnInit {
  contatos: Contato[] = [];
  displayedColumns = ['conId', 'conTelefoneComercial', 'conCelular', 'conEmail', 'action'];

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.contatoService.read().subscribe((contatos) => {
      this.contatos = contatos;
    });
  }
}
