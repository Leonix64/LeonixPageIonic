import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss'],
})
export class InformationCardComponent implements OnInit {

  // Easter Egg 2
  easterEggSequence = ['vscode', 'typescript', 'ionic'];
  currentSequence: string[] = [];
  easterEggActive2 = false;

  constructor() { }

  ngOnInit() { }

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
