import api from "../../../utils/api/api";

const useOtpApi = () => {
  const otpApi = async ({
    phoneNumber,
    setIsLoading,
    setShowSuccess,
    setShowOtpScreen,
    setBackotp,
  }: any) => {
    api
      .post("/otp/login", {
        payload: {
          phoneNumber: phoneNumber,
        },
      })
      .then((response) => {
        setBackotp({
          otp: response.data.data.data.data.otp,
          status: response.data.status,
          type: response.data.data.type,
        });
        setIsLoading(false);
        setShowSuccess(true);
        setShowOtpScreen(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setShowSuccess(false);
      });
  };
  return { otpApi };
};

export default useOtpApi;
