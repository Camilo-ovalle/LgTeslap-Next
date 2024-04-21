import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

import { userSchema } from '@/schemas/user.schema';
import { db } from '@/libs/connection';
import { emailValidation } from '@/utils/emailValidation';

export const POST = async (request: Request) => {
  const body = await request.json();
  const { Email } = body;
  const match = await emailValidation(Email);

  try {
    userSchema.parse(body);

    const User = {
      data: body,
      services: [],
    };

    if (match) {
      return NextResponse.json(
        {
          message: `The email ${Email} already exists`,
        },
        { status: 409 },
      );
    }

    const newUser = await db.collection('Users').doc(randomUUID()).set(User);

    return NextResponse.json({ success: 'Register successful', newUser });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'There was an error ',
        error: error,
      },
      { status: 400 },
    );
  }
};
