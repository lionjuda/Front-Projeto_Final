import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/component/fornecedor/fornecedor.model';
import { FornecedorService } from 'src/app/component/fornecedor/fornecedor.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-fornecedor-crud',
  templateUrl: './fornecedor-crud.component.html',
  styleUrls: ['./fornecedor-crud.component.css']
})
export class FornecedorCrudComponent implements OnInit {
  searchTerm: string = '';
  todosFornecedores: Fornecedor[] = [];
  fornecedoresFiltrados: Fornecedor[] = [];
  showSearch: boolean = false;

  constructor(
    private router: Router,
    private fornecedorService: FornecedorService
  ) { }

  ngOnInit(): void {
    this.fornecedorService.readFornecedor().subscribe({
      next: (fornecedores) => {
        this.todosFornecedores = fornecedores;
        this.fornecedoresFiltrados = fornecedores;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erro ao carregar fornecedores:', err);
        console.log('Status:', err.status);
        console.log('Mensagem:', err.error);
        alert('Não foi possível carregar a lista de fornecedores. Verifique a conexão com o servidor.');
      }
    });
  }

  navigateToFornecedorCreate(): void {
    this.router.navigate(['/fornecedores/create']);
  }

  filtrarFornecedores(): void {
    const termo = this.searchTerm.toLowerCase().trim();
    if (!termo) {
      this.fornecedoresFiltrados = this.todosFornecedores;
      return;
    }
    this.fornecedoresFiltrados = this.todosFornecedores.filter(fornecedor => {
      return (
        fornecedor.forNomeFantasia?.toLowerCase().includes(termo) ||
        fornecedor.forCnpj?.toLowerCase().includes(termo) ||
        fornecedor.forRazaoSocial?.toLowerCase().includes(termo)
      );
    });
  }
}