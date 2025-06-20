import { createClient } from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

// Custom storage implementation using Expo SecureStore for native platforms
const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    if (Platform.OS === 'web') {
      return Promise.resolve(localStorage.getItem(key));
    }
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    if (Platform.OS === 'web') {
      localStorage.setItem(key, value);
      return Promise.resolve();
    }
    return SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    if (Platform.OS === 'web') {
      localStorage.removeItem(key);
      return Promise.resolve();
    }
    return SecureStore.deleteItemAsync(key);
  },
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          name: string | null;
          dob: string | null;
          location: string | null;
          gender: string | null;
          workplace: string | null;
          job_title: string | null;
          education: string | null;
          religious_beliefs: string | null;
          availability: string | null;
          communication_style: string | null;
          support_type: string | null;
          completed_setup: boolean;
          support_preferences: string[] | null;
          journey_note: string | null;
        };
        Insert: {
          id: string;
          created_at?: string;
          updated_at?: string;
          name?: string | null;
          dob?: string | null;
          location?: string | null;
          gender?: string | null;
          workplace?: string | null;
          job_title?: string | null;
          education?: string | null;
          religious_beliefs?: string | null;
          availability?: string | null;
          communication_style?: string | null;
          support_type?: string | null;
          completed_setup?: boolean;
          support_preferences?: string[] | null;
          journey_note?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          name?: string | null;
          dob?: string | null;
          location?: string | null;
          gender?: string | null;
          workplace?: string | null;
          job_title?: string | null;
          education?: string | null;
          religious_beliefs?: string | null;
          availability?: string | null;
          communication_style?: string | null;
          support_type?: string | null;
          completed_setup?: boolean;
          support_preferences?: string[] | null;
          journey_note?: string | null;
        };
      };
      mindfulness_entries: {
        Row: {
          id: string;
          user_id: string;
          created_at: string;
          updated_at: string;
          type: string;
          content: string;
          mood?: string | null;
          category?: string | null;
          is_private: boolean;
          tags?: string[] | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          created_at?: string;
          updated_at?: string;
          type: string;
          content: string;
          mood?: string | null;
          category?: string | null;
          is_private?: boolean;
          tags?: string[] | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          created_at?: string;
          updated_at?: string;
          type?: string;
          content?: string;
          mood?: string | null;
          category?: string | null;
          is_private?: boolean;
          tags?: string[] | null;
        };
      };
    };
  };
};