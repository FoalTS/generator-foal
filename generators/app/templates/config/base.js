module.exports = {
  csrf: true,
  debug: false,
  port: toNumber(process.env.PORT || '3000'),
  staticUrl: 'public/',
  session: {
    resave: false,
    saveUninitialized: false,
  }
};

export function toNumber(str: string): number {
  const result = parseInt(str, 10);

  if (isNaN(result)) {
    throw new Error(`${str} cannot be converted to a number.`);
  }

  return result;
}
