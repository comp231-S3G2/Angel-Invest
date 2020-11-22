import { Controller, Post, Body, Get, UseGuards, Param } from '@nestjs/common';
import { CreatePostDTO } from '../dtos/post/create.dto';
import { GetUser } from '../../shared/user.decorator';
import { User } from '../entities/user.entity';
import { PostService } from '../services/post.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard())
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  /**
   * @CREATE_POST
   */
  @Post('/create')
  async createAccount(@GetUser() user: User, @Body() postData: CreatePostDTO) {
    return this.postService.createPost(postData, user);
  }

  /**
   * @GET_POST_BY_ID
   */
  @Post(':id')
  async getPostById(@Param() id: string, @GetUser() user: User) {
    return this.postService.getPostById(id, user);
  }
}
