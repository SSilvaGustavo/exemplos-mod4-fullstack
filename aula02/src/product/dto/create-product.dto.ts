import { Prisma } from "@prisma/client";
import { IsInt, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";
import { Product } from "../entities/product.entity";

export class CreateProductDto extends Product {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @IsOptional()
    price?: number | null;

    @IsOptional()
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutProductInput;
}
