import { Button } from '@chakra-ui/react'

function CountButton (props) {

  const expressions = /\+|\-|\/|\*| /
  const lastNumber = props.data[props.data.length - 1]

  function checkExpressionType () {
    if (!expressions.test(lastNumber)) {
      props.onClick(props.data + props.expression)
    }
  }

  return (
    <Button w="80px" h="80px" margin="4px" bg="blue.100" 
      fontSize="2em" fontWeight="bold" borderRadius="15px"
      onClick = {()=>{
        checkExpressionType()
      }}>
      {props.expression}
    </Button>
  )
}

export default CountButton;