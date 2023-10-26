import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Audiolist } from "./audiolist";
import { PlayList } from "./playlist.js";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Player } from "./player";

const Tab = createBottomTabNavigator();

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
        component={PlayList}
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
