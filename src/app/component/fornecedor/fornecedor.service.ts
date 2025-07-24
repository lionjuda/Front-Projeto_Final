import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Fornecedor } from './fornecedor.model';
import { Contato } from "../contato/contato-read.model";
import { Endereco } from "src/app/models/endereco.model";

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private baseUrl = "http://localhost:8080/fornecedor";
  private contatobaseUrl = 'http://localhost:8080/contatos';
  private enderecobaseUrl = 'http://localhost:8080/enderecos';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  createFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.baseUrl, fornecedor);
  }

  readFornecedor(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.baseUrl);
  }

  readByIdFornecedor(id: number): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.baseUrl}/${id}`);
  }

  updateFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.put<Fornecedor>(`${this.baseUrl}/${fornecedor.forId}`, fornecedor);
  }

  deleteFornecedor(id: number): Observable<Fornecedor> {
    return this.http.delete<Fornecedor>(`${this.baseUrl}/${id}`);
  }

  createContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.baseUrl, contato);
  }

  readContato(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.baseUrl);
  }

  readByIdContato(id: number): Observable<Contato> {
    return this.http.get<Contato>(`${this.contatobaseUrl}/${id}`);
  }

  updateContato(contato: Contato): Observable<Contato> {
    return this.http.put<Contato>(`${this.contatobaseUrl}/${contato.conId}`, contato);
  }

  deleteContato(id: number): Observable<Contato> {
    return this.http.delete<Contato>(`${this.contatobaseUrl}/${id}`);
  }

  createEndereço(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(this.enderecobaseUrl, endereco);
  }

  readEndereço(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.enderecobaseUrl);
  }

  readByIdEndereço(id: number): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.enderecobaseUrl}/${id}`);
  }

  updateEndereço(endereco: Endereco): Observable<Endereco> {
    return this.http.put<Endereco>(`${this.enderecobaseUrl}/${endereco.endId}`, endereco);
  }

  deleteEndereço(id: number): Observable<Endereco> {
    return this.http.delete<Endereco>(`${this.baseUrl}/${id}`);
  }
}
