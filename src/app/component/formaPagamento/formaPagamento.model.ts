export interface FormaPagamento {
    fpgId?: number;
    fpgDescricao: string;
    fpgAtivo?: boolean;
    fpgPermiteParcelamento?: boolean;
    fpgNumeroMaximoParcelas?: number;
    fpgTaxaAdicional?: number;
}
