import {
    Column,
    CreateDateColumn,
    Generated,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  export abstract class BaseEntityWithUUID {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Generated('uuid')
    @Column()
    uuid: string;
  
    @CreateDateColumn({
      name: 'created_at',
      default: () => 'CURRENT_TIMESTAMP(6)',
    })
    createdAt: Date;
  
    @UpdateDateColumn({
      name: 'updated_at',
      default: () => 'CURRENT_TIMESTAMP(6)',
      onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updatedAt: Date;
  }
  