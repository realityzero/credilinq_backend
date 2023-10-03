import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  const hashedPassword = await bcrypt.hash(
    'supersecretpassword',
    roundsOfHashing,
  );
  const user1 = await prisma.user.upsert({
    where: { email: 'nishantsikri@gmail.com' },
    update: {
      password: hashedPassword,
    },
    create: {
      email: 'nishantsikri@gmail.com',
      name: 'Nishant Sikri',
      password: hashedPassword,
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
