import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

import { db } from '@/libs/connection';
import { services } from '@/utils/services';
import { testEmailValidation } from '@/utils/emailValidation';

export const POST = async (request: Request) => {
  const body = await request.json();
  const { testEmail } = body;
  const match = await testEmailValidation(testEmail);

  try {
    if (match) {
      const user = await db.collection('testUsers').get();
      const data = user.docs.map((doc) => doc.data());

      const fullData = data.find((doc) => doc.testEmail === testEmail);

      console.log(fullData);

      return NextResponse.json({
        message: `The email ${testEmail} already exists`,
        testEmail: fullData?.testEmail,
        services: fullData?.services,
      });
    }
    const testUser = {
      testEmail: testEmail,
      services: services,
    };

    await db.collection('testUsers').doc(testUser.testEmail).set(testUser);

    return NextResponse.json({
      success: 'Register successful',
      testEmail: testUser.testEmail,
      services: testUser.services,
    });
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

export const GET = async () => {
  return NextResponse.json({ message: 'GET request' });
};
