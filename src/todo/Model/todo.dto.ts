// import { Todo } from "./todo.model";
import { PartialType } from '@nestjs/mapped-types'
import { TodoStatusEnum } from "../enums/todo-status.enum";
import { IsNotEmpty, MaxLength, MinLength, ValidationArguments } from 'class-validator';

export class AddToDoDto{

    @IsNotEmpty({
        message: ()=>{
            return "empty field"
        }
    })
    @MinLength(3,{
        message: (validationData: ValidationArguments) => {
        return `La taille de votre ${validationData.property} ${validationData.value} est courte,`
        }
    })
    @MaxLength(10,{
        message: (validationData: ValidationArguments) => {
        return `La taille de votre ${validationData.property} ${validationData.value} est longue,`
        }
    })
    name: string ;

    @IsNotEmpty()
    @MinLength(10, {
        message: (validationData: ValidationArguments) => {
        return `La taille de votre ${validationData.property} ${validationData.value} est courte,`
        }
    })
    description: string ;    
}

export class updateTodoDto extends PartialType(AddToDoDto){
    public status: TodoStatusEnum;
    
    @MinLength(3,{
        message: (validationData: ValidationArguments) => {
        return `La taille de votre ${validationData.property} ${validationData.value} est courte,`
        }
    })
    @MaxLength(10,{
        message: (validationData: ValidationArguments) => {
        return `La taille de votre ${validationData.property} ${validationData.value} est longue,`
        }
    })
    name: string ;

   
    @MinLength(10, {
        message: (validationData: ValidationArguments) => {
        return `La taille de votre ${validationData.property} ${validationData.value} est courte,`
        }
    })
    description: string ;    
}