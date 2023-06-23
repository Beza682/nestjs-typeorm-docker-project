import { 
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn 
} from "typeorm";

export const USER_IN_GROUP_TABLE_NAME = 'user_in_group'

@Entity(USER_IN_GROUP_TABLE_NAME)
export class UserInGroup{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'user_id', type: String })
    userId: string 

    @Column({ name: 'group_id', type: String })
    groupId: string 

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    createdAt: Date 

    @DeleteDateColumn({ name: 'delete_at', type: 'timestamptz', nullable: true })
    deleteAt?: Date 
}