import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato-read.model';
import { ContatoService } from '../contato.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contato-delete',
  templateUrl: './contato-delete.component.html',
  styleUrls: ['./contato-delete.component.css']
})
export class ContatoDeleteComponent implements OnInit {
  contato!: Contato;

  constructor(
    private contatoService: ContatoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const conId = this.route.snapshot.paramMap.get('conId');
    if (conId) {
      this.contatoService.readById(conId).subscribe(contato => {
        this.contato = contato;
      });
    }
  }

  deleteContato(): void {
    if (this.contato?.conId) {
      this.contatoService.delete(this.contato.conId).subscribe(() => {
        this.contatoService.showMessage('Contato excluído com sucesso!');
        this.router.navigate(['/contato']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/contato']);
  }
}
