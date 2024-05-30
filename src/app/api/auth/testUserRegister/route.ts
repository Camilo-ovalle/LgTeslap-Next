import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getRandomId } from '@/utils/getRandomID';

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

      return NextResponse.json({
        message: `The email ${testEmail} already exists`,
        testEmail: fullData?.testEmail,
        services: fullData?.services,
      });
    }
    const testUser = {
      id: getRandomId(1, 50000),
      testEmail: testEmail,
      services: services,
    };

    await db.collection('testUsers').doc(testUser.id).set(testUser);

    // Set the cookie
    const cookie = cookies();
    cookie.set('testUser', JSON.stringify(testUser), {
      path: '/',
      maxAge: 3600,
      httpOnly: false, // Set to true if you don't want it accessible via client-side JavaScript
    });

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
