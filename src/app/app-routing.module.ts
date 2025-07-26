import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';
import { ContatoCrudComponent } from './views/contato-crud/contato-crud.component';
import { ContatoCreateComponent } from './component/contato/contato-create/contato-create.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FormaPagamentoCreateComponent } from './component/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import { ProductDeleteComponent } from './component/product/product-delete/product-delete.component';
import { ClienteUpdateComponent } from './component/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './component/cliente/cliente-delete/cliente-delete.component';
import { FornecedorUpdateComponent } from './component/fornecedor/fornecedor-update/fornecedor-update.component';
import { FornecedorDeleteComponent } from './component/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { FormaPagamentoUpdateComponent } from './component/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';
import { ContatoDeleteComponent } from './component/contato/contato-delete/contato-delete.component';
import { ContatoUpdateComponent } from './component/contato/contato-update/contato-update.component';
import { FormaPagamentoDeleteComponent } from './component/formaPagamento/forma-pagamento-delete/forma-pagamento-delete.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fornecedores', component: FornecedorCrudComponent },
  { path: 'fornecedores/create', component: FornecedorCreateComponent },
  { path: 'contatos', component: ContatoCrudComponent },
  { path: 'contatos/create', component: ContatoCreateComponent },
  { path: 'products', component: ProductCrudComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'clientes', component: ClienteCrudComponent },
  { path: 'clientes/create', component: ClienteCreateComponent },
  { path: 'formaPagamentos', component: FormaPagamentoCrudComponent },
  { path: 'formaPagamentos/create', component: FormaPagamentoCreateComponent },
  { path: 'products/update/:proId', component: ProductUpdateComponent },
  { path: 'products/delete/:proId', component: ProductDeleteComponent },
  { path: 'clientes/update/:cliId', component: ClienteUpdateComponent },
  { path: 'clientes/delete/:cliId', component: ClienteDeleteComponent },
  { path: 'fornecedores/update/:forId', component: FornecedorUpdateComponent },
  { path: 'fornecedores/delete/:forId', component: FornecedorDeleteComponent },
  { path: 'formaPagamentos/update/:fpgId', component: FormaPagamentoUpdateComponent },
  { path: 'formaPagamentos/delete/:fpgId', component: FormaPagamentoDeleteComponent },
  { path: 'contatos/delete/:conId', component: ContatoDeleteComponent },
  { path: 'contatos/update/:conId', component: ContatoUpdateComponent },
  { path: 'fornecedor', redirectTo: '/fornecedores', pathMatch: 'full' }, // Redirecionamento
  { path: '**', redirectTo: '/fornecedores' } // Rota curinga
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
