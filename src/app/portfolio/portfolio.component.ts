import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {

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
  ];

  constructor() { }

  ngOnInit() { }

}
