import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormaPagamento } from 'src/app/component/formaPagamento/formaPagamento.model';
import { formaPagamentoService } from 'src/app/component/formaPagamento/formaPagamento.service';

@Component({
  selector: 'app-forma-pagamento-crud',
  templateUrl: './forma-pagamento-crud.component.html',
  styleUrls: ['./forma-pagamento-crud.component.css']
})
export class FormaPagamentoCrudComponent implements OnInit {
  searchTerm: string = '';
  todasFormasPagamento: FormaPagamento[] = [];
  formasPagamentoFiltradas: FormaPagamento[] = [];
  showSearch: boolean = false;

  constructor(
    private router: Router,
    private formaPagamentoService: formaPagamentoService
  ) { }

  ngOnInit(): void {
    this.formaPagamentoService.read().subscribe(formas => {
      this.todasFormasPagamento = formas;
      this.formasPagamentoFiltradas = formas;
    });
  }

  navigateToFormaPagamentoCreate(): void {
    this.router.navigate(['/formaPagamentos/create']);
  }

  filtrarFormasPagamento(): void {
    const termo = this.searchTerm.toLowerCase().trim();

    if (!termo) {
      this.formasPagamentoFiltradas = this.todasFormasPagamento;
      return;
    }

    // Divide a busca em palavras (ex: "credito sim")
    const termos = termo.split(/\s+/);

    this.formasPagamentoFiltradas = this.todasFormasPagamento.filter(fp => {
      // Converte os dados do objeto para strings pesquisáveis
      const dados = [
        fp.fpgDescricao?.toLowerCase(),
        fp.fpgAtivo ? 'sim' : 'não',
        fp.fpgPermiteParcelamento ? 'sim' : 'não',
        String(fp.fpgNumeroMaximoParcelas ?? ''),
        String(fp.fpgTaxaAdicional ?? '')
      ];

      // Verifica se todos os termos pesquisados aparecem em algum campo
      return termos.every(t =>
        dados.some(campo => campo.includes(t))
      );
    });
  }
}
