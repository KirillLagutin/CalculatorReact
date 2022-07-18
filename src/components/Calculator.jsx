import { Box, Button } from '@chakra-ui/react'
import { useState } from 'react'
import ClickCalc from './ClickCalc/ClickCalc'
import InputCalc from './InputCalc'

function Calculator () {

    const [calcType, setCalcType] = useState('ClickCalc')

    let calculator;

    switch (calcType) {
        case 'ClickCalc': calculator = <ClickCalc />;
            break;
        case 'InputCalc': calculator = <InputCalc />;
            break;
        default:
            calculator = <ClickCalc />
    }

    function calcTypeChange() {
        calcType == 'ClickCalc' ? setCalcType('InputCalc') : setCalcType('ClickCalc')
    }

    return (
        <Box display="flex" flexDirection="column" w="450px" h="700" 
            borderRadius="15px" bg="blue.600" m="100px auto">
            
            <Button bg="blue.100" w="300px" m="auto" mb="40px" 
                onClick={calcTypeChange}>
                СМЕНИТЕ ТИП КАЛЬКУЛЯТОРА
            </Button>

            <Box m="10px">
                {calculator}
            </Box>

        </Box>
    )
}

export default Calculator;