import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from 'src/app/component/contato/contato-read.model';
import { contatoService } from 'src/app/component/contato/contato.service';


@Component({
  selector: 'app-contato-crud', // Define o seletor do componente
  templateUrl: './contato-crud.component.html', // Caminho para o template HTML
  styleUrls: ['./contato-crud.component.css'] // Caminho para o arquivo de estilos CSS
})
export class ContatoCrudComponent implements OnInit {
  // Construtor para injetar o serviço de roteamento
  searchTerm: string = '';
  todosContatos: Contato[] = [];
  contatosFiltrados: Contato[] = [];

  constructor(
    private router: Router,
    private contatoService: contatoService
  ) {}

  // Método chamado ao inicializar o componente
  ngOnInit(): void {
    this.contatoService.read().subscribe(contatos => {
      this.todosContatos = contatos;
      this.contatosFiltrados = contatos;
    });
  }
  
  // Método para navegar para a tela de criação de contatos
  navigateToContatoCreate(): void {
    this.router.navigate(['/contatos/create']);
  }

filtrarContatos(): void {
    const termo = this.searchTerm.toLowerCase();
    this.contatosFiltrados = this.todosContatos.filter(contato =>
      contato.conTelefoneComercial.toLowerCase().includes(termo)
    );
  }
}