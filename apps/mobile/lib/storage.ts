import { createMMKV } from 'react-native-mmkv';

/** 本地键值存储（草稿、缓存）。草稿键规则 draft:<kind>:<id> 在 T22 实现。 */
export const storage = createMMKV({ id: 'peetraining' });
