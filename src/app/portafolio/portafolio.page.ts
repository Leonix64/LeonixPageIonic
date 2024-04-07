import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Image {
  src: string;
  alt: string;
  title: string;
  description: string;
  lenguaje: string;
  repoUrl: string;
}

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.page.html',
  styleUrls: ['./portafolio.page.scss'],
})
export class PortafolioPage implements OnInit {

  projects = [
    {
      title: 'Proyecto 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, non voluptates. Aperiam cum dolorem assumenda velit excepturi quaerat error voluptatum totam aut sit et provident, perferendis dolorum earum rem tenetur?',
      imageUrl: '../../assets/LyraQR.png',
      language: 'Python'
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2.',
      imageUrl: '../../assets/backgrooundSection.jpg',
      language: 'Ionic'
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3.',
      imageUrl: '../../assets/BackgroundPage.jpg',
      language: 'Angular'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
