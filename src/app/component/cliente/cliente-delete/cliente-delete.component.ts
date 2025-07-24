import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {
  cliente!: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('cliId');
    if (id) {
      this.clienteService.readByIdCliente(id).subscribe(cliente => {
        this.cliente = cliente;
      });
    }
  }

  deleteCliente(): void {
    if (this.cliente?.cliId) {
      this.clienteService.deleteCliente(this.cliente.cliId).subscribe(() => {
        this.clienteService.showMessage('Cliente excluído com sucesso!');
        this.router.navigate(['/clientes']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}
