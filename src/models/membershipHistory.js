import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class MemberShipHistory {

  static async getMembershipHistory(userEmail) {
    try {
      const memberships = await prisma.membershipHistory.findMany({
        where: {
          UserEmail: userEmail
        }
      });
      return memberships;
    } catch (error) {
      throw error;
    }
  }
}

export default MemberShipHistory
