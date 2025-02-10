import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  // Github
  githubUser = 'Leonix64';
  avatarUrl = '';

  // Social links
  socialLinks = [
    //{ url: 'https://www.facebook.com/leonix6408', title: 'Facebook', icon: 'facebook', description: 'Leonix64' },
    //{ url: 'https://twitter.com/Leonix6408', title: 'Twitter', icon: 'twitter', description: 'Leonix6408' },
    //{ url: 'https://www.instagram.com/leonix6408/', title: 'Instagram', icon: 'instagram', description: 'leonix64' },
    { url: 'https://discord.gg/FW9Hxn8DAy', title: 'Discord', icon: 'discord', description: 'leonix64' },
    { url: 'https://github.com/Leonix64', title: 'GitHub', icon: 'github', description: 'Leonix64' },
    //{ url: 'https://steamcommunity.com/id/Leonix64/', title: 'Steam', icon: 'steam', description: 'leonix64' },
    { url: 'https://www.youtube.com/@Leonix64', title: 'YouTube', icon: 'youtube', description: '@Leonix64' },
  ];

  constructor(private github: GithubService) { }

  ngOnInit() {
    this.imageGithub();
  }

  imageGithub() {
    this.github.getAvatarGithubUrl(this.githubUser).then(
      data => {
        this.avatarUrl = data.avatar_url;
      }
    ).catch(err => {
      console.log('Error getting avatar:', err);
    });
  }
}
