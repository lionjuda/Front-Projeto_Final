import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormaPagamento } from '../formaPagamento.model';
import { FormaPagamentoService } from '../formaPagamento.service';

@Component({
  selector: 'app-forma-pagamento-create',
  templateUrl: './forma-pagamento-create.component.html',
  styleUrls: ['./forma-pagamento-create.component.css']
})
export class FormaPagamentoCreateComponent {
  formaPagamento: FormaPagamento = {
    fpgDescricao: ''
  };

  constructor(
    private formaPagamentoService: FormaPagamentoService,
    private router: Router
  ) { }

  createFormaPagamento(): void {
    this.formaPagamentoService.create(this.formaPagamento).subscribe(() => {
      this.formaPagamentoService.showMessage('Forma de pagamento criada com sucesso!');
      this.router.navigate(['/formaPagamento']);
    });
  }

  cancel(): void {
    this.router.navigate(['/formaPagamento']);
  }
}
