import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({ 
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql'
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    BlogModule,
    CommentModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
