import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/component/cliente/cliente.model';
import { ClienteService } from 'src/app/component/cliente/cliente.service';

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.css']
})
export class ClienteCrudComponent implements OnInit {
  searchTerm: string = '';
  todosClientes: Cliente[] = [];
  clientesFiltrados: Cliente[] = [];
  showSearch: boolean = false;

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.todosClientes = clientes;
      this.clientesFiltrados = clientes;
    });
  }

  navigateToClienteCreate(): void {
    this.router.navigate(['/clientes/create']);
  }

  filtrarClientes(): void {
    const termo = this.searchTerm.toLowerCase().trim();

    if (!termo) {
      this.clientesFiltrados = this.todosClientes;
      return;
    }

    this.clientesFiltrados = this.todosClientes.filter(cliente =>
      cliente.cliNome?.toLowerCase().includes(termo) ||
      cliente.cliCpf?.toLowerCase().includes(termo) ||
      cliente.cliEmail?.toLowerCase().includes(termo) ||
      cliente.cliTelefone?.toLowerCase().includes(termo)
    );
  }
}
