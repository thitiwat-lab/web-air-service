import { Controller, Get, HttpException, HttpStatus, Param, Post, Body, Put, Delete, UsePipes, Res, UseInterceptors,  UploadedFile } from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express'
import {diskStorage} from 'multer'

// internal
import {BannerService} from './banner.service'
import {BannerCreateDto} from './dto/createbanner.dto'
import {BannerUpdateDto} from './dto/updatebanner.dto'
import KEY from '../../config/key'
import {BannerUpdateValidate,  BannerCreateValidate} from './banner.validate'
import {ValidationPipe} from '../pipes/validation.pipe'
import {editFileName, imageFileFilter} from './config'

@Controller('banner')
export class BannerController {
    constructor(private readonly BannerService:BannerService){}
    @Get('images/:id')
    seeUploadedFile(@Param('id') image, @Res() res):Promise<any> {
        try{
      return res.sendFile(image, { root:'./upload/file'});
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    @Get()
    async getBanner():Promise<any>{
        try{
            const results =await this.BannerService.findAll()
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
    async getOnce(@Param('id') id:string):Promise<any>{
        const results = await this.BannerService.findOne(id)
        return{
            code:KEY.KEY_OK,
            message:'',
            results
        }
    }
     @Post('upload')
     @UsePipes(new ValidationPipe(BannerCreateValidate))
    @UseInterceptors(FileInterceptor('filedname', {
            storage: diskStorage({
              destination: './upload/file',
              filename: editFileName,
            }),
            fileFilter: imageFileFilter,
    }))
    async createimage(@UploadedFile() file){
        try{
              await this.BannerService.createbanner({name: file.filename})
                return {
                    code:KEY.KEY_OK,
                    message:''
                }
        }catch(error){
            console.log(error)
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    // @Post()
    // @UsePipes(new ValidationPipe(BannerCreateValidate))
    // async CreateBanner(@Body() body:BannerCreateDto):Promise<any>{
    //     try{
    //         await this.BannerService.createbanner(body)
    //         return{
    //             code:KEY.KEY_OK,
    //             message:''
    //         }
    //     }catch(error){
    //         throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    //     }
    // }
    @Put(':id')
    // @UsePipes(new ValidationPipe(BannerUpdateValidate))
    @UseInterceptors(FileInterceptor('filedname', {
        storage: diskStorage({
          destination: './upload/file',
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
}))
    async UpdateBanner(@UploadedFile() file, @Param('id') id:string, @Body() body:BannerUpdateDto):Promise<any>{
        try{
            await this.BannerService.updatebanner(id, {name:file.filename})
            return{
                code:KEY.KEY_OK,
                message:''
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        } 
    }
    @Delete(':id')
    async DeleteBanner(@Param('id') id:string):Promise<any>{
        try{
            await this.BannerService.deletebanner(id)
            return{
                code:KEY.KEY_OK,
                message:''
            }
        }catch(error){
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
