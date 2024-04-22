import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
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
  ];

  // Back-End Tools
  backToolsList = [
    { name: 'Git' },
    { name: 'Postman' },
  ];

  constructor() { }

  ngOnInit() { }
}