import 'react-native-gesture-handler';
import React from 'react';
import {customTheme, CustomThemeProvider} from './theme/CustomThemeContext';
import AppRoutes from './routes/AppRoutes';
import {AuthProvider} from './auth/AuthContext';

export default function App() {
  return (
      <AuthProvider>
          <CustomThemeProvider value={customTheme}>
              <AppRoutes />
          </CustomThemeProvider>
      </AuthProvider>
  );
}