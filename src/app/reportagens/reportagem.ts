import { Generos } from './generos.enum';

export interface Reportagem {
  genero: Generos;
  titulo: string;
  imagem?: string;
  texto: string;
  autor: string;
}
