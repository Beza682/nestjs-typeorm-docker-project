import { 
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { UserEntity } from "./user.entity";

export const JOKE_TABLE_NAME = 'joke'

@Entity(JOKE_TABLE_NAME)
export class JokeEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    name: string

    @Column({ type: String })
    text: string

    @Column({ type: String })
    rate: string

    @Column({ type: String })
    lake: string

    @Column({ type: String })
    view: string

    @OneToMany(() => UserEntity, user => user.id, { nullable: true })
    users?: UserEntity[]
}