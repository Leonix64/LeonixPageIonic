import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-journey',
  templateUrl: './my-journey.component.html',
  styleUrls: ['./my-journey.component.scss'],
})
export class MyJourneyComponent implements OnInit {

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

  constructor() { }

  ngOnInit() { }

}
