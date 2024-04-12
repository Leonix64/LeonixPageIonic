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
      description: 'This bot was specifically created to integrate into Discord and has a standout feature: QR code generation. When a user inputs text of their choice, the bot creates an image with a QR code.',
      imageUrl: '../../assets/LyraQR.png',
      language: 'Python',
      demoUrl: 'https://example.com/project1',
      sourceUrl: 'https://github.com/Leonix64/Lyra'
    },
    {
      title: 'RainFlow',
      description: 'AI for map generation: determining the optimal location to build a dam based on weather conditions that favor increased water flow.',
      imageUrl: '../../assets/MapaPresas.png',
      language: 'Python',
      demoUrl: 'https://example.com/project2',
      sourceUrl: 'https://github.com/Leonix64/RainFlow.git'
    },
    {
      title: "Nieve de Garrafa",
      description: "Promotional website for a mobile shaved ice vending business.",
      imageUrl: "../../assets/NieveGarrafa.png",
      language: "Ionic, Angular",
      demoUrl: "https://example.com/project3",
      sourceUrl: "https://github.com/Leonix64/NieveGarrafa"
    },
    {
      title: "Gestor de Citas Psiquiátricas",
      description: "Web application for managing appointments and tracking patients at a mental health clinic.",
      imageUrl: "../../assets/GestorCitas.png",
      language: "Ionic, Angular",
      demoUrl: "https://example.com/project3",
      sourceUrl: "https://github.com/Leonix64/SaludMental_Front.git"
    },
    {
      title: "Generador de Contraseñas",
      description: "Tool to generate secure passwords of variable length, calculate their entropy, estimate the time required to decrypt them by brute force, and provide security tips.",
      imageUrl: "../../assets/Contrasena.png",
      language: "Python",
      demoUrl: "https://example.com/project3",
      sourceUrl: "https://github.com/Leonix64/Password_Generator.git"
    }
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