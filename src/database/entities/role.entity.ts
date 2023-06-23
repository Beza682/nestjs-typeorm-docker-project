import { 
    Column,       
    Entity,     
    OneToOne,    
    PrimaryGeneratedColumn 
} from "typeorm";

import { UserEntity } from ".";

export const ROLE_TABLE_NAME = 'roles'

@Entity(ROLE_TABLE_NAME)
export class RoleEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    name: string

    @OneToOne(() => UserEntity, user => user.id, { nullable: true })
    user?: UserEntity
}