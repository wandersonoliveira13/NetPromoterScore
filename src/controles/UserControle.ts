
import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepositories';

class UserControle {
    async create(request: Request, response: Response){
        const {name, email} = request.body;
        
        const usersRepository = getCustomRepository(UserRepository);

        const userAlreadyExits = await usersRepository.findOne({
            email
        })
        if(userAlreadyExits){
            return response.status(400).json({
                error: "Usuário já existe",
            });
        }

        const user = usersRepository.create({
            name, email
        })

        await usersRepository.save(user);
        
        return response.status(201).json(user);
    }
}

export { UserControle }