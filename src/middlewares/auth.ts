import { NextFunction, Request, Response } from 'express';

export function checkAuth(req: Request, res: Response, next: NextFunction) {
    const password = req.query.password;

    if (password !== 'answer') {
        const error = new Error(JSON.stringify({ message: 'unauthorized error', statusCode: 401 }));
        return next(error);
    }
    return next();
}