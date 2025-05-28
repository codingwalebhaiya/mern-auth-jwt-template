
// export const oneYearFromNow = () => {
//   new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
// };



export const oneYearFromNow = (): Date => {
  return new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
};


export const thirtyDaysFromNow = (): Date => {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  return date;
};


// export const thirtyDaysFromNow = () => {
//   new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
// };

// export const fifteenMinutesFromNow = () => {
//   new Date(Date.now() + 15 * 60 * 1000);

// };

export const fifteenMinutesFromNow = (): Date => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 15);
  return date;
};

export const ONE_DAY_MS = 24 * 60 * 60 * 1000;


export const oneHourFromNow = (): Date => {
  return new Date(Date.now() + 60 * 60 * 1000);
};

export const fiveMinutesAgo = (): Date => {
  return new Date(Date.now() - 5 * 60 * 1000);
};