import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getAvatarUrl(username: string) {
    return this.http.get<any>(`https://api.github.com/users/${username}`).toPromise();
  }
  
  getUserInfo(username: string) {
    return this.http.get<any>(`https://api.github.com/users/${username}`).toPromise();
  }  
  
  getUserRepos(username: string) {
    return this.http.get<any[]>(`https://api.github.com/users/${username}/repos`).toPromise();
  }  
}
