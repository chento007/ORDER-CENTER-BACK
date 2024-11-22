import { Controller, Get, Param, Post, Res, StreamableFile, UploadedFile, UseInterceptors } from "@nestjs/common";

import { ConfigService } from "@nestjs/config";


import { FileService } from "./file.service";
import { LocalFilesInterceptor } from "src/common/config/file.config";
import { FileDto } from "./dto/file.dto";
import { ApiTags } from "@nestjs/swagger";


@Controller("api/files")
@ApiTags('files')
export class FileController {

    constructor(
        private fileService: FileService,
        private readonly configService: ConfigService
    ) { }

    @Post('upload')
    @UseInterceptors(LocalFilesInterceptor({
        fieldName: 'file'
    }))
    public uploadSingleFile(@UploadedFile() file: Express.Multer.File): FileDto {
        return this.fileService.uploadSingleFile(file);
    }

    @Get("/:filename")
    public viewImage(@Param("filename") filename: string, @Res() res): any {

        return res.sendFile(this.fileService.viewImage(filename));
    }
}  