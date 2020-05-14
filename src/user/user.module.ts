import { Module, HttpModule } from '@nestjs/common';
import { UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { GithubService } from '../github/github.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema, collection: 'users' },
    ]),
  ],
  providers: [UserService, UserRepository, GithubService, UserResolver],
})
export class UserModule {}
