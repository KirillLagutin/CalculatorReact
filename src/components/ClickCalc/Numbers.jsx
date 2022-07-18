import { Box, Button } from '@chakra-ui/react'

function Numbers (props) {

  const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'].map(
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

export default Numbers;