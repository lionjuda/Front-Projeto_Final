import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { FormaPagamento } from './formaPagamento.model';

@Injectable({
    providedIn: 'root'
})
export class FormaPagamentoService {
    baseUrl = 'http://localhost:8080/formaPagamentos';

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string): void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    }

    create(formaPagamento: FormaPagamento): Observable<FormaPagamento> {
        return this.http.post<FormaPagamento>(this.baseUrl, formaPagamento);
    }

    read(): Observable<FormaPagamento[]> {
        return this.http.get<FormaPagamento[]>(this.baseUrl);
    }

    readById(id: number | string): Observable<FormaPagamento> {
        return this.http.get<FormaPagamento>(`${this.baseUrl}/${id}`);
    }

    update(formaPagamento: FormaPagamento): Observable<FormaPagamento> {
        return this.http.put<FormaPagamento>(`${this.baseUrl}/${formaPagamento.fpgId}`, formaPagamento);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
