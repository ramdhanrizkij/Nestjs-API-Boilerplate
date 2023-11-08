import { BaseEntityWithUUID } from "src/common";
import { Role } from "src/role/entities/role.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: 'm_permission' })
export class Permission extends BaseEntityWithUUID {
    @Column({ name: 'permission_name' })
    @Unique(['permission_name'])
    permission_name: string;

    @Column()
    group: string;

    @ManyToMany(() => Role, (role) => role.permissions)
    roles: Role[];
}