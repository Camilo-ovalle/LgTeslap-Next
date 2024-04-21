import 'dotenv/config';
import { initializeApp, applicationDefault, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const alreadyInitialized = getApps();

const firebaseApp =
  alreadyInitialized.length === 0
    ? initializeApp({
        credential: applicationDefault(),
      })
    : alreadyInitialized[0];

export const db = getFirestore(firebaseApp);
