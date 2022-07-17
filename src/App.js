import './App.css'
import { Box, Text, Button, Input } from '@chakra-ui/react'
import { useState } from 'react'

//------------------------------Numbers--------------------------------------
function Numbers (props) {

  const nums = Array.from(Array(10).keys()).map(
    number => {
      return <Button onClick={ (e) => {
          if (props.data != '0') {
            props.onClick(props.data + e.target.innerHTML)
          }
          else {
            props.onClick(e.target.innerHTML)
          }
        }
      }
       key={number} w="100px" h="100px" margin="5px" fontSize="2em" borderRadius="15px">
        {number}
      </Button>
    }
  )
  
  return (
    <Box display="flex" flexWrap="wrap" w="330px"> {nums} </Box>
  )
}

//----------------------------CountButton------------------------------------
function CountButton (props) {

  const expressions = /\+|\-|\/|\* /
  const lastNumber = props.data[props.data.length - 1]

  function checkExpressionType () {
    if (!expressions.test(lastNumber)) {
      return props.onClick(props.data + props.expression)
    }
  }

  return (
    <Button w="80px" h="80px" margin="4px" bg="blue.100" 
      fontSize="2em" fontWeight="bold" borderRadius="15px"
      onClick = { () => {checkExpressionType()} }>
      {props.expression}
    </Button>
  )
}

//-----------------------------DotButton-------------------------------------
function DotButton (props) {

  const expressions = /\. /;
  const lastNumber = props.data[props.data.length - 1]

  function checkExpressionType () {
    if (!expressions.test(lastNumber)) {
      return props.onClick(props.data + props.expression)
    }
  }

  return (
    <Button display="flex" w="100px" h="100px" bg="gray.300" 
      fontSize="2em" fontWeight="bold" borderRadius="15px"
      mt="336px" ml="-214px" mr="150px" 
      onClick = { () => {checkExpressionType()} }>
      {props.expression}
    </Button>
  )
}

//-----------------------------InputCalc-------------------------------------
function InputCalc (props) {

  const [counts, setCounts] = useState('')
  const [result, setResult] = useState('')

  function updateCount (e) {
    const expressions = /[0-9]/
    const lastNumber = e.target.value[e.target.value.length - 2]

    if (!expressions.test(lastNumber) && !expressions.test(e.nativeEvent.data) && e.nativeEvent.data != null) return
    if (expressions.test(e.nativeEvent.data)) {
      setResult(eval(e.target.value))
    }
    setCounts(e.target.value)
  }

  return (
    <Box w="100%">

      <Box display="flex" justifyContent="space-betwwen" alignItems="center" 
        border="2px" borderRadius="15px" borderColor="gray.50">

        <Input border="transparent" value={counts} type="text" onChange={ (e) => {updateCount(e)} }/>
        <Text textColor="tomato" px="10px"> {result} </Text> 

      </Box>
    </Box>
  );
 }

//=============================== App =======================================
function App() {

  const [counts, setCounts] = useState('0')
  const [result, setResult] = useState('')

  function applyExpression (countedNumber) {
    setCounts(countedNumber)
    setResult(eval(counts))
  }

  function clearDisplay() {
    setCounts('0')
    setResult('')
  }

  return (
    <div className="App">

      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" h="100vh">
        <Box display="flex" gap="5px" flexDirection="column" justifyContent="center" alignItems="center" >

          <InputCalc/>

          <Box display="flex" w="100%" h="80px" px="20px" bg="gray.300" justifyContent="space-between" alignItems="center" borderRadius="15px" fontSize="2em">
            <Text>
              {counts}
            </Text>
            <Text textColor="tomato" fontWeight="bold" ml="20px">
              {result}
            </Text>
          </Box>

          <Box display="flex">

              <Numbers data={counts} onClick={setCounts}/>

              <DotButton data={counts} expression={'.'} onClick={applyExpression} />

              <Button display="flex" w="100px" h="100px" bg="gray.300" fontSize="2em" borderRadius="15px"
                mt="336px" ml="-139px" mr="10px"
                onClick={clearDisplay}> C </Button>
              
              <Box display="flex" flexDirection="column">
                <CountButton data={counts} expression={'+'} onClick={applyExpression} />
                <CountButton data={counts} expression={'-'} onClick={applyExpression} />
                <CountButton data={counts} expression={'*'} onClick={applyExpression} />
                <CountButton data={counts} expression={'/'} onClick={applyExpression} />
                <Button bg="tomato" w="80px" h="80px" margin="4px" 
                  fontSize="2em" fontWeight="bold" borderRadius="15px"
                  onClick={ () => {setResult(eval(counts))} }> = </Button>
            </Box>
          </Box>

        </Box>      
      </Box> 

    </div>
  )
}

export default App;