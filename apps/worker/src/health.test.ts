import { describe, expect, it } from 'vitest';

import { health } from './health';

describe('health', () => {
  it('返回统一结构的健康状态', () => {
    expect(health('v22.0.0')).toEqual({
      ok: true,
      data: { service: 'worker', status: 'ok', node: 'v22.0.0' },
    });
  });
});
