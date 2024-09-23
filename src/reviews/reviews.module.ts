/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ReviewssController } from "./reviews.controller";
@Module({
    controllers:[ReviewssController],
})
export class ReviewsModule{
    
}