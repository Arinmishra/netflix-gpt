export const checkValidData = (email, password) => {
  const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  if (isEmailValid === false) return "❌ Email Id is not valid.";
  if (isPasswordValid === false) return "❌ Password is not valid.";

  return null;
};
