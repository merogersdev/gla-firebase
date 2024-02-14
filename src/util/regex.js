export const emailRegex = /([\d\w._-]+@[\d\w._-]+\.[\d\w_-]+)/gi;

export const nameRegex = /^[a-zA-Z\ ]{1,25}$/gi;

export const passwordRegex = /^.{1,25}$/gi;

export const testEmail = (email) => {
  const regex = /([\d\w._-]+@[\d\w._-]+\.[\d\w_-]+)/gi;
  return regex.test(email);
};

export const testName = (name) => {
  const regex = /^[a-zA-Z\ ]{1,25}$/gi;
  return regex.test(name);
};

export const testPassword = (password) => {
  const regex = /^.{1,25}$/gi;
  return regex.test(password);
};
