import { Request, Response } from 'express';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    // Ваш код для авторизації
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while logging in.',
    });
  }
};