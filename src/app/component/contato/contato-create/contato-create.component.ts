import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from '../contato-read.model';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contato-create',
  templateUrl: './contato-create.component.html',
  styleUrls: ['./contato-create.component.css']
})
export class ContatoCreateComponent {
  contato: Contato = {
    conCelular: '',
    conTelefoneComercial: '',
    conEmail: '',
  };

  constructor(
    private contatoService: ContatoService,
    private router: Router
  ) { }

  createContato(): void {
    this.contatoService.create(this.contato).subscribe(() => {
      this.contatoService.showMessage('Contato criado!');
      this.router.navigate(['/contatos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/contatos']);
  }
}
