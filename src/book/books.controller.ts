import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {BooksService} from './books.service';
import CreateBookDto from '../dto/create-book.dto';

@Controller('book')
export default class BookController {
  constructor(private readonly bookServices: BooksService) {}
  @Post('post')
  postBook( @Body() book: CreateBookDto) {
    return this.bookServices.insert(book);
  }
  @Get()
  getAll() {
    return this.bookServices.getAllBooks();
  }
  @Get(':id')
  find(@Param() params) {
   
    return this.bookServices.findBook(params.id);
  }
  
}