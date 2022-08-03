import { UserRepository } from '../../repositories';
import { ICurrentUser, IUserLogin } from '../../dtos/User';

export class LoginAuthService {

    async execute ({email, password}:IUserLogin): Promise< ICurrentUser| Error> {
        const _repository = UserRepository(); 

        const user = await _repository.findOne({ email }); 

        if (!user) {
            return new Error("User doesn't exists");
        }

       if (user.checkUnEncryptedPasswordIsValid(password)) {
           
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

       return new Error("User unauthorized");
    }
}