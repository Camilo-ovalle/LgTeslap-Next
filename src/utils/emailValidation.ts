import { db } from '@/libs/connection';

export const emailValidation = async (email: string) => {
  const user = await db.collection('Users').get();
  const emails = user.docs.map((doc) => doc.data().data.Email);

  return emails.includes(email) ? true : false;
};
