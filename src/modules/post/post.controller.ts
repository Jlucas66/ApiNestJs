import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    create(@Body() dto: CreatePostDto) {
        return this.postService.createPost(dto);
    } 

    @Get()
    findAll() {
        return this.postService.posts({});
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.postService.post({ id: Number(id) });
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
        return this.postService.updatePost({
            where: { id: Number(id) },
            data: dto,
        });
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.postService.deletePost({ id: Number(id) });
    }

}