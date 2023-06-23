import { 
    Column,
    Entity,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn 
} from "typeorm";
import { UserEntity, UserInGroup, LevelEntity } from ".";

export const GROUP_TABLE_NAME = 'groups'

@Entity(GROUP_TABLE_NAME)
export class GroupEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    name: string

    @Column({ name: 'short_name', type: String })
    shortName: string

    @OneToMany(() => UserInGroup, userInGroup => userInGroup.userId, { nullable: true })
    users?: UserEntity[]

    @Column({ name: 'level_id', type: String })
    levelId: string

    @OneToOne( () => LevelEntity, level => level.id )
    level: LevelEntity
}