import { Redirect } from 'expo-router';

// 启动路由守卫（登录、引导进度）在 T11 实现；空壳阶段直接进入今日。
export default function Index() {
  return <Redirect href="/today" />;
}
