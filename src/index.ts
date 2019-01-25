export * from './helpers/cardigann';
export * from './helpers/jackett';
export * from './definition-interface';
export * from './categories';
export * from './filters';
import { definitions as jDefinitions } from './jackett';
import { definitions as cDefinitions } from './cardigann';

export const definitions = [
  ...jDefinitions,
  ...cDefinitions,
];
