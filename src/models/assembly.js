import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Assembly {

  static async createAssembly(data) {
    try {
      const assembly = await prisma.generalAssembly.create({
        data: data
      });
      return assembly;

    } catch (error) {
      throw error
    }
  }

  static async getAllAssemblies(user) {
    try {

      if(user.role === 'ADMIN') {
        const assemblies = await prisma.generalAssembly.findMany();
        return assemblies;
      }
      else {
        const assemblies = await prisma.generalAssembly.findMany({
          date: {
            gte: new Date()
          }
        });

        return assemblies;
      }
    } catch (error) {
      throw error
    }
  }  
}

export default Assembly
