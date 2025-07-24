import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent implements OnInit {
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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('forId');
    if (id) {
      this.fornecedorService.readByIdFornecedor(+id).subscribe(fornecedor => {
        this.fornecedor = fornecedor;
      });
    }
  }

  updateFornecedor(): void {
    this.fornecedorService.updateFornecedor(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor atualizado com sucesso!');
      this.router.navigate(['/fornecedor']);
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedor']);
  }
}
