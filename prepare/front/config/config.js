/* eslint-disable import/prefer-default-export */

export const backUrl =
  process.env.NODE_ENV === 'production'
    ? 'http://api.khlim.site'
    : 'http://localhost:3065';
