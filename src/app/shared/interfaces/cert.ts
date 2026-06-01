export interface Cert {
	tipo: 'curso' | 'certificação';
	anexo: string;
	preview: string;
	titulo: string;
	emissor: string;
	data_emissao: string;
	data_vencimento?: string;
	codigo?: string;
	url?: string;
}