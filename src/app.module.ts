/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ProductsModule } from "./products/products.module";
import { UsersModule } from "./users/users.module";
import { ReviewsModule } from "./reviews/reviews.module";

@Module({
  imports:[ProductsModule,UsersModule,ReviewsModule],
  // exports:[],
  // providers:[],
  // controllers:[],
})
export class AppModule {}
