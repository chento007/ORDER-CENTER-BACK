import { IsString, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsInt, MaxLength, IsDecimal, Min } from 'class-validator';
import { IsFloat } from 'sequelize-typescript';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @Min(0, { message: 'Price must be greater than or equal to 0' })
  price: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  stockQty: number;

  @IsString()
  @IsNotEmpty()
  thumbnail: string;

  @IsInt()
  @IsNotEmpty()
  categoryId: number;

  @IsNumber()
  @IsNotEmpty()
  discount: number;
}
