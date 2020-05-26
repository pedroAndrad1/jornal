import { Reportagem } from './../reportagem';
import { Component, OnInit } from '@angular/core';
import { Generos } from '../generos.enum';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  reportagensTeste: Reportagem[] = [
    {
      titulo: 'Titulo de teste',
      genero: Generos.NOTICIAS,
      autor: 'Autor de teste',
      texto: 'Texto de teste',
      imagem: 'https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_960_720.jpg'
    },
    {
      titulo: 'Titulo de teste',
      genero: Generos.NOTICIAS,
      autor: 'Autor de teste',
      texto: 'Texto de teste',
      imagem: 'https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_960_720.jpg'
    },
    {
      titulo: 'Titulo de teste',
      genero: Generos.NOTICIAS,
      autor: 'Autor de teste',
      texto: 'Texto de teste',
      imagem: 'https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_960_720.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
