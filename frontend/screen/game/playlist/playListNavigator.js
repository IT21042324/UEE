import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Audiolist } from "./audiolist";
import { Player } from "./player";
import { PlayList } from "./playlist";
import PlayListDetail from "./playListDetail";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const PlayListScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Your PlayList" component={PlayList} />
      <Stack.Screen name="PlayListDetail" component={PlayListDetail} />
    </Stack.Navigator>
  );
};

export const PlayListNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AudioList"
        component={Audiolist}
        options={{
          header: () => {},
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="headset" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          header: () => {},
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="compact-disc" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PlayList"
        component={PlayListScreen}
        options={{
          header: () => {},
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="library-music" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
