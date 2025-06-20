import { Tabs } from 'expo-router';
import { Home, MessageCircle, Users, Leaf, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1E3A5F',
        tabBarInactiveTintColor: '#A0AEC0',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="ai-companion"
        options={{
          title: 'AI Companion',
          tabBarIcon: ({ color, size }) => (
            <MessageCircle color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="peer-support"
        options={{
          title: 'Peer Support',
          tabBarIcon: ({ color, size }) => (
            <Users color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="mindfulness"
        options={{
          title: 'Mindfulness',
          tabBarIcon: ({ color, size }) => (
            <Leaf color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <User color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}