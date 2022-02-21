export const isValidURL = (string: string) => {
  const res = string.match(
    // eslint-disable-next-line no-useless-escape
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
};

export const checkInputs = (catName: string, title: string, link: string) => {
  return !isValidURL(link) || title.length <= 0 || catName.length <= 0;
};
