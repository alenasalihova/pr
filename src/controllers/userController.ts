import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        password,
      },
    });
    res.send(newUser);
  } catch (error: any) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the User.',
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({
        message: `User with id ${userId} not found.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retrieving user with id ${userId}.`,
    });
  }
};

export { register, getUserById };
