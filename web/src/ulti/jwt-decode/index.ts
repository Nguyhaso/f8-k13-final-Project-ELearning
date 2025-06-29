
import {jwtDecode} from "jwt-decode";

interface JwtDecodeResponse {

  id: number,
  name: string,
  email: string,
  role: string,
  parent_name: null | string,
  parent_phone: null | string,
  school: null | string,
  avata: {
  id: null | string,
    url: null | string,
},
  exp: number,

}

export const decode=(accessToken:string) =>{

  const decodedInfor = jwtDecode<JwtDecodeResponse>(accessToken);
return decodedInfor;
}