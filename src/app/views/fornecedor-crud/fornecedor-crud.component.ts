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
  fornecedorsFiltrados: Fornecedor[] = [];

  constructor(
    private router: Router,
    private fornecedorService: FornecedorService
  ) {}

  ngOnInit(): void {
    this.fornecedorService.read().subscribe(fornecedores => {
      this.todosFornecedores = fornecedores;
      this.fornecedorsFiltrados = fornecedores;
    });
  }

  navigateToFornecedorCreate(): void {
    this.router.navigate(['/fornecedor/create']);
  }

  filtrarClientes(): void {
    const termo = this.searchTerm.toLowerCase();
    this.fornecedorsFiltrados = this.todosFornecedores.filter(f =>
      f.forNomeFantasia.toLowerCase().includes(termo)
    );
  }
}