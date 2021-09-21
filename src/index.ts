export * from './helpers/jackett';
export * from './definition-interface';
export * from './categories';
export * from './filters';
import { definitions as customDefinitions } from './custom';
import { definitions as jDefinitions } from './jackett';

export const definitions = [...jDefinitions, ...customDefinitions];
