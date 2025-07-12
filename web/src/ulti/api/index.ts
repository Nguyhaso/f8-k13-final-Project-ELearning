import axios from 'axios'
import {toast} from 'react-toastify';


const api = axios.create({
  baseURL: 'https://b1u9y178ok.execute-api.ap-southeast-1.amazonaws.com/'
})


const successfulMsg = () => toast.success("Save successfully!")
const failedMsg = () => toast.error("Save failed!")

export const getMethod = async (endpoint: string) => {
  try {
    const {data} = await api.get(endpoint)
    return data
  } catch (e) {
    console.log(e)
    // const notify = () => toast("Wow so easy!");
  }

  return null
}

export const postMethod = async (endpoint: string, payload: any) => {
  try {
    const {data} = await api.post(endpoint, payload)
    successfulMsg()
    return data
  } catch (e) {
    failedMsg()
    throw e

  }

}

export const putMethod = async (endpoint: string, payload: any) => {
  try {
    const {data} = await api.put(endpoint, payload)
    successfulMsg()
    return data
  } catch (e) {
    failedMsg()
  }

  return null
}


export const deleteMethod = async (endpoint: string) => {
  try {
    const {data} = await api.get(endpoint)
    successfulMsg()
    return data
  } catch (e) {
    failedMsg()
  }

  return null
}

export const getPost = async (endpoint: string, accessToken: string) => {

  const res = await api.get(`${endpoint}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  });
  return res;
}
export const getNewToken = async (refresh: string) => {
  const res = await api.post("/login/get_new_token/", {refresh});
  return res;
}

export const postBearerMethod = async (endpoint: string, payload: any, accessToken: string) => {
  try {
    const res = await api.post(
      endpoint,
      payload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    successfulMsg()
    return res
  } catch (e) {
    failedMsg()
    throw e
  }

}


export const logOut = (navigate: (path: string) => void) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  navigate('/login');
};