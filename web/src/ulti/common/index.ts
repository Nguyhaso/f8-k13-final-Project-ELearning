import {useNavigate} from "react-router";
import {decode} from "../jwt-decode";
import {getNewToken} from "../api";

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");
export const isTokenValid = async () => {
  const navigate = useNavigate();

  if (!accessToken || !refreshToken) {
    navigate('/login');
    return null;
  }

  const decoded: any = decode(accessToken);
  const now = Date.now() / 1000;
  if (decoded.exp < now) {
    const newTokenData = await getNewToken(refreshToken);
    localStorage.setItem('accessToken', newTokenData.data.access);
    console.warn("Access token expired");
    return;
  }
}