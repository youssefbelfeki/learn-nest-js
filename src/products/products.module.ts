/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ProductsController } from './products.controller';
// GET: /api/products
@Module({
    controllers:[ProductsController]
})
export class ProductsModule {

}