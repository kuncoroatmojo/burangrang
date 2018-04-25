import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {
  apiRoot: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPosts() {
    let apiURL = `${this.apiRoot}/posts`;
    return this.http.get(apiURL);
  }
  getPostById(postId) {
    let apiURL = `${this.apiRoot}/posts/` + postId;
    return this.http.get(apiURL);
  }
}
