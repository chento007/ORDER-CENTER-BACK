import {
    IsArray,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsStrongPassword,
    Matches,
    MaxLength,
    MinLength,
  } from 'class-validator';
  import { SameAs } from 'src/common/validator/same-as.validator';
  
  export class updateUserDto {
    @IsString()
    username: string;
  
    @IsString()
    phone: string;
  
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    @IsArray()
    @IsNumber({}, { each: true })
    roleIds: number[];
  }
  