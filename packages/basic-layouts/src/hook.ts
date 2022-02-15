import React from 'react';
export const MainContext = React.createContext<{
  headerLayout?: 'top' | 'default';
  headerBackground?: string;
  headerFontColor?: string;
}>({
  headerLayout: 'top',
  headerBackground: '#fff',
  headerFontColor: '#000',
});
export const useMain = () => React.useContext(MainContext);
