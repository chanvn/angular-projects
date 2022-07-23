import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model'
import { PostsService } from '../posts.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  posts: Post[] = [];
  
  constructor(private postsService: PostsService) { }

  ngOnInit() {
	
		this.postsService.getPosts()
			.subscribe(
				(posts: any[]) => {
					this.posts = posts
						}
			);
			
			this.postsService.onPostAdded.subscribe((post: Post) => this.posts.push(post));
  }

  deletePost(postId: number) {
    this.postsService.deletePost(postId).subscribe( (result) => {
      console.warn("result: ",result)
    })

    location.reload();
  }

}
