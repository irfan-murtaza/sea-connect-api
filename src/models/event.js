import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Event {

  static async getActiveEvents() {
    try {
      const activeEvents = await prisma.events.findMany({
        where: {
          eventDate: {
            gt: new Date(),
          },
        },
      });
      return activeEvents;
    } catch (error) {
      throw error;
    }
  }

  static addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  
  }
}

export default Event
