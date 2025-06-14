import {Box, SimpleGrid} from '@chakra-ui/react';
import {EHeader, ESearch, EClassCard} from '../../components'
import { useNavigate } from 'react-router';

export default function (){
  const className: string = "Ahihi Class"

  const user ={
    name: "Johnson",
    role: "Teacher",
    avatar: "https://avatars2.githubusercontent.com/u/55?v=4",
  }

  const classList= [
    {className: 'Class 1', classNumberOfMember: 10, classCode: '1121d2'},
    {className: 'Class 2', classNumberOfMember: 11, classCode: '2d2123d'},
    {className: 'Class 3', classNumberOfMember: 23, classCode: '7td6ds'},
    {className: 'Class 4', classNumberOfMember: 5, classCode: '876zs4'},
    {className: 'Class 5', classNumberOfMember: 45, classCode: 'g6f3ds'},
  ]
 const navigate = useNavigate();
  return (
    <Box bg={'gray.50'}>
    <EHeader pageName={className} user={user}></EHeader>
    <ESearch searchName={'Class List'} searchButton={'Add Class'}></ESearch>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={'6'}
        // minChildWidth={'sm'}
        p={'6'}
      >
        {classList.map((item, index) => (
          <EClassCard className={item.className}
                  classNumberOfMember={item.classNumberOfMember}
                  classCode={item.classCode}
                  key={index}
                  navigateToClass={()=>navigate(`/class/${item.classCode}`)}
          />
        ))}

      </SimpleGrid>

    </Box>
  )
}