import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Cliente } from './cliente.model';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    private baseUrl = "http://localhost:8080/clientes";

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string): void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top"
        });
    }

    create(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(this.baseUrl, cliente);
    }

    read(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.baseUrl);
    }

    readById(id: string): Observable<Cliente> {
        return this.http.get<Cliente>(`${this.baseUrl}/${id}`);
    }

    update(cliente: Cliente): Observable<Cliente> {
        return this.http.put<Cliente>(`${this.baseUrl}/${cliente.cliId}`, cliente);
    }

    delete(id: number): Observable<Cliente> {
        return this.http.delete<Cliente>(`${this.baseUrl}/${id}`);
    }
}
