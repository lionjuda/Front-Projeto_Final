import { Component } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { Router } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';
import { HttpErrorResponse } from '@angular/common/http';

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
    this.fornecedorService.createFornecedor(this.fornecedor).subscribe({
      next: () => {
        this.fornecedorService.showMessage('Fornecedor criado!');
        this.router.navigate(['/fornecedores']);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erro ao criar fornecedor:', err);
        console.log('Status:', err.status);
        console.log('Mensagem:', err.error);
        this.fornecedorService.showMessage('Erro ao criar fornecedor. Verifique os dados ou tente novamente.');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedores']);
  }
}