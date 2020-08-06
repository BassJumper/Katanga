console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
import 'react-native-gesture-handler';
import React from "react"
import { AuthProvider } from "./contexts/AuthContext"
import MainNavigation from "./screens/MainNavigation";

export default function App() {
  
  return (
      <AuthProvider>
        <MainNavigation />
      </AuthProvider>
  );
}

