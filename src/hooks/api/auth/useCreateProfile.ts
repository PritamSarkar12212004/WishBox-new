import TokenCon from "../../../constants/tokens/TokenCon";
import setToken from "../../../functions/Token/setToken";
import api from "../../../utils/api/api";
import { userContext } from "../../../utils/context/ContextProvider";

const useCreateProfile = () => {
  const { authReloader, setauthReloader } = userContext();
  const profileCreate = async ({
    phone,
    email,
    fullName,
    product_updates,
    promotions,
    newsletter,
    setIsProfileLoading,
  }: {
    phone: any;
    email: any;
    fullName: any;
    product_updates: any;
    promotions: any;
    newsletter: any;
    setIsProfileLoading: any;
  }) => {
    api
      .post("/user/create-profile", {
        payload: {
          phone: phone,
          email: email,
          fullName: fullName,
          product_updates: product_updates,
          promotions: promotions,
          newsletter: newsletter,
        },
      })
      .then(async (res) => {
        await setToken(TokenCon.Auth.isLogin, true);
        await setToken(TokenCon.Auth.userData, res?.data);
        setIsProfileLoading(false);
        setauthReloader(!authReloader);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    profileCreate,
  };
};

export default useCreateProfile;
