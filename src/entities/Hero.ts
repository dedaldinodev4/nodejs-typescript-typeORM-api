import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { User } from "./User";


@Entity("_heroes")
export class Hero extends BaseEntity {

    @Column()
    name: string;
    
    @Column()
    age: number;

    @Column()
    power: string;
    
    @Column()
    team: string;

    @Column()
    userId: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId'})
    user: User;
    
}