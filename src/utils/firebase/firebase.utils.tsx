import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  NextOrObserver,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  User
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  QueryDocumentSnapshot,
  setDoc,
  updateDoc,
  writeBatch
} from 'firebase/firestore';
import { Category, CategoryItem } from '../../store/categories/category.types';
import { OrderItem } from '../../store/order/order.types';
import {
  USER_ORDER_DELIVERY_STATUSES,
  UserOrderItem
} from '../../store/user-orders/user-orders.types';
const firebaseConfig = {
  apiKey: 'AIzaSyC7c5o_BIiIkPfqa3_ksWHJcxdYRfiAWG8',
  authDomain: 'online-shop-b33e0.firebaseapp.com',
  projectId: 'online-shop-b33e0',
  storageBucket: 'online-shop-b33e0.appspot.com',
  messagingSenderId: '474716901405',
  appId: '1:474716901405:web:df52036d7c2cc1a58af6f4'
};
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();
export type ObjectToAdd = {
  title: string;
};
export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log('done');
};
export const getUserOrdersFromCollection = async (
  userId: string
): Promise<UserOrderItem[]> => {
  const collectionRef = collection(db, 'orders');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs
    .map((docSnapshot) => {
      const data = docSnapshot.data();
      const id = docSnapshot.id;
      return { ...data, createdAt: data.createdAt.toDate(), id } as UserOrderItem;
    })
    .filter((order) => order.userId === userId);
};
export const getOrdersFromCollection = async (): Promise<UserOrderItem[]> => {
  const collectionRef = collection(db, 'orders');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => {
    const data = docSnapshot.data();
    const id = docSnapshot.id;
    return { ...data, createdAt: data.createdAt.toDate(), id } as UserOrderItem;
  });
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category);
};
export const getItemFromDocumentsById = async (id: number): Promise<CategoryItem> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs
    .map((docSnapshot) => docSnapshot.data())
    .flatMap((category) => category.items)
    .find((item) => item.id === id);
};
export const getItemsFromDocumentsByTerm = async (
  term: string
): Promise<CategoryItem[]> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs
    .map((docSnapshot) => docSnapshot.data())
    .flatMap((category) => category.items)
    .filter(({ name }) => name.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
};

export type AdditionalInformation = {
  displayName?: string;
};
export type UserData = {
  email: string;
  displayName: string;
  createdAt: Date;
  isAdmin: boolean;
};

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => {
  await signOut(auth);
};
export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        isAdmin: false,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error);
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
};
export const createOrderDocument = async (order: OrderItem) => {
  const orderDocRef = doc(collection(db, 'orders'));
  const createdAt = new Date();
  try {
    await setDoc(orderDocRef, { ...order, createdAt });
  } catch (error) {
    console.log('error createing order', error);
  }
};
export const setDeliveredOrderStatusInDocument = async (orderId: string) => {
  const orderDocRef = doc(collection(db, 'orders'), orderId);
  try {
    await updateDoc(orderDocRef, {
      status: USER_ORDER_DELIVERY_STATUSES.USER_ORDER_DELIVERY_DELIVERED
    });
  } catch (error) {
    console.log('error updating order status', error);
  }
};
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  onAuthStateChanged(auth, callback);
};
export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
