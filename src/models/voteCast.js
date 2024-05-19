import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class VoteCast {
  static async exists(email) {
    const vote = await prisma.voteCast.findFirst({
      where: {
        voterEmail: email,
      },
    });

    return vote;
  }



  static async castVote(data) {
    try {
      const voteCast = await prisma.voteCast.create({
        data: data
      });
      return voteCast;

    }catch (e) {
      throw e;
    }

  }
  
}

export default VoteCast
