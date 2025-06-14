import {Avatar, Text, HStack, Stack} from "@chakra-ui/react";
import { BsListTask} from "react-icons/bs";


interface activityProps {
  avatar: string;
  uploadedTest: string;
  time: string;
}

interface activitiesProps {
  activities: activityProps[];
}

export default function ERecentActivities({activities}: activitiesProps) {
  return (
    <Stack bg={'white'} p={'12px'} rounded={'2xl'}>
      <HStack>
        <BsListTask/> Recent Activities
      </HStack>
      <Stack gap="8">
        {activities.map((activity, index) => (
          <HStack key={index} gap="4">
            <Avatar.Root>
              {/*<Avatar.Fallback name={user.name}/>*/}
              <Avatar.Image src={activity.avatar}/>
            </Avatar.Root>
            <Stack gap="0">
              <HStack fontWeight="medium">
                <Text>Test</Text>
                <Text color={'blue.500'}>{activity.uploadedTest}</Text>
                <Text>has just uploaded</Text>
              </HStack>
              <Text color="fg.muted" textStyle="sm">
                {activity.time}
              </Text>
            </Stack>
          </HStack>
        ))}
      </Stack>
    </Stack>
  )
}