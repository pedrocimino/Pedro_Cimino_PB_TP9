import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GalleryContainer from "../components/Photos/GalleryContainer";
import CameraContainer from "../components/Photos/CameraContainer";

const Tabs = createBottomTabNavigator();

export default function PhotosPage() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="galeria" component={GalleryContainer} />
      <Tabs.Screen name="camera" component={CameraContainer} />
    </Tabs.Navigator>
  );
}
