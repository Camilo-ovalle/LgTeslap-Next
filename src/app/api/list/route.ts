import { NextResponse } from 'next/server';
import { db } from '@/libs/connection';
import { emailValidation } from '@/utils/emailValidation';

export const GET = async () => {
  const email = 'camilo.enri';
  const data = await emailValidation(email);

  try {
    if (data) {
      return NextResponse.json({
        message: 'The email already exists',
        status: 409,
      });
    }

    const user = await db.collection('Users').get();
    const mining = user.docs.map((doc) => doc.data().data.Email);

    return NextResponse.json({
      message: 'user does not exits',
      mining: mining,
    });
  } catch (error) {
    return NextResponse.json({ message: 'There was an error', error: error });
  }
};
