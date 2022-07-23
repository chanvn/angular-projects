import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from './post.model'
import { PostAdd } from './postadd.model'
import { EventEmitter } from "@angular/core";

@Injectable({
	providedIn: 'root',
})

@Injectable()
export class PostsService {
	
	constructor(private http: HttpClient) { }
	
	getPosts() {
		
		return this.http.get<Post[]>('/api/post');
		
	}
	
	savePost(post: Post) {
		return this.http.post('/api/post', post);
	}
	
	onPostAdded = new EventEmitter<Post>();

	deletePost(id: number) {
		return this.http.delete(`/api/post/${id}`)
	}
}