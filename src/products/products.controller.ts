/* eslint-disable prettier/prettier */
import { CreateProductDto } from './dtos/create-product.dtos';
import { Controller, Get, Post, Body, Param, NotFoundException, Put, Delete } from '@nestjs/common';
import { UpdateProductDto } from './dtos/update-product.dtos';
type ProductType = {
    id: number,
    title: string,
    price: number,
}

@Controller("/api/products")
export class ProductsController {
    private products: ProductType[] = [
        {id:1, title:'book ', price: 101},
        {id:2, title:'pen', price: 102},
        {id:3, title:'laptop', price: 103},
    ]


    @Post()
    public createNewProduct(@Body() body: CreateProductDto) {  
        const newProduct: ProductType = {  
            id: this.products.length + 1,  
            title: body.title,  
            price: body.price  
        }  
        this.products.push(newProduct);  
        return newProduct;  
    }


    @Get()
    public getAllProducts(){
        return this.products;
    }

    @Get(":id")  
    public getSingleProducts(@Param("id") id: string) {  
        const product = this.products.find(p => p.id === parseInt(id));  
        if(!product){
            throw new NotFoundException(`Product with id ${id} not found.`);
        }
        return product;  
    }

    @Put(":id")  
    public updateProduct(@Param('id') id: string, @Body() body: UpdateProductDto) {  
        const product = this.products.find(p => p.id === parseInt(id));  
        if (!product) throw new NotFoundException("product not found");  
    
        console.log(body);  
        return { message: 'product updated successfully with id ' + id };  
    }

    @Delete(":id")  
    public deleteProduct(@Param('id') id: string) {  
        const product = this.products.find(p => p.id === parseInt(id));  
        if (!product) throw new NotFoundException("product not found");  
        return { message: 'product deleted successfully with id ' + id };  
    }
}