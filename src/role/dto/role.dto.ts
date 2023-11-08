import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDTO {
    @ApiProperty({required: true})
    @IsString()
    role_name: string;
}