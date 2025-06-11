import {Eheader} from '../../components'

export default function (){
  const className: string = "Ahihi Class"

  const user ={
    name: "Johnson",
    role: "Teacher",
    avatar: "https://avatars2.githubusercontent.com/u/55?v=4",
  }
  return (
    <Eheader pageName={className} user={user}>

    </Eheader>
  )
}