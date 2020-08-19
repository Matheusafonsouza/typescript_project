import { Request, Response } from 'express';
import CreateUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = CreateUser({
        email: 'matheus@email.com',
        password: '123123',
        techs: [
            'node',
            'react',
            'react native',
            { title: 'Javascript', experience: 100 },
            { title: 'Typescript', experience: 100 }
        ]
    });

    return response.status(200).json(user);
}