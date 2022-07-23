import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service'
@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  constructor(private postData:  PostsService) { }

  ngOnInit(): void {
  }
  
  getUserPost(post: any) {
    console.warn(post);
	  this.postData.savePost(post).subscribe( (result) => {
      console.warn()
    });

    location.reload();
  }

}
