import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class MemberShipHistory {

  static async getMembershipHistory(userEmail) {
    try {

      // const memberships = await prisma.membershipHistory.create({
      //   data: {
      //     userID: 'test',
      //     userEmail: 'irfan_test4@gmail.com',
      //     startDate: new Date(),
      //     endDate: this.addDays(new Date(), 0),
      //     membershipType: 'ANNUAL'
      //   }
      // })


      const memberships = await prisma.membershipHistory.findMany({
        where: {
          userEmail: userEmail
        }
      });
      return memberships;
    } catch (error) {
      throw error;
    }
  }

  // static addDays(date, days) {
  //   const result = new Date(date);
  //   result.setDate(result.getDate() + days);
  //   return result;
  // }
}

export default MemberShipHistory
