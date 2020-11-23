import { EntityRepository, Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';
import { CreatePostDTO } from '../dtos/post/create.dto';
import { User } from '../entities/user.entity';

@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
  constructor() {
    super();
  }

  /**
   * @param CreatePostDTO
   */
  createPost = async (postDTO: CreatePostDTO, author: User): Promise<any> => {
    try {
      const post = new PostEntity();
      const { description, moneyGoal, dateGoal } = postDTO;
      post.author = author;
      post.description = description;
      post.moneyGoal = moneyGoal ? moneyGoal : 0;
      post.dateGoal = dateGoal ? new Date(dateGoal) : new Date();

      return await this.save(post);
    } catch (err) {
      return err;
    }
  };
}
