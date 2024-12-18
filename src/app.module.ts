import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';
import { BooksModule } from './books/books.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule, AdminModule, BooksModule, CategoriesModule, AuthorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
