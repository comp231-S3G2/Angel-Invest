import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/users.module';
import * as ormconfig from '../ormconfig';

export function DatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot(ormconfig);
}
@Module({
  imports: [UserModule, TypeOrmModule.forRoot(ormconfig)],
})
export class AppModule {}
