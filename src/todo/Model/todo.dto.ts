// import { Todo } from "./todo.model";
import { PartialType } from '@nestjs/mapped-types'
import { TodoStatusEnum } from "../enums/todo-status.enum";

export class AddToDoDto{
    constructor(
        public name: string = '',
        public description: string = '',
      ) {}
}

export class updateTodoDto extends PartialType(AddToDoDto){
    public status: TodoStatusEnum;
}