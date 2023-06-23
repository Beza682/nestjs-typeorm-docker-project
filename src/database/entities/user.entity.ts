import { 
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn 
} from "typeorm";
import { GroupEntity, JokeEntity, RoleEntity, StatusEntity, UserInGroup } from ".";

export const USER_TABLE_NAME = 'users'

@Entity(USER_TABLE_NAME)
export class UserEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    name: string

    @Column({ name: 'sur_name', type: String })
    surName: string

    @Column({ type: String })
    login: string

    @Column({ type: String })
    password: string

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    createdAt: Date 

    @DeleteDateColumn({ name: 'delete_at', type: 'timestamptz', nullable: true })
    deleteAt?: Date 
    
    @Column({ name: 'status_id', type: String })
    statusId: string

    @OneToOne(() => StatusEntity, status => status.id)
    status: StatusEntity

    @OneToOne(() => RoleEntity, role => role.id)
    role: StatusEntity

    @OneToOne(() => JokeEntity, joke => joke.id)
    joke: JokeEntity

    @OneToMany(() => UserInGroup, userInGroup => userInGroup.groupId)
    groups: GroupEntity[]
}