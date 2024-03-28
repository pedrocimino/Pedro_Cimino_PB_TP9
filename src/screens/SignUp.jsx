import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import {
  ActivityIndicator,
  Pressable,
  Platform,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "../firebase";
import { Camera } from "expo-camera";

export default function SignUp() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const [hasCameraPermission, setCameraPermission] = useState(false);
  const [camera, setCamera] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);

  useEffect(() => {
    getCameraPermission();
  }, []);

  function verificarUsuario() {
    setIsLoading(true);
    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        setMsg("Usuário válido.");
      })
      .catch((error) => {
        setMsg(error.message);
      })
      .finally(setIsLoading(false));
  }

  const getCameraPermission = async () => {
    const permission = await Camera.requestCameraPermissionsAsync();
    if (permission.status === "granted") {
      setCameraPermission(true);
    }
  };

  const takeAPicture = async () => {
    if (camera) {
      const picture = await camera.takePictureAsync();
      setMsg(picture.uri);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator />}
      {!photoUri && (
        <>
          <Camera
            style={styles.cameraTakePicture}
            type={Camera.Constants.Type.back}
            ref={(refCamera) => {setCamera(refCamera)}}
          />
          <Pressable
            style={styles.btnTakePicture}
            onPress={() => takeAPicture()}
          >
            <Text>Tirar Foto</Text>
          </Pressable>
        </>
      )}
      {photoUri && (
        <>
          <Image source={{ uri: photoUri }} style={styles.photoTakePicture} />
          <Pressable
            style={styles.btnTakePicture}
            onPress={() => setPhotoUri(null)}
          >
            <Text>Tirar Nova Foto</Text>
          </Pressable>
        </>
      )}
      {!isLoading && (
        <View>
          <Text>Email:</Text>
          <TextInput value={userEmail} onChangeText={setUserEmail} />
          <Text>Senha:</Text>
          <TextInput value={userPassword} onChangeText={setUserPassword} />
          <Pressable onPress={() => verificarUsuario()} style={styles.btn}>
            <Text style={styles.btnLabel}>Acessar</Text>
          </Pressable>
        </View>
      )}
      {msg && (
        <View styles={Platform.OS == "web" ? styles.btn : styles.btnLabel}>
          <Text>{msg}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  cameraTakePicture: {
    flex: 1,
    height: 150,
  },
  photoTakePicture: {
    flex: 1,
  },
  btnTakePicture: {},
  btn: {
    margin: 10,
    padding: 2,
    ...Platform.select({
      android: {
        backgroundColor: "blue",
      },
      default: {
        backgroundColor: "#219ebc",
      },
    }),
  },
  btnLabel: {
    textAlign: "center",
  },
});
