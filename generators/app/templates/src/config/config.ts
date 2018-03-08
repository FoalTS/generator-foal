import { ObjectType } from '@foal/core';

export interface Config extends ObjectType {
  app: {
    name: string;
  };
  csrfProtection: boolean;
  db: {
    options: ObjectType;
    uri: string;
  };
  debugMode: boolean;
  port: number;
  public: string;
  session: {
    resave: boolean;
    saveUninitialized: boolean;
    secret: string;
    [name: string]: any;
  };
}

export function toNumber(str: string): number {
  const result = parseInt(str, 10);

  if (isNaN(result)) {
    throw new Error(`${str} cannot be converted to a number.`);
  }

  return result;
}
