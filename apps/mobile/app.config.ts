import type { ExpoConfig } from 'expo/config';

// 应用标识见 CLAUDE.md「应用标识」；EAS 项目 ID 在注册 EAS 后通过环境变量注入。
const APP_ID = 'peetraining.dreamerlab.cn';
const easProjectId = process.env.EAS_PROJECT_ID;

const config: ExpoConfig = {
  name: '考研Training',
  slug: 'peetraining',
  scheme: 'peetraining',
  version: '0.1.0',
  orientation: 'portrait',
  // 首期不做深色模式（PRD 3.2）
  userInterfaceStyle: 'light',
  ios: {
    bundleIdentifier: APP_ID,
    supportsTablet: false,
  },
  android: {
    package: APP_ID,
  },
  plugins: ['expo-router'],
  experiments: {
    typedRoutes: true,
  },
  extra: easProjectId ? { eas: { projectId: easProjectId } } : {},
};

export default config;
