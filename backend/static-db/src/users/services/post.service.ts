import { Injectable, Logger, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import { PostRepository } from '../repositories/post.repository';
import { CreatePostDTO } from '../dtos/post/create.dto';
import { PostEntity } from '../entities/post.entity';

@Injectable()
export class PostService {
  private logger = new Logger('[POST-SERVICE]');
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
  ) { }

  async createPost(postData: CreatePostDTO, user: User): Promise<any> {
    try {
      this.logger.log(`Incoming post request ${JSON.stringify(postData)} with user ${JSON.stringify(user)}`);
      const post = await this.postRepository.createPost(postData, user);
      return post;
    } catch (err) {
      return new HttpException(err.message, err.code);
    }
  }

  async getPostById(
    id: string,
    user: User,
  ): Promise<PostEntity | HttpException> {
    try {
      const post = await this.postRepository.findOne(id, {
        relations: ['author'],
      });

      const nonAuthorPost = {...post, investors: null}
      if (post.author.email === user.email) {
        return post
      }
      else { nonAuthorPost; }

    } catch (err) {
      return new HttpException(err.message, err.code);
    }
  }
}
