import { Request, Response } from 'express';

export function helloWorld(request: Request, response: Response) {
    return response.status(200).json({ message: 'Hello World!' });
}