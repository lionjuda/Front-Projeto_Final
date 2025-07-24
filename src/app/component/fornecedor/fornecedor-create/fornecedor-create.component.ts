import { Component } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { Router } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent {
  fornecedor: Fornecedor = {
    forNomeFantasia: '',
    forCnpj: '',
    forRazaoSocial: '',
    endRua: '',
    endNumero: '',
    endCep: '',
    endCidade: '',
    endEstado: '',
    conCelular: '',
    conTelefoneComercial: '',
    conEmail: ''
  };

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router
  ) { }

  createFornecedor(): void {
    this.fornecedorService.createFornecedor(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor criado!');
      this.router.navigate(['/fornecedor']);
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedor']);
  }
}
