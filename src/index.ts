export * from './helpers/jackett';
export * from './definition-interface';
export * from './categories';
export * from './filters';
import { definitions as jDefinitions } from './jackett';
import { definitions as customDefinitions } from './custom';

export const definitions = [...jDefinitions, ...customDefinitions];
