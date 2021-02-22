import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import User from '../models/user'

export default {
    async createUser(req: Request, res: Response) {
        const {
            name,
            email,
            password
        } = req.body
    
        const usersRepository = getRepository(User)
    
        const user = usersRepository.create({
            name,
            email,
            password
            // 4684
        })
    
        await usersRepository.save(user)
    
        return res.status(201).json({user})
    }
}