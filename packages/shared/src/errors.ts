/** 通用错误码（技术规格 4.1）。 */
export const ERROR_CODES = [
  'UNAUTHORIZED',
  'VALIDATION',
  'NOT_FOUND',
  'QUOTA_EXCEEDED',
  'CONFLICT',
  'AI_FAILED',
  'RATE_LIMITED',
] as const;

export type ErrorCode = (typeof ERROR_CODES)[number];

export function isErrorCode(value: unknown): value is ErrorCode {
  return typeof value === 'string' && (ERROR_CODES as readonly string[]).includes(value);
}
