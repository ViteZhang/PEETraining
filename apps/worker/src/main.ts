import { health } from './health';

const result = health();
console.log(JSON.stringify({ event: 'worker_started', ...result }));
