const setToken = async (token: any, data: any) => {
  const convertData: any = await JSON.stringify(data);
  await localStorage
    .setItem0(token, convertData)
    .then((result: any) => {
      return true;
    })
    .catch((err: any) => {
      console.log(err);
      return false;
    });
};
export default setToken;
