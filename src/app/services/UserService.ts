import { prisma } from '@/lib/prisma'
import { Prisma } from 'generated/prisma/client';

class UserService {
  async findOrCreate(id: string): Promise<Prisma.UserModel> {
    const user = await prisma.user.findFirst({ where: { id } });

    if (!user) {
      return await prisma.user.create({ data: { id } });
    }

    return user;
  }
}

export const userService = new UserService();
