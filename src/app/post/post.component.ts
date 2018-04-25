import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { DataService } from '../data.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  bgImageUrl : string = '../assets/img/post-bg.jpg';
  public post;
  private postId;
  constructor(private dataService:DataService, private sanitizer: DomSanitizer, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(){
    this.route.params.subscribe(
      res => { this.postId = res.id }
    );
    this.dataService.getPostById(this.postId).subscribe(
      data => { this.post = data },
    );
  }

  public getBgUrl(){
    return this.sanitizer.bypassSecurityTrustStyle('url("'+this.bgImageUrl+'")');
  }

}
