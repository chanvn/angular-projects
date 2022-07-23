export class Post {
	public postAuthor: string;
	public title: string;
	public postContent: string;
	public postDate: string;
	public postTime: string;
	public id: number;
	
	constructor(postAuthor: string, title: string, postContent: string, postDate: string, postTime: string, id: number) {
		this.postAuthor = postAuthor;
		this.title = title;
		this.postContent = postContent;
		this.postDate = postDate;
		this.postTime = postTime;
		this.id = id;
	}
}