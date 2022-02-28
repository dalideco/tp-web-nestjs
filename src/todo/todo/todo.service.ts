import { Injectable } from '@nestjs/common';
import { Todo } from '../Model/todo.model'
import { NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { AddToDoDto, updateTodoDto } from '../Model/todo.dto';


@Injectable()
export class TodoService {

    constructor() {
        this.todos = [new Todo('1', 'Sport', 'Faire du sport')];
    }
    todos: Todo[] = [];

    getTodos():Todo[] {
        return this.todos;
    }

    getOne(id: string) {
        const todo = this.todos.find((todo) => (todo.id === id))
        return todo ? todo : new NotFoundException('not found')
    }

    addTodo(newTodo: AddToDoDto) {
        let todo = new Todo();
        todo.id = uuidv4();
        todo = { ...todo, ...newTodo };
        this.todos.push(todo);
        return todo;
    }

    deleteTodo(id: string) {
        let found = false;
        this.todos = this.todos.filter(todo => {
            if (id !== todo.id) return true
            found = true;
            return false;
        })
        return found ? {
            nbr: 1,
            message: 'success',
        } : new NotFoundException('not found')
    }

    modifyTodo(id: string, newTodo: updateTodoDto) {
        let toreturn: Todo = new Todo();
        let found = false;

        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                found = true;
                toreturn = {
                    ...todo,
                    ...newTodo
                }
            }
            return (todo.id === id) ? toreturn : todo;
        })

        return found ? toreturn : new NotFoundException('not found');
    }

}
