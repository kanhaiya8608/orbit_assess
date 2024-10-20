import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarLabelStyle: {
          fontSize: 12, 
          paddingBottom: 5, 
        },
        tabBarStyle: {
          paddingBottom: 10, 
          height: 70,
         },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'search-sharp' : 'search-outline'} color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          headerShown: false,
          title: 'Create',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'add-circle-sharp' : 'add-circle-outline'} color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          headerShown: false,
          title: 'Community',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'people-sharp' : 'people-outline'} color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          headerShown: false,
          title: 'Me',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-sharp' : 'person-outline'} color={color} size={28} />
          ),
        }}
      />
    </Tabs>
  );
}
