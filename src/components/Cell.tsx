import * as React from 'react';
import {Box, Text, Button} from "native-base";

interface CellProps {
    value: string | number | null,
    onPress: () => void;
}

const Cell = ({value, onPress}: CellProps) => {

    const bgColor = value === 'X' ? 'primary.400' : value === 'O' ? 'secondary.400' : undefined;

    return (
        <Box>
            <Button size={"lg"} bgColor={bgColor} rounded={'xs'} onPress={onPress} variant={'outline'} width={75} height={75}>
                <Text textTransform={'uppercase'} fontSize={'lg'} fontWeight={'extrabold'} alignSelf={'center'}>
                    {value}
                </Text>
            </Button>
        </Box>
    )
}

export default Cell;