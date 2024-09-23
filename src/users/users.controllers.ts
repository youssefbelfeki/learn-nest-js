/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";
@Controller()
export class UsersController{
    @Get("/api/users")
    public getAllUsers(){
        return [
            {id:1, email:'youssef@gmail.com', name: 'youssef'},
            {id:2, email:'adem@gmail.com', name: 'adem'}
        ]
    }

}