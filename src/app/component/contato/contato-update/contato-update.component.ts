import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato-read.model';
import { ContatoService } from '../contato.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contato-update',
  templateUrl: './contato-update.component.html',
  styleUrls: ['./contato-update.component.css']
})
export class ContatoUpdateComponent implements OnInit {
  contato: Contato = {
    conTelefoneComercial: '',
    conCelular: '',
    conEmail: ''
  };

  constructor(
    private contatoService: ContatoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const conId = this.route.snapshot.paramMap.get('conId');
    if (conId) {
      this.contatoService.readById(conId).subscribe((contato) => {
        this.contato = contato;
      });
    }
  }

  updateContato(): void {
    this.contatoService.update(this.contato).subscribe(() => {
      this.contatoService.showMessage('Contato atualizado com sucesso!');
      this.router.navigate(['/contato']);
    });
  }

  cancel(): void {
    this.router.navigate(['/contato']);
  }
}
