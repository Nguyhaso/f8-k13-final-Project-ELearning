import {Box, SimpleGrid} from '@chakra-ui/react';
import {EHeader, ESearch, EClassCard, LoadingScreen, TableContext} from '../../components'
import {useNavigate} from 'react-router';
import {type ClassInfor, getPost} from "../../ulti";
import {useContext, useEffect, useState} from "react";




export default function () {
  const className: string = "Ahihi Class"

  const injector: any = useContext(TableContext)
  if (!injector) return <LoadingScreen />;
  // const user = {
  //   name: "Johnson",
  //   role: "Teacher",
  //   avata:{
  //   url: "https://avatars2.githubusercontent.com/u/55?v=4",
  // }}
  const {accessToken, user} = injector
  console.log(user)

  const navigate = useNavigate();
  const [classList, setClassList] = useState<any>([]);

  useEffect(() => {
    const dataClasses = async () => {
      //api get data
      try {
        const res = await getPost('/master/class', accessToken)
        setClassList(res.data);
      } catch (e: any) {
       console.log(e)
      }
    }
    dataClasses();

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
        {classList.map((item: ClassInfor, index: number) => (
          <EClassCard className={item.name}
                      classNumberOfMember={item.users.length}
                      classCode={item.code}
                      key={index}
                      navigateToClass={() => navigate(`/class/${item.id}`)}
          />
        ))}

      </SimpleGrid>

    </Box>
  )
}