import { BaseEntityWithUUID } from "src/common";
import { Permission } from "src/permission/entities/permission.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

@Entity({name:'m_role'})
export class Role extends BaseEntityWithUUID{
    @Column()
    role_name:string

    @ManyToMany(()=>User, (users)=> users.roles)
    @JoinTable({
        name:'t_user_role',
        joinColumn:{name:'role_id', referencedColumnName:'id'},
        inverseJoinColumn: { name: 'user_id', referencedColumnName: 'id' },
    })
    users: User[]

    @ManyToMany(() => Permission)
    @JoinTable({
      name: 't_role_permission',
      joinColumn: { name: 'role_id', referencedColumnName: 'id' },
      inverseJoinColumn: { name: 'permission_id', referencedColumnName: 'id' },
    })
    permissions: Permission[];
  
}