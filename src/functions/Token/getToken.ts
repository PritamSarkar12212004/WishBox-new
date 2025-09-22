const getToken = async (token: any) => {
  const data: any = await localStorage.getItem(token);
  const returnData = await JSON.parse(data);
  return returnData;
};
export default getToken;
