import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/component/cliente/cliente.model';
import { ClienteService } from 'src/app/component/cliente/cliente.service';

@Component({
  selector: 'app-cliente-crud', // Define o seletor do componente
  templateUrl: './cliente-crud.component.html', // Caminho para o template HTML
  styleUrls: ['./cliente-crud.component.css'] // Caminho para o arquivo de estilos CSS
})
export class ClienteCrudComponent implements OnInit {
  // Construtor para injetar o serviço de roteamento
  searchTerm: string = '';
  todosClientes: Cliente[] = [];
  clientesFiltrados: Cliente[] = [];

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) {}

  // Método chamado ao inicializar o componente
  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.todosClientes = clientes;
      this.clientesFiltrados = clientes;
    });
  }
  
  // Método para navegar para a tela de criação de clientes
  navigateToClienteCreate(): void {
    this.router.navigate(['/clientes/create']);
  }

filtrarClientes(): void {
    const termo = this.searchTerm.toLowerCase();
    this.clientesFiltrados = this.todosClientes.filter(cliente =>
      cliente.cliNome.toLowerCase().includes(termo)
    );
  }
}