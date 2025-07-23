import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormaPagamento } from '../formaPagamento.model';
import { FormaPagamentoService } from '../formaPagamento.service';

@Component({
  selector: 'app-forma-pagamento-delete',
  templateUrl: './forma-pagamento-delete.component.html',
  styleUrls: ['./forma-pagamento-delete.component.css']
})
export class FormaPagamentoDeleteComponent implements OnInit {
  formaPagamento!: FormaPagamento;

  constructor(
    private formaPagamentoService: FormaPagamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('fpgId');
    if (id) {
      this.formaPagamentoService.readById(id).subscribe(fp => this.formaPagamento = fp);
    }
  }

  deleteFormaPagamento(): void {
    if (this.formaPagamento.fpgId) {
      this.formaPagamentoService.delete(this.formaPagamento.fpgId).subscribe(() => {
        this.formaPagamentoService.showMessage('Forma de pagamento excluída com sucesso!');
        this.router.navigate(['/formaPagamento']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/formaPagamento']);
  }
}
