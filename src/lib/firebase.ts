import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer, setLogLevel } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
// Mute internal Firestore SDK network timeout warnings and info logs to prevent cluttering the app
try {
  setLogLevel('silent');
} catch (e) {
  console.log('Could not set Firestore log level:', e);
}

export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  // Use simple primitives to avoid any circular structure issues
  const errorMessage = error instanceof Error ? error.message : String(error);
  
  const errInfo = {
    error: errorMessage,
    operationType: String(operationType),
    path: path ? String(path) : null,
    authInfo: {
      userId: auth.currentUser?.uid ? String(auth.currentUser.uid) : null,
      email: auth.currentUser?.email ? String(auth.currentUser.email) : null,
      emailVerified: Boolean(auth.currentUser?.emailVerified),
      isAnonymous: Boolean(auth.currentUser?.isAnonymous),
    }
  };

  let jsonString: string;
  try {
    // Use a robust replacer to handle potential circular structures or non-serializable objects
    const cache = new Set();
    jsonString = JSON.stringify(errInfo, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (cache.has(value)) return '[Circular]';
        cache.add(value);
      }
      return value;
    });
  } catch (e) {
    // Ultimate fallback
    jsonString = `{"error": "Failed to stringify error info", "operation": "${operationType}"}`;
  }

  console.error('[Firestore Error]', jsonString);
  // Throw a simple Error with the string message to avoid circular structure issues in stack traces
  const finalError = new Error(jsonString);
  throw finalError;
}

export async function checkConnection() {
  try {
    // Wrap with a fast 2.5 second timeout to prevent the connection check from hanging the client thread
    const fetchPromise = getDocFromServer(doc(db, 'test', 'connection'));
    const timeoutPromise = new Promise<never>((_, reject) => 
      setTimeout(() => reject(new Error('Connection check timeout')), 2500)
    );
    const testDoc = await Promise.race([fetchPromise, timeoutPromise]);
    return testDoc.exists();
  } catch (error) {
    return false;
  }
}

// Initial connection test as required by instructions
let isTestingConnection = false;
async function testConnection() {
  if (isTestingConnection) return;
  isTestingConnection = true;
  
  console.log("Starting Firebase connection test...");
  
  try {
    const start = Date.now();
    // Using checkConnection which includes a fast timeout for safe and resilient boot checks
    const connected = await checkConnection();
    if (connected) {
      console.log(`Firebase connection successful! (took ${Date.now() - start}ms)`);
    } else {
      console.warn("Firebase connection test: Operating in offline fallback/cached storage mode.");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.warn(`Firebase connection test info: ${error.message}`);
    }
  } finally {
    isTestingConnection = false;
  }
}

// Start connection test after a short delay
setTimeout(() => testConnection(), 2000);
