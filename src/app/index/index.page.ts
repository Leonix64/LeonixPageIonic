import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit, OnDestroy {

  projects = [
    {
      title: 'Lyra QR',
      description: 'Este bot fue creado específicamente para integrarse en Discord y tiene una función destacada: la generación de códigos QR. Cuando un usuario ingresa un texto de su elección, el bot crea una imagen con un código QR.',
      imageUrl: '../../assets/LyraQR.png',
      language: 'Python',
      demoUrl: 'https://example.com/project1',
      sourceUrl: 'https://github.com/Leonix64/Lyra'
    },
    {
      title: 'RainFlow',
      description: 'IA para la generación de mapas: determinando la ubicación óptima para construir una presa según las condiciones climáticas que favorecen un mayor caudal de agua.',
      imageUrl: '../../assets/BackgroundSection.jpg',
      language: 'Python',
      demoUrl: 'https://example.com/project2',
      sourceUrl: 'https://github.com/Leonix64/RainFlow.git'
    },
    {
      title: 'Project 3',
      description: 'Description for project 3.',
      imageUrl: '../../assets/BackgroundPage.jpg',
      language: 'Angular',
      demoUrl: 'https://example.com/project3',
      sourceUrl: 'https://github.com/example/project3'
    },
  ];

  currentDateTime: Date = new Date();
  private intervalId: any;

  constructor() {
    this.intervalId = setInterval(() => this.updateDateTime(), 1000);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateDateTime() {
    this.currentDateTime = new Date();
  }
}