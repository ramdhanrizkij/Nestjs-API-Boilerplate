import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsUUID } from "class-validator";

export class BaseDto {
    @ApiProperty()
    @IsOptional()
    id: number;
}

export class BaseWithUUID {
    @ApiProperty()
    @IsOptional()
    id:number;

    @ApiProperty()
    @IsOptional()
    @IsUUID()
    uuid:string
}