import { v4 as uuid } from 'uuid'

export interface IHero {
    id?: string;
    name: string;
    age: number;
    power: string;
    team: string;
    created_at: Date;
    updated_at: Date;
}

export interface IHeroRequest {
    name: string;
    age: number;
    power: string;
    team: string;
}