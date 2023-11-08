import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, Max, isNumber } from "class-validator";

export class PageRequestDto {
    @ApiProperty({required:false, default:1})
    @Type(()=>Number)
    @IsNumber()
    page =1;

    @ApiProperty({required:false, default:10})
    @Type(()=>Number)
    @IsNumber()
    @Max(100)
    limit=10
}

export class PageResponseDto {
    @ApiProperty()
    @IsNumber()
    total: number;
  
    @ApiProperty()
    @IsNumber()
    pages: number;
  }
  