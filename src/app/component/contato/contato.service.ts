import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contato } from './contato-read.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private apiUrl = 'http://localhost:8080/contatos'; // Corrigido de CONTATOS para contatos

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.apiUrl, contato).pipe(
      catchError((error) => {
        this.showMessage('Erro ao criar contato: ' + error.message, true);
        return throwError(() => error);
      })
    );
  }

  read(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrl).pipe(
      catchError((error) => {
        this.showMessage('Erro ao carregar contatos: ' + error.message, true);
        return throwError(() => error);
      })
    );
  }

  readById(id: string): Observable<Contato> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Contato>(url).pipe(
      catchError((error) => {
        this.showMessage(`Erro ao carregar contato com ID ${id}: ` + error.message, true);
        return throwError(() => error);
      })
    );
  }

  update(contato: Contato): Observable<Contato> {
    const url = `${this.apiUrl}/${contato.conId}`;
    return this.http.put<Contato>(url, contato).pipe(
      catchError((error) => {
        this.showMessage('Erro ao atualizar contato: ' + error.message, true);
        return throwError(() => error);
      })
    );
  }

  delete(id: number): Observable<Contato> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Contato>(url).pipe(
      catchError((error) => {
        this.showMessage(`Erro ao deletar contato com ID ${id}: ` + error.message, true);
        return throwError(() => error);
      })
    );
  }
}