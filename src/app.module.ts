import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseConnectionService } from './shared/services/database-connection.service';
import { StudentModule } from './student/student.module';
import BooksModule from './book/books.module';
import GenreModule from './genre/genre.module';
import UserEntity from './db/user.entity';
import BookEntity from './db/book.entity';
import GenreEntity from './db/genre.entity';

@Module({
  imports: [
    // UserModule ,
    BooksModule,
    // GenreModule,
    TypeOrmModule.forRootAsync({useClass:DataBaseConnectionService}), 
    StudentModule,
    TypeOrmModule.forFeature(
      // [UserEntity, BookEntity , GenreEntity],
      [ BookEntity ],
    ),
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
