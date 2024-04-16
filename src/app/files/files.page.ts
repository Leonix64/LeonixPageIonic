import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.page.html',
  styleUrls: ['./files.page.scss'],
})
export class FilesPage implements OnInit {

  githubUsername = 'Leonix64';
  avatarUrl = '';
  githubUser: any = {};
  repos: any = [];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getUserInfo(this.githubUsername).then(
      userData => {
        this.avatarUrl = userData.avatar_url;
        this.githubUser.name = userData.name;
        this.githubUser.bio = userData.bio;
        this.githubUser.email = userData.email;
        this.githubUser.followers = userData.followers;

        // Obtener repositorios del usuario
        this.githubService.getUserRepos(this.githubUsername).then(
          reposData => {
            this.repos = reposData;
          }
        ).catch(err => {
          console.log('Error al obtener los repositorios del usuario de GitHub:', err);
        });
      }
    ).catch(err => {
      console.log('Error al obtener la información del usuario de GitHub:', err);
    });
  }

}
