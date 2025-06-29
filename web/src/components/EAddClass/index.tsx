import {Button, Field, HStack, Input, VStack} from "@chakra-ui/react"
import {useState} from "react";
import { useNavigate } from "react-router";
import {decode, getNewToken, postBearerMethod} from "../../ulti";

interface Payload {
  className: string
  securityCode: string
}

interface PayloadError {
  securityCode?: string,
  className?: string
}

export default function () {


  const [payload, setPayload] = useState<Payload>({
    className: '',
    securityCode: '',
  })

  const [PayloadError, setPayloadError] = useState<PayloadError>({})

  const onCreate =async () => {
    const newError: PayloadError = {}
    if (!payload.className.length) newError.className = 'Class name cannot be empty'
    if (payload.securityCode.length < 6) newError.securityCode = 'Security code at least 6 characters'

    setPayloadError(newError)

    if (Object.keys(newError).length === 0) {

      //api part below
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (!accessToken || !refreshToken) {
        navigate('/login');
        return null;
      }

      const {id} = decode(accessToken);
      console.log(id)
      const payload1={name: payload.className,code:payload.securityCode, users:[id]};
      console.log(payload1);
      //api post data
      try {
         await postBearerMethod('/master/class',payload1, accessToken)
        navigate('/classes');
      } catch (e: any) {
        if (e.response?.data?.detail === 'token expired') {
          console.log('error')
          const newTokenData = await getNewToken(refreshToken);
          const newAccessToken = newTokenData.data.access;
          localStorage.setItem('accessToken', newAccessToken);
          const res = await postBearerMethod('/master/class',payload1, newAccessToken);
          return res?.data;
        } else {
          navigate('/login');
        }
      }
    }
  }

  const navigate = useNavigate()

  return (
    <VStack p={'24px'} bg={'white'} rounded={'xl'} w={'500px'}>
      <Field.Root required invalid={!!PayloadError.className}>
        <Field.Label>
          Class name <Field.RequiredIndicator/>
        </Field.Label>
        <Input placeholder="Enter Class name"
               variant="outline"
               colorPalette={'blue'}
               _invalid={{ borderColor: "red.500", boxShadow: "0 0 0 1px red" }}
               borderColor={'blue.500'}
               onChange={(e) => setPayload({...payload, className: e.target.value})}
        />
        <Field.ErrorText>{PayloadError.className}</Field.ErrorText>
      </Field.Root>
      <Field.Root required invalid={!!PayloadError.securityCode}>
        <Field.Label>
          Security Code <Field.RequiredIndicator/>
        </Field.Label>
        <Input placeholder="Enter Security Code"
               variant="outline"
               colorPalette={'blue'}
               _invalid={{ borderColor: "red.500", boxShadow: "0 0 0 1px red" }}
               borderColor={'blue.500'}
               onChange={(e) => setPayload({...payload, securityCode: e.target.value})}

        />
        <Field.ErrorText>{PayloadError.securityCode}</Field.ErrorText>
      </Field.Root>
      <HStack>
        <Button
          borderColor="blue.400"
          color="blue.500"
          bg="white"
          _hover={{bg: "whitesmoke"}}
          size="sm"
          padding="xl"
          onClick={()=>navigate('/classes')}
        >Cancel</Button>
        <Button
          borderColor="blue.400"
          bg="blue.500"
          color="white"
          _hover={{bg: "blue.700"}}
          size="sm"
          padding="xl"
          onClick={onCreate}
        >Create</Button>
      </HStack>
    </VStack>
  )
}

