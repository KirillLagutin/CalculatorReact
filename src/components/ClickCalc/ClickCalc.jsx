import { Box, Text, Button } from '@chakra-ui/react'
import { useState } from 'react'
import Numbers from './Numbers'
import CountButton from './CountButton'
import DotButton from './DotButton'

function ClickCalc() {

  const [counts, setCounts] = useState('0')
  const [result, setResult] = useState('')

  function applyExpression (countedNumber) {
    setCounts(countedNumber)
    setResult(eval(counts))
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">

      <Box display="flex" gap="5px" flexDirection="column" justifyContent="center" alignItems="center" >

        <Box display="flex" w="100%" h="80px" px="20px" bg="gray.300" 
              justifyContent="space-between" alignItems="center" borderRadius="15px" fontSize="2em">
          <Text>
              {counts}
          </Text>
          <Text textColor="tomato" fontWeight="bold" ml="20px">
              {result}
          </Text>
        </Box>

        <Box display="flex">

          <Numbers data={counts} onClick={setCounts} />

          <DotButton data={counts} expression={'.'} onClick={applyExpression} />

          <Button display="flex" w="100px" h="100px" bg="gray.400" fontSize="2em" borderRadius="15px"
            mt="336px" ml="-139px" mr="10px"
            onClick={ ()=>{setCounts('')} }>
            C 
          </Button>
          
          <Box display="flex" flexDirection="column">
            <CountButton data={counts} expression={'+'} onClick={applyExpression} />
            <CountButton data={counts} expression={'-'} onClick={applyExpression} />
            <CountButton data={counts} expression={'*'} onClick={applyExpression} />
            <CountButton data={counts} expression={'/'} onClick={applyExpression} />
            <Button bg="tomato" w="80px" h="80px" margin="4px" 
                fontSize="2em" fontWeight="bold" borderRadius="15px"
                onClick={ () => {
                    setResult(eval(counts))
                    setCounts('0')
                    } }>
                = 
            </Button>
          </Box>
        </Box>
      </Box>            
    </Box> 
  )
}

export default ClickCalc;