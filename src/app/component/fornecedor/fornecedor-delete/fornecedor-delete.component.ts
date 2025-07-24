import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-delete',
  templateUrl: './fornecedor-delete.component.html',
  styleUrls: ['./fornecedor-delete.component.css']
})
export class FornecedorDeleteComponent implements OnInit {
  fornecedor!: Fornecedor;

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const forId = this.route.snapshot.paramMap.get('forId');
    if (forId) {
      this.fornecedorService.readByIdFornecedor(Number(forId)).subscribe(fornecedor => {
        this.fornecedor = fornecedor;
      });
    } else {
      this.fornecedorService.showMessage('ID do fornecedor não encontrado!');
      this.router.navigate(['/fornecedor']);
    }
  }

  deleteFornecedor(): void {
    if (!this.fornecedor.forId) return; // segurança extra
    this.fornecedorService.deleteFornecedor(this.fornecedor.forId).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor excluído com sucesso!');
      this.router.navigate(['/fornecedor']);
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedor']);
  }
}
