import {Controller, Get, Param, Post, Body, Put, Delete, HttpException, HttpStatus, UsePipes, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express'
import {diskStorage} from 'multer'

// internal
import {NewsService} from './news.service'
import {NewsCreateDto}from './newsdto/createnews.dto'
import {NewsUpdateDto}from './newsdto/updatenews.dto'
import KEY from '../../config/key'
import{NewsCreateValidate, NewsUpdateValidate}from'./news.validatae'
import { ValidationPipe } from './../pipes/validation.pipe';
import {editFileName, imageFileFilter} from './config'
import {CreateDto} from './newsdto/create'


@Controller('news')
export class NewsController {
    constructor(private readonly NewsService:NewsService){}

    @Get('imgpath/:id')
     seeUploadedFile(@Param('id') image, @Res() res):Promise<any>{
        try{
      return res.sendFile(image, { root: './upload/file/news' });
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    @Get()
    async listnews():Promise<any>{
        try{
           const results = await this.NewsService.findAll()
           return{
               code:KEY.KEY_OK,
               message:'',
               results
           }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get(':id')
    async newsOne(@Param('id') id:string):Promise<any>{
        const results = await this.NewsService.findOne(id)
        return{
            code:KEY.KEY_OK,
            message:'',
            results
        }
    }

    @Post('upload')
    // @UsePipes(new ValidationPipe(NewsCreateValidate))
    @UseInterceptors(FileInterceptor('filedname', {
        storage: diskStorage({
          destination: './upload/file/news',
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
}))
    async createNews(@UploadedFile() file, @Body() body:NewsCreateDto):Promise<any>{
        try{
            await this.NewsService.createnews({
                name:file.filename
                // detail:body.detail,
        })
                return{
                code:KEY.KEY_OK,
                message:'',
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

//     @Post()
//    async createdata(@Body() data:CreateDto):Promise<any>{
//        try{
//             await this.NewsService.createData(data)
//        }catch(error){
//             throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
//         }
//    }
    @Put(':id')
    @UseInterceptors(FileInterceptor('filedname', {
        storage: diskStorage({
          destination: './upload/file/news',
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
        }))
    // @UsePipes(new ValidationPipe(NewsUpdateValidate))
    async updatenews(@UploadedFile() file, @Param('id') id:string, @Body() body:NewsUpdateDto):Promise<any>{
        try{
             await this.NewsService.updatenews(id, {
                name:file.filename,
                // newstitle:body.newstitle,
                // detail:body.detail,
             })
             return{
                 code:KEY.KEY_OK,
                 message:'',
             }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    @Delete(':id')
    async deletenews(@Param('id') id:string):Promise<any>{
        try{
            await this.NewsService.deletenews(id)
            return{
                code:KEY.KEY_OK,
                message:''
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
