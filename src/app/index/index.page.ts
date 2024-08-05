import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit, OnDestroy {

  // Project repositories
  projects = [
    {
      title: 'Lyra QR',
      description: 'This assistant was specifically created to integrate into Discord and has a standout feature: QR code generation. When a user inputs text of their choice, the assistant creates an image with a QR code.',
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
      demoUrl: "https://example.com/project4",
      sourceUrl: "https://github.com/Leonix64/SaludMental_Front.git"
    },
    {
      title: "Generador de Contraseñas",
      description: "Tool to generate secure passwords of variable length, calculate their entropy, estimate the time required to decrypt them by brute force, and provide security tips.",
      imageUrl: "../../assets/Contrasena.png",
      language: "Python",
      demoUrl: "https://example.com/project5",
      sourceUrl: "https://github.com/Leonix64/Password_Generator.git"
    },
    {
      title: "POS",
      description: "Development of customized projects for companies from different sectors, with the aim of making web technology accessible to Cconor's partners.",
      imageUrl: "../../assets/POS-cafe.png",
      language: "Angular",
      demoUrl: "https://example.com/project6",
      sourceUrl: "https://github.com/EdyFJR/CconorTeam"
    },
  ];

  // Tech Expertise
  techExpertiseList = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Python' },
    { name: 'NodeJS' },
    { name: 'Angular' },
    { name: 'Ionic' },
  ];

  // Methodologies
  methodologyList = [
    { name: 'Scrum' },
  ];

  // Front-End Developer
  frontDeveloperList = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'SCSS' },
    { name: 'JavaScript' },
    { name: 'Angular' },
  ];

  // Front-End Tools
  frontToolsList = [
    { name: 'Git' },
    { name: 'VSCode' },
    { name: 'npm' },
  ];

  // Back-end Developer
  backDeveloperList = [
    { name: 'NodeJS' },
    { name: 'Express' },
    { name: 'SQL' },
    { name: 'MongoDB' },
    { name: 'Firebase' },
  ];

  // Back-End Tools
  backToolsList = [
    { name: 'Git' },
    { name: 'Postman' },
  ];

  // Social links
  socialLinks = [
    { url: 'https://www.facebook.com/leonix6408', title: 'Facebook', icon: 'facebook', description: 'Leonix64' },
    { url: 'https://twitter.com/Leonix6408', title: 'Twitter', icon: 'twitter', description: 'Leonix6408' },
    { url: 'https://www.instagram.com/leonix6408/', title: 'Instagram', icon: 'instagram', description: 'leonix64' },
    { url: 'https://discord.gg/FW9Hxn8DAy', title: 'Discord', icon: 'discord', description: 'leonix64' },
    { url: 'https://github.com/Leonix64', title: 'GitHub', icon: 'github', description: 'Leonix64' },
    { url: 'https://steamcommunity.com/id/Leonix64/', title: 'Steam', icon: 'steam', description: 'leonix64' },
    { url: 'https://www.youtube.com/@Leonix64', title: 'YouTube', icon: 'youtube', description: '@Leonix64' },
  ];

  // Reloj
  currentDateTime: Date = new Date();
  private intervalId: any;

  // GitHub
  githubUsername = 'Leonix64';
  avatarUrl = '';

  // Easter Egg 1
  private easterEggCode: string[] = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  private currentCodePosition: number = 0;
  easterEggActive: boolean = false;

  // Easter Egg 2
  easterEggSequence = ['vscode', 'typescript', 'ionic'];
  currentSequence: string[] = [];
  easterEggActive2 = false;

  constructor(private githubService: GithubService) {
    this.intervalId = setInterval(() => this.updateDateTime(), 1000);
  }

  ngOnInit() {
    this.imageGitHub();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateDateTime() {
    this.currentDateTime = new Date();
  }

  imageGitHub() {
    this.githubService.getAvatarUrl(this.githubUsername).then(
      data => {
        this.avatarUrl = data.avatar_url;
      }
    ).catch(err => {
      console.log('Error getting the image from GitHub: ', err);
    });
  }

  // Easter egg 1
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key.toLowerCase();
    if (key === this.easterEggCode[this.currentCodePosition].toLowerCase()) {
      this.currentCodePosition++;
      if (this.currentCodePosition === this.easterEggCode.length) {
        this.activateEasterEgg();
        this.currentCodePosition = 0;
      }
    } else {
      this.currentCodePosition = 0;
    }
  }

  activateEasterEgg() {
    this.easterEggActive = true;
    setTimeout(() => {
      this.easterEggActive = false;
    }, 5000);
    console.log('¡Vaya descubriste un Easter Egg! Aquí una pista para el siguiente: "Un editor que ilumina, un lenguaje que tipa, y un framework que moviliza. (Esta pagina es la pista)"');
  }

  // Easter egg 2
  onSkillClick(skill: string) {
    //console.log(`Skill clicked: ${skill}`);
    this.currentSequence.push(skill);
    //console.log(`Current sequence: ${this.currentSequence.join(', ')}`);

    if (this.currentSequence.length === this.easterEggSequence.length) {
      if (this.currentSequence.every((value, index) => value === this.easterEggSequence[index])) {
        console.log('Easter egg sequence matched!');
        this.easterEggActive2 = true;
        setTimeout(() => {
          this.easterEggActive2 = false;
        }, 5000);
      } else {
        console.log('Easter egg sequence did not match.');
      }
      this.currentSequence = [];
    }
  }
}