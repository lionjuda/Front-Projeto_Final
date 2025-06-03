import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormaPagamento } from 'src/app/component/formaPagamento/formaPagamento.model';
import { formaPagamentoService } from 'src/app/component/formaPagamento/formaPagamento.service';

@Component({
  selector: 'app-forma-pagamento-crud', // Nome padrão com hífen
  templateUrl: './forma-pagamento-crud.component.html', // Nomes com hífen (Angular Style Guide)
  styleUrls: ['./forma-pagamento-crud.component.css']
})
export class FormaPagamentoCrudComponent implements OnInit {
  searchTerm: string = '';
  todosFormaPagamentos: FormaPagamento[] = [];
  formaPagamentosFiltrados: FormaPagamento[] = [];

  constructor(
    private router: Router,
    private formaPagamentoService: formaPagamentoService
  ) {}

  ngOnInit(): void {
    this.formaPagamentoService.read().subscribe(formaPagamentos => {
      this.todosFormaPagamentos = formaPagamentos;
      this.formaPagamentosFiltrados = formaPagamentos;
    });
  }

  navigateToFormaPagamentoCreate(): void {
    this.router.navigate(['/formaPagamentos/create']);
  }

  filtrarFormaPagamentos(): void {
    const termo = this.searchTerm.toLowerCase();
    this.formaPagamentosFiltrados = this.todosFormaPagamentos.filter(fp =>
      fp.fpgDescricao.toLowerCase().includes(termo)
    );
  }
}