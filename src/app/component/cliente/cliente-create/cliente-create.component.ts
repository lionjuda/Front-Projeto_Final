import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent {
  cliente: Cliente = {
    cliNome: '',
    cliCpf: '',
    cliEmail: '',
    cliTelefone:''
    
  };

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente criado!');
      this.router.navigate(['/clientes']);
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}
