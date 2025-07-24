import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/component/fornecedor/fornecedor.model';
import { FornecedorService } from 'src/app/component/fornecedor/fornecedor.service';

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
    this.fornecedorService.readFornecedor().subscribe(fornecedores => {
      this.todosFornecedores = fornecedores;
      this.fornecedoresFiltrados = fornecedores;
    });
  }

  navigateToFornecedorCreate(): void {
    this.router.navigate(['/fornecedor/create']);
  }

  filtrarFornecedores(): void {
    const termo = this.searchTerm.toLowerCase().trim();

    if (!termo) {
      // Se o campo de busca estiver vazio, mostra todos os fornecedores
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
