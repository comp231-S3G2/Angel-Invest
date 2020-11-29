import { Controller, UseGuards, Logger, Post, Body, Param, Get } from '@nestjs/common';
import { CreatePostDTO } from '../dtos/post/create.dto';
import { User } from '../entities/user.entity';
import { PostService } from '../services/post.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/shared/user.decorator';

@UseGuards(AuthGuard())
@Controller('post')
export class PostController {
  private logger = new Logger('[PostController');

  constructor(private readonly postService: PostService) { }

  /**
   * @CREATE_POST
   */
  @Post('/create')
  async createAccount(@GetUser() user: User, @Body() postData: CreatePostDTO) {
    this.logger.log(`Incoming Post Request [Create] - ${JSON.stringify(postData)}`);
    return this.postService.createPost(postData, user);
  }

  /**
   * @GET_POST_BY_ID
   */
  @Get(':id')
  async getPostById(@Param() id: string, @GetUser() user: User) {
    return this.postService.getPostById(id, user);
  }
}
