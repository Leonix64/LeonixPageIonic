import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  loginCardVisible = false;
  registerCardVisible = false;

  constructor() { }

  ngOnInit() { }

  toggleCardLogin() {
    if (this.registerCardVisible) {
      this.registerCardVisible = false;
    }
    this.loginCardVisible = !this.loginCardVisible;
  }

  toggleCardRegister() {
    if (this.loginCardVisible) {
      this.loginCardVisible = false;
    }
    this.registerCardVisible = !this.registerCardVisible;
  }

  onSubmit(type: string) {
    console.log(`Formulario ${type} enviado`);
  }
}
