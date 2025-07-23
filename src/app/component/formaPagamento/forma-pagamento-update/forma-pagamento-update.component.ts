import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from '../formaPagamento.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormaPagamentoService } from '../formaPagamento.service';

@Component({
  selector: 'app-forma-pagamento-update',
  templateUrl: './forma-pagamento-update.component.html',
  styleUrls: ['./forma-pagamento-update.component.css']
})
export class FormaPagamentoUpdateComponent implements OnInit {
  formaPagamento: FormaPagamento = {
    fpgDescricao: '',
    fpgAtivo: true,
    fpgPermiteParcelamento: false,
    fpgNumeroMaximoParcelas: 1,
    fpgTaxaAdicional: 0
  };

  constructor(
    private formaPagamentoService: FormaPagamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('fpgId');
    if (id) {
      this.formaPagamentoService.readById(+id).subscribe(fp => {
        this.formaPagamento = fp;
      });
    }
  }

  updateFormaPagamento(): void {
    this.formaPagamentoService.update(this.formaPagamento).subscribe(() => {
      this.formaPagamentoService.showMessage('Forma de pagamento atualizada com sucesso!');
      this.router.navigate(['/formaPagamento']);
    });
  }

  cancel(): void {
    this.router.navigate(['/formaPagamento']);
  }
}
