import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Fornecedor } from './fornecedor.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private apiUrl = 'http://localhost:8080/fornecedores'; // Corrigido

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  createFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.apiUrl, fornecedor).pipe(
      catchError((error) => {
        this.showMessage('Erro ao criar fornecedor: ' + error.message, true);
        return throwError(() => error);
      })
    );
  }

  readFornecedor(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.apiUrl).pipe(
      catchError((error) => {
        this.showMessage('Erro ao carregar fornecedores: ' + error.message, true);
        return throwError(() => error);
      })
    );
  }

  readByIdFornecedor(id: number): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        this.showMessage(`Erro ao carregar fornecedor com ID ${id}: ` + error.message, true);
        return throwError(() => error);
      })
    );
  }

  updateFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.put<Fornecedor>(`${this.apiUrl}/${fornecedor.forId}`, fornecedor).pipe(
      catchError((error) => {
        this.showMessage('Erro ao atualizar fornecedor: ' + error.message, true);
        return throwError(() => error);
      })
    );
  }

  deleteFornecedor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        this.showMessage(`Erro ao deletar fornecedor com ID ${id}: ` + error.message, true);
        return throwError(() => error);
      })
    );
  }
}