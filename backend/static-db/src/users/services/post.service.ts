import { Injectable, Logger, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import { PostRepository } from '../repositories/post.repository';
import { CreatePostDTO } from '../dtos/post/create.dto';

@Injectable()
export class PostService {
  private logger = new Logger('[POST-SERVICE]');
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
  ) {}

  async createPost(postData: CreatePostDTO, user: User): Promise<any> {
    try {
      const post = await this.postRepository.createPost(postData, user);
      return post;
    } catch (err) {
      return new HttpException(err.message, err.code);
    }
  }
}
