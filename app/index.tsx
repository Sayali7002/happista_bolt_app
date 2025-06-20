import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
  const router = useRouter();
  const { user, loading, userProfile } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        if (userProfile?.completedSetup) {
          router.replace('/(tabs)');
        } else {
          router.replace('/profile-setup');
        }
      } else {
        router.replace('/welcome');
      }
    }
  }, [user, loading, userProfile, router]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
  },
  loadingText: {
    fontSize: 16,
    color: '#4A5568',
  },
});