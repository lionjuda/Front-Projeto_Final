import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/component/product/product.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productCount: number = 0;

  // Dados para o gráfico de pizza
  pizzaType: ChartType = 'pie';
  pizzaData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Produto A', 'Produto B', 'Produto C'],
    datasets: [
      {
        data: [300, 150, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  // Dados para o gráfico de barras
  barType: ChartType = 'bar';
  barData: ChartData<'bar', number[], string | string[]> = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
    datasets: [
      {
        label: 'Ganhos',
        data: [5000, 7000, 4000, 6000],
        backgroundColor: '#36A2EB'
      }
    ]
  };

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe({
      next: (products) => {
        this.productCount = products.length;
      },
      error: (error) => {
        console.error('Erro ao carregar produtos:', error);
        this.productCount = 0;
      }
    });
  }
}
