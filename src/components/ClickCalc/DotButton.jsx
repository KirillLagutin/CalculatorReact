import { Button } from '@chakra-ui/react'

function DotButton (props) {

    const expressions = /\.| /;
    const lastNumber = props.data[props.data.length - 1]
    
    function checkExpressionType () {

        if (!expressions.test(lastNumber)) {
            props.onClick(props.data + props.expression)
        }
    }

    return (
        <Button display="flex" w="100px" h="100px" bg="gray.400" 
            fontSize="2em" fontWeight="bold" borderRadius="15px"
            mt="336px" ml="-214px" mr="150px" 
            onClick = { () => {checkExpressionType()} }>
            {props.expression}
        </Button>
    )
}

export default DotButton;