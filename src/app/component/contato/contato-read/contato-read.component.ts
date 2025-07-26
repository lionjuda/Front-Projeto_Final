import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato-read.model';
import { ContatoService } from '../contato.service';
import { HttpErrorResponse } from '@angular/common/http';

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
    this.contatoService.read().subscribe({
      next: (contatos) => {
        this.contatos = contatos;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erro ao carregar contatos:', err);
        console.log('Status:', err.status);
        console.log('Mensagem:', err.error);
        alert('Erro ao carregar contatos. Tente novamente mais tarde.');
      }
    });
  }
}