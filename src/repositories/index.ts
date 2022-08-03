import { getRepository } from "typeorm";

import { Hero } from "../entities/Hero";
import { User } from "../entities/User";

export const UserRepository = () => {
    return getRepository(User);
}

export const HeroRepository = () => {
    return getRepository(Hero)
}