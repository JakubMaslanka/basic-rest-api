"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async getPublishedPosts() {
        return this.postService.posts({
            where: { published: true },
        });
    }
    async getPostById(id) {
        return this.postService.post({ id: Number(id) });
    }
    async getFilteredPosts(searchString) {
        return this.postService.posts({
            where: {
                OR: [
                    {
                        title: { contains: searchString },
                    },
                    {
                        content: { contains: searchString },
                    },
                ],
            },
        });
    }
    async createDraft(postData) {
        const { title, content, authorEmail } = postData;
        return this.postService.createPost({
            title,
            content,
            author: {
                connect: { email: authorEmail },
            },
        });
    }
    async publishPost(id) {
        return this.postService.updatePost({
            where: { id: Number(id) },
            data: { published: true },
        });
    }
    async editPost(id, postData) {
        return this.postService.updatePost({
            where: { id: Number(id) },
            data: { title: postData.title, content: postData.content },
        });
    }
    async deletePost(id) {
        return this.postService.deletePost({ id: Number(id) });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPublishedPosts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPostById", null);
__decorate([
    (0, common_1.Get)('filter/:searchString'),
    __param(0, (0, common_1.Param)('searchString')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getFilteredPosts", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createDraft", null);
__decorate([
    (0, common_1.Put)('publish/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "publishPost", null);
__decorate([
    (0, common_1.Put)('edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "editPost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deletePost", null);
PostController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map