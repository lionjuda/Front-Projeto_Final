import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: Product = {
    proNome: '',
    proDescricao: '',
    proPrecoCusto: undefined,
    proPrecoVenda: undefined,
    proQuantidadeEstoque: undefined,
    proCategoria: '',
    proCodigoBarras: '',
    proMarca: '',
    proAtivo: true,
    proDataCadastro: '',
    proDataAtualizacao: ''
  };

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}