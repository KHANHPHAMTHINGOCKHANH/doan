import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, Query } from '@nestjs/common';
import { StorageService } from './storage.service';
import { CreateStorageDto } from './dto/create-storage.dto';
import { UpdateStorageDto } from './dto/update-storage.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Storage } from './entities/storage.entity';

@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

 @Post('upload')
 @UseInterceptors(FilesInterceptor('files'))
  async uploadFiles(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }),
          new FileTypeValidator({
            fileType: '.(jpg|jpeg|png)',
          }),
        ],
      }),
    )
    files: Express.Multer.File[],
    @Query('folderName') folderName: string,
  ): Promise<{ urls: string[] }> {
    try {
      const urls = await this.storageService.uploadFiles(files, folderName);
      await this.storageService.saveFileUrlToDatabase({
        folderName,
        urls,
      });
      return { urls };
    } catch (error) {
      throw error;
    }
  }

  
  @Get('image')
  async getFiles(@Query('folderName') folderName: string): Promise<Storage> {
    try {
      const files = await this.storageService.getFilesByFolderName(folderName);
      if (!files) {
        return;
      }
      return files;
    } catch (error) {
      throw error;
    }
  }
}
