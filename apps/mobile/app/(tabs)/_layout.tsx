import { Tabs } from 'expo-router';

import { TAB_ROUTES } from '@/components/tab-routes';

// 自定义 TabBar（视觉稿样式）在 T02 通过 tabBar 属性接入。
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {TAB_ROUTES.map((tab) => (
        <Tabs.Screen key={tab.name} name={tab.name} options={{ title: tab.title }} />
      ))}
    </Tabs>
  );
}
