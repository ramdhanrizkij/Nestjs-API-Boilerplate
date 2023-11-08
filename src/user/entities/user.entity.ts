import { IsNotEmpty } from "class-validator";
import { BaseEntityWithUUID } from "src/common";
import { Role } from "src/role/entities/role.entity";
import { Column, Entity, JoinTable, ManyToMany, Unique } from "typeorm";

@Entity({name:'m_user'})
export class User extends BaseEntityWithUUID{
    @Column()
    @Unique(['email'])
    email:string

    @Column()
    @IsNotEmpty()
    name:string;

    @Column({ select: false })
    @IsNotEmpty()
    password: string;

    @Column({nullable:true})
    phone_number:string;

    @Column({nullable:true, default:0})
    status: number

    @ManyToMany(()=>Role)
    @JoinTable({
        name:'t_user_role',
        joinColumn: {name:'user_id', referencedColumnName:'id'},
        inverseJoinColumn:{name:'role_id', referencedColumnName:'id'}
    })
    roles: Role[]
}