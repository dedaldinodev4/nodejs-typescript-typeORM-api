import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { hashSync, compareSync } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { BaseEntity } from "./BaseEntity";


@Entity("_users")
export class User extends BaseEntity {

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    status: boolean;

    hashPassword (): void {
        this.password = hashSync(this.password, 10);
    }

    generateToken (user: any, jwt_key: any): string {
        return sign({ user }, jwt_key,{ expiresIn: "1h"});
    }

    checkUnEncryptedPasswordIsValid (unEncryptedPassword: string): boolean {
        return compareSync(unEncryptedPassword, this.password);
    }
    
}