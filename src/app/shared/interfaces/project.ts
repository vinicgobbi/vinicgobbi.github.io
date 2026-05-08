export interface Project {
  titulo: string;
  descricao: string;
  imagem: string;
  badges: string[];
  contribuidores: string[];
  links: Links
}

export interface Links {
  github?: string;
  website?: string;
}
