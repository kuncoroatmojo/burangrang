import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Observable} from 'rxjs/Rx';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts;
  imageUrl : string = '../assets/img/home-bg.jpg';
  constructor(private dataService:DataService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.dataService.getPosts().subscribe(
      data => { this.posts = data},
    );
  }

  public getBgUrl(){
    return this.sanitizer.bypassSecurityTrustStyle('url("'+this.imageUrl+'")');
  }

}
