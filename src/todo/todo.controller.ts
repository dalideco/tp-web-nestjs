import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Req } from "@nestjs/common";
import { Todo } from './Model/todo.model';
import { Request } from "express";
import { TodoService } from "./todo/todo.service";
import { AddToDoDto, updateTodoDto } from "./Model/todo.dto";
@Controller('todo')
export class TodoController {
  
  constructor(private service: TodoService){}

  @Get(':id')
  getTodo(@Param('id') id:string) {
    return this.service.getOne(id);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id:string){
    return this.service.deleteTodo(id)
  }

  @Put(':id')
  modifyTodo(@Param('id') id:string, @Body() newTodo: updateTodoDto){
    return this.service.modifyTodo(id,newTodo) 
  }


  @Get()
  getTodos(@Req() request: Request): Todo[] {
    console.log('im in get')
    return this.service.getTodos()
  }

  @Post()
  addTodo(@Body() newTodo: AddToDoDto): Todo {
    return this.service.addTodo(newTodo)
  } 

}
