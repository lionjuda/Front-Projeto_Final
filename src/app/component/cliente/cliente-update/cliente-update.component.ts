import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {
  cliente: Cliente = {} as Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const cliId = this.route.snapshot.paramMap.get('cliId');
    if (cliId) {
      this.clienteService.readById(cliId).subscribe(cliente => {
        this.cliente = cliente;
      });
    }
  }

  updateCliente(): void {
    this.clienteService.update(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente atualizado com sucesso!');
      this.router.navigate(['/clientes']);
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}
