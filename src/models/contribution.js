import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Contribution {

  static async getAllContributions(userEmail) {
    try {

      // const contributions = await prisma.contribution.create({
      //   data: {
      //     userID: 'test',
      //     userEmail: 'irfan_test4@gmail.com',
      //     amount: 45.0,
      //     contributionDate: new Date(),
      //     contributionType: 'VOLUNTEER'
      //   }
      // })

      const contributions = await prisma.contribution.findMany({
        where: {
          userEmail: userEmail
        }
      });
      return contributions;
    } catch (error) {
      throw error;
    }
  }
}

export default Contribution
