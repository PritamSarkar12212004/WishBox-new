const deleteToken = async (token: any) => {
  const data: any = await localStorage.removeItem(token);
  await JSON.parse(data);
  return true;
};
export default deleteToken;
