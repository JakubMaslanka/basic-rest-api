import { PostService } from './post.service';
import { Post as PostModel } from '@prisma/client';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getPublishedPosts(): Promise<PostModel[]>;
    getPostById(id: string): Promise<PostModel>;
    getFilteredPosts(searchString: string): Promise<PostModel[]>;
    createDraft(postData: {
        title: string;
        content?: string;
        authorEmail: string;
    }): Promise<PostModel>;
    publishPost(id: string): Promise<PostModel>;
    editPost(id: string, postData: {
        title: string;
        content?: string;
    }): Promise<PostModel>;
    deletePost(id: string): Promise<PostModel>;
}
