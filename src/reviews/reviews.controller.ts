/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller()
export class ReviewssController {

    @Get("/api/reviews")
    public getAllReviews(){
        return [
            {id:1, comment:'bed ', rating: 2},
            {id:2, comment:'good', rating: 7}
        ]
    }
  
}