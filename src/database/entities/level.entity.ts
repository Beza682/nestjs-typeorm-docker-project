import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { GroupEntity } from ".";

export const LEVEL_TABLE_NAME = 'level'
@Entity(LEVEL_TABLE_NAME)
export class LevelEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    name: string

    @Column({ name: 'group_id', type: String })
    groupId: string

    @OneToOne( () => GroupEntity, group => group.id )
    group: GroupEntity
}