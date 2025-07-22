import {
  Checkbox,
  CheckboxGroup,
  createListCollection, Field,
  Fieldset,
  Flex,
  HStack, Input,
  Portal,
  RadioGroup,
  Select,
  NativeSelect, Text, Heading, Stack
} from "@chakra-ui/react";

export default function ({type,index,onChange, onAnswer}:any)  {


  const answerOptions = ["A", "B", "C", "D"];
  return (
    <>


      <Stack
      direction={{base:'column',md:'row'}}
      align={'center'}>
        <Text p={'4'}>Question{index +1}: </Text>
      <NativeSelect.Root colorPalette={'blue'}>
        <NativeSelect.Field
          placeholder="Select Question Type"
          value={type ?? 'singleSelection1'}
          onChange={onChange}
          >
          <option value="singleSelection">Single Selection</option>
          <option value="multiSelection">Multi Selection</option>
          <option value="freeInput">Free Input</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator/>
      </NativeSelect.Root>

      {type === "singleSelection" && (
        <RadioGroup.Root
          colorPalette ='blue'
          onChange={onAnswer}>
          <HStack >
            {answerOptions.map((opt, idx) => (
              <RadioGroup.Item key={idx} value={opt}>
                <RadioGroup.ItemHiddenInput/>
                <RadioGroup.ItemIndicator/>
                <RadioGroup.ItemText>{opt}</RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
          </HStack>
        </RadioGroup.Root>
      )}

      {type === "multiSelection" && (
        <Fieldset.Root>
          <CheckboxGroup>
            <Fieldset.Content>
              <HStack>
              {answerOptions.map((opt, idx) => (
                  <Checkbox.Root key={idx} value={opt} colorPalette={'blue'}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>{opt}</Checkbox.Label>
                  </Checkbox.Root>
                ))}
              </HStack>
            </Fieldset.Content>
          </CheckboxGroup>
        </Fieldset.Root>
      )}

      {type === "freeInput" && (
        <Field.Root>
          <Input placeholder="Enter Answer"
                 variant="outline"
                 colorPalette={'blue'}
                 borderColor={'blue.500'}
          />
        </Field.Root>
      )}
      </Stack>
    </>
  )
}