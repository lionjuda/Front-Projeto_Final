export interface Product {
    proId?: number;
    proNome: string;
    proDescricao?: string;
    proPrecoCusto?: number;
    proPrecoVenda?: number;
    proQuantidadeEstoque?: number;
    proCategoria?: string;
    proCodigoBarras?: string;
    proMarca?: string;
    proUnidadeMedida?: string;
    proAtivo: boolean;
    proDataCadastro?: string;
    proDataAtualizacao?: string;
}
