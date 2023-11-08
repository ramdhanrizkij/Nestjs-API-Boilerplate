import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id:number

    @CreateDateColumn({
        name:'created_at',
        default:()=>'CURRENT_TIMESTAMP(6)'
    })
    createdAt:Date

    @UpdateDateColumn({
        name:'updated_at',
        default: ()=> 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    })
    updatedAt:Date
}