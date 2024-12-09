import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  // Easter Egg 1
  private easterEggCode: string[] = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  private currentCodePosition: number = 0;
  easterEggActive: boolean = false;

  constructor() { }

  ngOnInit() {
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
}
