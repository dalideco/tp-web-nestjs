import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo/todo.service';
import { MiddlewareConsumer } from '@nestjs/common';
import { ValidationMiddleware } from './validation.middleware';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidationMiddleware)
      .forRoutes('todo');
  }
}
