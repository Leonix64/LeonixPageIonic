import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  githubUsername = 'Leonix64';
  avatarUrl = '';

  socialLinks = [
    { url: 'https://www.facebook.com/leonix6408', title: 'Facebook', icon: 'facebook', description: 'Usuario de Facebook' },
    { url: 'https://twitter.com/Leonix6408', title: 'Twitter', icon: 'twitter', description: 'Usuario de Twitter' },

  ];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getAvatarUrl(this.githubUsername).then(
      data => {
        this.avatarUrl = data.avatar_url;
      }
    ).catch(err => {
      console.log('Error al obtener la imagen de GitHub:', err);
    })
  }

}
