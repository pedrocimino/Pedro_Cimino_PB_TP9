import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBDlqBLJ9eVdmv2kpaDp2csmS18ZEDaDBY",
  authDomain: "projeto-react-native-6aedb.firebaseapp.com",
  databaseURL: "https://projeto-react-native-6aedb-default-rtdb.firebaseio.com",
  projectId: "projeto-react-native-6aedb",
  storageBucket: "projeto-react-native-6aedb.appspot.com",
  messagingSenderId: "968604997892",
  appId: "1:968604997892:web:c96b35d9f3264e90c75851"
};

const app = initializeApp(firebaseConfig);

export default app;