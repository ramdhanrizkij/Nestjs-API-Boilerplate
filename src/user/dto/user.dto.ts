import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";
import { IsUnique } from "src/common";
import { User } from "../entities/user.entity";

export class CreateUserDTO{
    @IsNotEmpty()
    @ApiProperty()
    @IsUnique([User, 'email'])
    email:string

    @IsNotEmpty()
    @ApiProperty()
    password:string

    @IsNotEmpty()
    @ApiProperty()
    name:string

    @IsOptional()
    @ApiProperty({required:false})
    no_hp?:string
}