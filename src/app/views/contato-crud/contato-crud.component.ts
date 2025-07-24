import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from 'src/app/component/contato/contato-read.model';
import { ContatoService } from 'src/app/component/contato/contato.service';

@Component({
  selector: 'app-contato-crud',
  templateUrl: './contato-crud.component.html',
  styleUrls: ['./contato-crud.component.css']
})
export class ContatoCrudComponent implements OnInit {
  searchTerm: string = '';
  todosContatos: Contato[] = [];
  contatosFiltrados: Contato[] = [];
  showSearch: boolean = false;

  constructor(
    private router: Router,
    private contatoService: ContatoService
  ) { }

  ngOnInit(): void {
    this.contatoService.read().subscribe(contatos => {
      this.todosContatos = contatos;
      this.contatosFiltrados = contatos;
    });
  }

  navigateToContatoCreate(): void {
    this.router.navigate(['/contatos/create']);
  }

  filtrarContatos(): void {
    const termo = this.searchTerm.toLowerCase().trim();

    if (!termo) {
      this.contatosFiltrados = this.todosContatos;
      return;
    }

    this.contatosFiltrados = this.todosContatos.filter(contato =>
      contato.conTelefoneComercial?.toLowerCase().includes(termo) ||
      contato.conCelular?.toLowerCase().includes(termo) ||
      contato.conEmail?.toLowerCase().includes(termo)
    );
  }
}
