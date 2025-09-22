const setToken = (token: string, data: any) => {
  try {
    const convertData = JSON.stringify(data);
    localStorage.setItem(token, convertData);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default setToken;
