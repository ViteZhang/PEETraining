import { describe, expect, it } from 'vitest';

import { ERROR_CODES, err, isErrorCode, ok } from './index';

describe('Result', () => {
  it('ok 包装数据', () => {
    expect(ok({ id: 1 })).toEqual({ ok: true, data: { id: 1 } });
  });

  it('err 带错误码与说明，detail 可选', () => {
    expect(err('NOT_FOUND', '知识点不存在')).toEqual({
      ok: false,
      error: { code: 'NOT_FOUND', message: '知识点不存在' },
    });
    expect(err('QUOTA_EXCEEDED', '额度不足', { kind: 'grade', used: 3, limit: 3 })).toEqual({
      ok: false,
      error: {
        code: 'QUOTA_EXCEEDED',
        message: '额度不足',
        detail: { kind: 'grade', used: 3, limit: 3 },
      },
    });
  });
});

describe('ErrorCode', () => {
  it('包含技术规格 4.1 的全部通用错误码', () => {
    expect(ERROR_CODES).toEqual([
      'UNAUTHORIZED',
      'VALIDATION',
      'NOT_FOUND',
      'QUOTA_EXCEEDED',
      'CONFLICT',
      'AI_FAILED',
      'RATE_LIMITED',
    ]);
  });

  it('isErrorCode 只接受已定义的错误码', () => {
    expect(isErrorCode('CONFLICT')).toBe(true);
    expect(isErrorCode('conflict')).toBe(false);
    expect(isErrorCode(undefined)).toBe(false);
  });
});
