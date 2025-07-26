import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Cliente } from './cliente.model';
import { Contato } from "../contato/contato-read.model";
import { Endereco } from "src/app/models/endereco.model";



@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    private baseUrl = "http://localhost:8080/cliente";
    private contatobaseUrl = "http://localhost:8080/contato";
    private enderecobaseUrl = "http://localhost:8080/endereco";

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string): void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top"
        });
    }

    createCliente(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(this.baseUrl, cliente);
    }

    readCliente(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.baseUrl);
    }

    readByIdCliente(id: string): Observable<Cliente> {
        return this.http.get<Cliente>(`${this.baseUrl}/${id}`);
    }

    updateCliente(cliente: Cliente): Observable<Cliente> {
        return this.http.put<Cliente>(`${this.baseUrl}/${cliente.cliId}`, cliente);
    }

    deleteCliente(id: number): Observable<Cliente> {
        return this.http.delete<Cliente>(`${this.baseUrl}/${id}`);
    }

    createContato(contato: Contato): Observable<Contato> {
        return this.http.post<Contato>(this.contatobaseUrl, contato);
    }

    readContato(): Observable<Contato[]> {
        return this.http.get<Contato[]>(this.contatobaseUrl);
    }

    readByIdContato(id: string): Observable<Contato> {
        return this.http.get<Contato>(`${this.contatobaseUrl}/${id}`);
    }

    updateContato(contato: Contato): Observable<Contato> {
        return this.http.put<Contato>(`${this.contatobaseUrl}/${contato.conId}`, contato);
    }

    deleteContato(id: number): Observable<Contato> {
        return this.http.delete<Contato>(`${this.contatobaseUrl}/${id}`);
    }

    createEndereco(endereco: Endereco): Observable<Endereco> {
        return this.http.post<Endereco>(this.enderecobaseUrl, endereco);
    }

    readEndereco(): Observable<Endereco[]> {
        return this.http.get<Endereco[]>(this.enderecobaseUrl);
    }

    readByIdEndereco(id: string): Observable<Endereco> {
        return this.http.get<Endereco>(`${this.enderecobaseUrl}/${id}`);
    }

    updateEndereco(endereco: Endereco): Observable<Endereco> {
        return this.http.put<Endereco>(`${this.enderecobaseUrl}/${endereco.endId}`, endereco);
    }

    deleteEndereco(id: number): Observable<Endereco> {
        return this.http.delete<Endereco>(`${this.enderecobaseUrl}/${id}`);
    }
}
