import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent implements OnInit {
  fornecedores: Fornecedor[] = [];
  displayedColumns = ['forId', 'forNomeFantasia', 'forCnpj', 'forRazaoSocial', 'action'];

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    this.fornecedorService.read().subscribe({
      next: data => this.fornecedores = data,
      error: () => this.fornecedorService.showMessage('Erro ao carregar fornecedores')
    });
  }
}
