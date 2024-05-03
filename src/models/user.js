import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class User {

  static async exists(email) {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    return user;
  }

  static async create(email, password, firstName, lastName, role) {

    try {
      const user = await prisma.user.create({
          data: {
              email: email,
              password: password,
              firstName: firstName,
              lastName: lastName,
              role: role
          }
      });
      return new User(user);

    } catch (error) {
      throw error;
    }
  }
}

export default User
