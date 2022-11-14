import { Box, Text, Button, Input } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

function InputCalc () {

  const [counts, setCounts] = useState('')
  const [result, setResult] = useState('')

  function updateCount (e) {
    const expressions = /[0-9]/
    const lastNumber = e.target.value[e.target.value.length - 2]

    if (!expressions.test(lastNumber) && !expressions.test(e.nativeEvent.data) && e.nativeEvent.data != null) {
      setResult(eval(e.target.value))
    }
    setCounts(e.target.value)
  }

  useEffect(() => { 
      document.querySelector("input").focus() 
  })

  return (
    <Box display="flex" flexDirection="column" w="400px" h="525px" m="auto">

      <Text textAlign="center" fontSize="1.5em" fontWeight="bold" color="white" mb="20px">
          ВЫВОД РЕЗУЛЬТАТА
      </Text>
      <Text textAlign="center" h="80px" lineHeight="80px" fontSize="2em" fontWeight="bold"
          textColor="tomato" borderRadius="10px" bg="gray.300" mb="50px">
          {result}
      </Text>

      <Text textAlign="center" fontSize="1.5em" fontWeight="bold" color="white" mb="20px">
          ВВОД ДАННЫХ
      </Text>
      <Input textAlign="center" h="80px" fontSize="2em" mb="70px"
          borderRadius="10px" bg="gray.300" color="blue.600"
          border="none" value={counts} type="text" 
          onChange={ (e) => {updateCount(e)} }/> 

      <Button textAlign="center" w="100%" h="80px" fontSize="2em"
          borderRadius="10px" bg="tomato" color="white"
          onClick={()=>{
              setCounts('')
          }}>
          ОЧИСТИТЬ
      </Button>
    </Box>
  )
}

export default InputCalc;