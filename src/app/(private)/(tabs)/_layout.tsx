import { Tabs } from "expo-router";
import { SolarIcon } from "react-native-solar-icons";

import { colors } from "@/styles/colors";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 110,
          paddingTop: 16,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Produtos",
          tabBarActiveTintColor: colors["purple-base"],
          tabBarIcon: ({ color }) => (
            <SolarIcon name="Shop2" size={20} color={color} type="outline" />
          ),
          tabBarLabelStyle: {
            marginTop: 4,
            fontSize: 14,
            textTransform: "uppercase",
          },
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: "Pedidos",
          tabBarActiveTintColor: colors["purple-base"],
          tabBarIcon: ({ color }) => (
            <SolarIcon
              name="ClipboardText"
              size={20}
              color={color}
              type="outline"
            />
          ),
          tabBarLabelStyle: {
            marginTop: 4,
            fontSize: 14,
            textTransform: "uppercase",
          },
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Carrinho",
          tabBarActiveTintColor: colors["purple-base"],
          tabBarIcon: ({ color }) => (
            <SolarIcon
              name="CartLarge2"
              size={25}
              color={color}
              type="outline"
            />
          ),
          tabBarLabelStyle: {
            marginTop: 4,
            fontSize: 14,
            textTransform: "uppercase",
          },
        }}
      />
    </Tabs>
  );
}
