import {Box, SimpleGrid} from '@chakra-ui/react';
import {EHeader, ESearch, EClassCard} from '../../components'
import {useNavigate} from 'react-router';
import {getNewToken, getPost} from "../../ulti";
import {useEffect, useState} from "react";

export default function () {
  const className: string = "Ahihi Class"

  const user = {
    name: "Johnson",
    role: "Teacher",
    avatar: "https://avatars2.githubusercontent.com/u/55?v=4",
  }

  // const classList = [
  //   {className: 'Class 1', classNumberOfMember: 10, classCode: '1121d2'},
  //   {className: 'Class 2', classNumberOfMember: 11, classCode: '2d2123d'},
  //   {className: 'Class 3', classNumberOfMember: 23, classCode: '7td6ds'},
  //   {className: 'Class 4', classNumberOfMember: 5, classCode: '876zs4'},
  //   {className: 'Class 5', classNumberOfMember: 45, classCode: 'g6f3ds'},
  // ]
  const navigate = useNavigate();
  const [classList, setClassList] = useState<any>([]);

  useEffect(() => {
    const dataClass = async () => {
      //check token if available
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (!accessToken || !refreshToken) {
        navigate('/login');
        return null;
      }

      //api get data
      try {
        const res = await getPost('/master/class', accessToken)
        setClassList(res.data);
      } catch (e: any) {
        if (e.response?.data?.detail === 'token expired') {
          const newTokenData = await getNewToken(refreshToken);
          localStorage.setItem('accessToken', newTokenData.data.access);
          const res = await getPost('/master/class', newTokenData.data.access);
          return res.data;
        } else {
          navigate('/login');
        }
      }
    }
    dataClass();

  }, []);

  return (
    <Box bg={'gray.50'}>
      <EHeader pageName={className} user={user}></EHeader>
      <ESearch searchName={'Class List'} searchButton={'Add Class'}></ESearch>
      <SimpleGrid
        columns={{base: 1, md: 2, lg: 3}}
        gap={'6'}
        // minChildWidth={'sm'}
        p={'6'}
      >
        {classList.map((item, index) => (
          <EClassCard className={item.name}
                      classNumberOfMember={item.users.length}
                      classCode={item.code}
                      key={index}
                      navigateToClass={() => navigate(`/class/${item.classCode}`)}
          />
        ))}

      </SimpleGrid>

    </Box>
  )
}