import { ok, type Result } from '@peetraining/shared';

export interface HealthStatus {
  service: 'worker';
  status: 'ok';
  node: string;
}

/** 健康检查结果；队列、并发与处理器注册在 T05 接入。 */
export function health(nodeVersion: string = process.version): Result<HealthStatus> {
  return ok({ service: 'worker', status: 'ok', node: nodeVersion });
}
