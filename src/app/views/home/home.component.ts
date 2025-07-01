import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/component/product/product.service';


@Component({
  selector: 'app-home', // Define o seletor do componente
  templateUrl: './home.component.html', // Caminho para o template HTML
  styleUrls: ['./home.component.css'] // Caminho para o arquivo de estilos CSS
})
export class HomeComponent implements OnInit {
  productCount: number = 0;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe({
      next: (products) => {
        this.productCount = products.length;// Conta a quantidade de produtos
      },
      error: (error) => {
        console.error('Erro ao carregar produtos:', error); //Log de erro
        this.productCount = 0;
      }
    });
  }
}