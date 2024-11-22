import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { Roles } from "src/common/decorator/roles.decorator";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "src/common/guard/roles.guard";
import { AppRoles } from "src/common/enum/roles.enum";
import { Product } from "./product.entity";
import { CreateProductDto } from "./dto/create-product.dto";

@Controller('api/products')
@ApiTags('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    @Roles([AppRoles.EMPLOYEE, AppRoles.ADMIN, AppRoles.MANAGER])
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    public async getAll(): Promise<Product[]> {
        return await this.productService.findAll();
    }

    @Get("category/:categoryId")
    @Roles([AppRoles.EMPLOYEE, AppRoles.ADMIN, AppRoles.MANAGER])
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    public async getByCategoryId(@Param("categoryId") categoryId: number): Promise<Product[]> {
        return await this.productService.findByCategoryId(categoryId);
    }

    @Post()
    @Roles([AppRoles.EMPLOYEE, AppRoles.ADMIN, AppRoles.MANAGER])
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    public async create(@Body() createProductDto: CreateProductDto): Promise<boolean> {
        return await this.productService.create(createProductDto);
    }
}
