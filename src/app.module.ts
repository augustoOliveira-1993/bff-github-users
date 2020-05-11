import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { GithubModule } from './github/github.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => {
        const { DB_HOST, DB_PORT, DB_NAME } = process.env;
        const uri = `mongodb://${DB_HOST}:${DB_PORT}`;
        return {
          uri,
          dbName: DB_NAME,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        };
      },
    }),
    GithubModule,
    UserModule,
  ],
})
export class AppModule {}
