import jwt from 'jsonwebtoken';
import { UserRepository } from '../../repositories';
import { IUserRequest, ICurrentUser } from '../../dtos/User';



export class RegisterAuthService {

    async execute ({ email, password, name }: IUserRequest): Promise<ICurrentUser | Error> {
        const _repository = UserRepository();

        if (await _repository.findOne({ email })) {
            return new Error("User already exists");
        }

        const user = _repository.create({ email, password, name });
        user.hashPassword();

        await _repository.save(user);

        
        return {
            user: {
                email: user.email,
                userId: user.id,
                status: user.status,
                name: user.name
            },
            token: user.generateToken(user, process.env.JWT_KEY)
        };
        
    }
}