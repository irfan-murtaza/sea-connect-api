import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Contribution {

  static async getAllContributions(userEmail) {
    try {
      const contributions = await prisma.contribution.findMany({
        where: {
          UserEmail: userEmail
        }
      });
      return contributions;
    } catch (error) {
      throw error;
    }
  }
}

export default Contribution
