import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyC7c5o_BIiIkPfqa3_ksWHJcxdYRfiAWG8',
  authDomain: 'online-shop-b33e0.firebaseapp.com',
  projectId: 'online-shop-b33e0',
  storageBucket: 'online-shop-b33e0.appspot.com',
  messagingSenderId: '474716901405',
  appId: '1:474716901405:web:df52036d7c2cc1a58af6f4'
};
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};
