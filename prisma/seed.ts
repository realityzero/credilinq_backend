import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: 'nishantsikri@gmail.com' },
    update: {},
    create: {
      email: 'nishantsikri@gmail.com',
      name: 'Nishant Sikri',
      password: 'supersecretpassword',
    },
  });

  console.log({ user1 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close connection
    await prisma.$disconnect();
  });
