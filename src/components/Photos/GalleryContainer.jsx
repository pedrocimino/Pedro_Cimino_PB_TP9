import { Image, Text, View } from "react-native";
import app from "../../Firebase";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function GalleryContainer() {
  const [photos, setPhotos] = useState([]);

  async function getPhotos() {
    try {
      const firebaseStorage = getStorage(app);
      const photosRef = ref(firebaseStorage);
      const list = await listAll(photosRef);
      const urls = [...photos];
      for (let fileRef of list.items) {
        const photoRef = ref(firebaseStorage, fileRef);
        const url = await getDownloadURL(photoRef);
        if (!urls.includes(url)) urls.push(url);
      }
      setPhotos(urls);
    } catch (error) {
      // ...
    }
  }

  useFocusEffect(
    useCallback(() => {
      getPhotos();
    }, [])
  );

  return (
    <View>
      <Text>{photos.length}</Text>
      {photos.map((uri) => (
        <Image style={{ width: 50, height: 50 }} source={{ uri }} />
      ))}
    </View>
  );
}
