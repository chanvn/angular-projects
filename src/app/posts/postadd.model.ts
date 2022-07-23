export class PostAdd {
	public postAuthor: string;
	public title: string;
	public postContent: string;

	constructor(postAuthor: string, title: string, postContent: string) {
		this.postAuthor = postAuthor;
		this.title = title;
		this.postContent = postContent;
	}
}