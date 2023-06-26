import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export const TEST_REG_TABLE_NAME = 'test_reg'

@Entity(TEST_REG_TABLE_NAME)
export class RegTestEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: String })
    username: string

    @Column({ type: String })
    password: string
}