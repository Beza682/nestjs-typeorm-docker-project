import { 
    Column,       
    Entity,     
    OneToOne,    
    PrimaryGeneratedColumn 
} from "typeorm";

import { UserEntity } from ".";

export const STATUS_TABLE_NAME = 'statuses'

@Entity(STATUS_TABLE_NAME)
export class StatusEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    name: string

    @OneToOne(() => UserEntity, user => user.statusId)
    user: UserEntity
}