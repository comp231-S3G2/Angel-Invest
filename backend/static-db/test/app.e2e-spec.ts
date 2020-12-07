import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CreateInvestorAccountDTO } from './../src/users/dtos/investor/create.dto';
import { HttpStatus } from '@nestjs/common';
import { CreatePostDTO } from './../src/users/dtos/post/create.dto';

const app = 'http://localhost:3001';
let jwtToken = '';
let postId = '';
let investorId = '';

describe('Investor SignUp (e2e)', () => {
  it('Should register', () => {
    const user: CreateInvestorAccountDTO = {
      firstName: 'Jake',
      lastName: 'Nesovic',
      phoneNumber: '232323232',
      email: 'JakeNesovic@gmail.ca',
      password: 'te233@1',
    };
    return request(app)
      .post('/investor/signup')
      .set('Accept', 'application/json')
      .send(user)
      .expect(({ body }) => {
        jwtToken = body.token;
        investorId = body.id;
        expect(jwtToken).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/);
      })
      .expect(HttpStatus.CREATED);
  });
});

describe('Create Post (e2e)', () => {
  it('Should not create a post [Unauthorized user]', () => {
    const post: CreatePostDTO = {
      name: 'Angel Invest',
      moneyGoal: 12000,
      description: 'We are angel investors',
    };
    return request(app)
      .post('/post/create')
      .set('Accept', 'application/json')
      .send(post)
      .expect(({ body }) => {
        expect(body.message).toEqual('Unauthorized');
      })
      .expect(HttpStatus.UNAUTHORIZED);
  });

  it('Should create a post [Authorized User with token]', () => {
    const post: CreatePostDTO = {
      name: 'Angel Invest',
      moneyGoal: 12000,
      description: 'We are angel investors',
    };
    return request(app)
      .post('/post/create')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${jwtToken}`)
      .send(post)
      .expect(({ body }) => {
        postId = body.id;
      })
      .expect(HttpStatus.CREATED);
  });

  it('Should get a post by Id', () => {
    return request(app)
      .get(`/post/${postId}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${jwtToken}`)
      .expect(({ body }) => {
        expect(body.investors).toEqual(null);
      })
      .expect(HttpStatus.OK);
  });

  it('Should get an investor profile by id', () => {
    return request(app)
      .get(`/investor/${investorId}`)
      .set('Accept', 'application/json')
      .expect(({ body }) => {
        expect(body.firstName).toEqual('Jake');
        expect(body.lastName).toEqual('Nesovic');

      })
      .expect(HttpStatus.OK);
  });
});
