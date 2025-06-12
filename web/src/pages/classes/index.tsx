import {Box, Wrap} from '@chakra-ui/react';
import {EHeader, ESearch, EClass} from '../../components'

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

  const screenWidth = document.documentElement.clientWidth;
  console.log(screenWidth)
  const classWidth= (screenWidth - 24 * 4 -1 ) / 3
  return (
    <Box bg={'gray.50'}>
    <EHeader pageName={className} user={user}></EHeader>
    <ESearch searchName={'Class List'} searchButton={'Add Class'}></ESearch>
      <Wrap gap={'24px'} p={'24px'}>
        {classList.map((item) => (
          <EClass className={item.className}
                  classNumberOfMember={item.classNumberOfMember}
                  classCode={item.classCode}
                  classWidth={classWidth}
          />

        ))}

      </Wrap>

    </Box>
  )
}