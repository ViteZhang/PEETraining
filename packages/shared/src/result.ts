import type { ErrorCode } from './errors';

export interface AppError {
  code: ErrorCode;
  message: string;
  detail?: Record<string, unknown>;
}

/** 统一返回结构：{ ok, data } 或 { ok: false, error }（技术规格 4.1）。 */
export type Result<T> = { ok: true; data: T } | { ok: false; error: AppError };

export function ok<T>(data: T): Result<T> {
  return { ok: true, data };
}

export function err(
  code: ErrorCode,
  message: string,
  detail?: Record<string, unknown>,
): Result<never> {
  return { ok: false, error: detail === undefined ? { code, message } : { code, message, detail } };
}
