import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  images: string[] = [
    'https://w.wallhaven.cc/full/4o/wallhaven-4oj17p.jpg',
    'https://w.wallhaven.cc/full/mp/wallhaven-mpdz88.png',
    'https://w.wallhaven.cc/full/md/wallhaven-mdjrqy.jpg',
    'https://w.wallhaven.cc/full/4v/wallhaven-4vgg35.jpg',
    'https://w.wallhaven.cc/full/o5/wallhaven-o571k9.png',
    'https://w.wallhaven.cc/full/nk/wallhaven-nkzypq.jpg',
    'https://w.wallhaven.cc/full/d6/wallhaven-d6vj93.png',
    'https://w.wallhaven.cc/full/k7/wallhaven-k78eoq.jpg',
  ];

  currentImage: string;
  currentDateTime: Date = new Date();
  private intervalId: any;

  constructor() {
    this.currentImage = this.images[0];
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

  changeImage(index: number) {
    const newIndex = (index + this.images.length) % this.images.length;
    this.currentImage = this.images[newIndex];
  }

  prevImage() {
    const currentIndex = this.images.indexOf(this.currentImage);
    this.changeImage(currentIndex - 1);
  }

  nextImage() {
    const currentIndex = this.images.indexOf(this.currentImage);
    this.changeImage(currentIndex + 1);
  }
}
