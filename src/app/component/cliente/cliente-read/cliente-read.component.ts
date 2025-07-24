import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {
  clientes: Cliente[] = [];
  displayedColumns = [
    'cliId',
    'cliNome',
    'cliCpf',
    'cliEmail',
    'cliTelefone',
    'conEmail',
    'conCelular',
    'conTelefoneComercial',
    'endRua',
    'endNumero',
    'endCidade',
    'endCep',
    'endEstado',
    'action'
  ];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.readCliente().subscribe(clientes => {
      this.clientes = clientes;
    });
  }
}
