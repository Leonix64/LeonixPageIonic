import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  projectSlides: any[][] = [];

  // Project repositories
  projects = [
    {
      title: 'Lyra QR',
      description: 'This assistant was specifically created to integrate into Discord and has a standout feature: QR code generation. When a user inputs text of their choice, the assistant creates an image with a QR code.',
      imageUrl: '../../assets/LyraQR.png',
      language: 'Python',
      demoUrl: '',
      sourceUrl: 'https://github.com/Leonix64/Lyra'
    },
    {
      title: 'RainFlow',
      description: 'AI for map generation: determining the optimal location to build a dam based on weather conditions that favor increased water flow.',
      imageUrl: '../../assets/MapaPresas.png',
      language: 'Python',
      demoUrl: '',
      sourceUrl: 'https://github.com/Leonix64/RainFlow.git'
    },
    {
      title: "Nieve de Garrafa",
      description: "Promotional website for a mobile shaved ice vending business.",
      imageUrl: "../../assets/NieveGarrafa.png",
      language: "Ionic, Angular",
      demoUrl: "",
      sourceUrl: "https://github.com/Leonix64/NieveGarrafa"
    },
    {
      title: "Gestor de Citas Psiquiátricas",
      description: "Web application for managing appointments and tracking patients at a mental health clinic.",
      imageUrl: "../../assets/GestorCitas.png",
      language: "Ionic, Angular",
      demoUrl: "",
      sourceUrl: "https://github.com/Leonix64/SaludMental_Front.git"
    },
    {
      title: "Generador de Contraseñas",
      description: "Tool to generate secure passwords of variable length, calculate their entropy, estimate the time required to decrypt them by brute force, and provide security tips.",
      imageUrl: "../../assets/Contrasena.png",
      language: "Python",
      demoUrl: "",
      sourceUrl: "https://github.com/Leonix64/Password_Generator.git"
    },
    {
      title: "POS",
      description: "Development of customized projects for companies from different sectors, with the aim of making web technology accessible to Cconor's partners.",
      imageUrl: "../../assets/POS-cafe.png",
      language: "Angular",
      demoUrl: "",
      sourceUrl: "https://github.com/EdyFJR/CconorTeam"
    },
    {
      title: "FinTrack",
      description: "App to keep track of personal income and expenses.",
      imageUrl: "../../assets/FinTrack.png",
      language: "Angular",
      demoUrl: "",
      sourceUrl: "https://github.com/Leonix64/FinTrack.git"
    },
  ];

  constructor() { }

  ngOnInit() {
    const itemsPerSlide = 3;
    for (let i = 0; i < this.projects.length; i += itemsPerSlide) {
      this.projectSlides.push(this.projects.slice(i, i + itemsPerSlide));
    }
  }

  next() {
    this.carousel.next();
  }

  prev() {
    this.carousel.prev();
  }

  togglePaused() {
    if (!this.carousel.pause) {
      this.carousel.pause();
    } else {
      this.carousel.cycle();
    }
  }
}
