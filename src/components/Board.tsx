import React, {useEffect, useState} from 'react';
import uuid from "react-native-uuid";
import {HStack, NativeBaseProvider, VStack, Text, Button} from "native-base";
import Confetti from 'react-confetti';
import Cell from "./Cell";
import {checkWinner} from "../utils";

const genId = () => uuid.v4().toString();

type Position = {
    value: string | null,
    id: string
}

type Row = Position[];

const positions: Row[] = [
    [{value: null, id: genId()}, {value: null, id: genId()}, {value: null, id: genId()}],
    [{value: null, id: genId()}, {value: null, id: genId()}, {value: null, id: genId()}],
    [{value: null, id: genId()}, {value: null, id: genId()}, {value: null, id: genId()}]
];

const initialState = Array(9).fill(null);
const componentIds = initialState.map(() => genId());

const Board = () => {
    const [boardPositions] = useState(positions);
    const [boardState, setBoardState] = useState(initialState);
    const [isPlayer1, setIsPlayer1] = useState(true);
    const [gameOver, setGameOver] = useState(false);

    const handleClick = (indexClicked: number) => {
        const updatedBoard = [...boardState];
        updatedBoard[indexClicked] = isPlayer1 ? 'X' : 'O';
        setBoardState(updatedBoard);

        if (!checkWinner(updatedBoard)) {
            setIsPlayer1(!isPlayer1);
        }
    }

    const resetBoard = () => {
        setBoardState(initialState);
        setIsPlayer1(true);
        setGameOver(false);
    }

    useEffect(() => {
        if (checkWinner(boardState)) {
            setGameOver(true);
        }
    }, [boardState]);

    const gridSpacer = '6px';

    return (<NativeBaseProvider>
        {gameOver && <Confetti width={237} height={237}/>}
        <HStack>
            <VStack space={gridSpacer}>
                <HStack space={gridSpacer}>
                    {boardPositions[0].map(
                        ({id, value}, idx) =>
                            <Cell key={componentIds[idx]}
                                  value={boardState[idx]}
                                  onPress={() => boardState[idx] === null && handleClick(idx)}/>)}
                </HStack>
                <HStack space={gridSpacer}>
                    {boardPositions[1].map(({id, value}, idx) => {
                            const offset = idx + 3;
                            return (<Cell key={componentIds[idx]}
                                          value={boardState[offset]}
                                          onPress={() => boardState[offset] === null && handleClick(offset)}/>)
                        }
                    )}
                </HStack>
                <HStack space={gridSpacer}>
                    {boardPositions[2].map(({id, value}, idx) => {
                        const offset = idx + 6;
                        return (<Cell key={componentIds[idx]}
                                      value={boardState[offset]}
                                      onPress={() => boardState[offset] === null && handleClick(offset)}/>)
                    })}
                </HStack>
                <HStack justifyContent={'center'}>
                    <Text>
                        {gameOver ? `We have a winner, well done Player ${isPlayer1 ? '1' : '2'}` : `Your turn: Player ${isPlayer1 ? '1' : '2'}`}
                    </Text>
                </HStack>
                <HStack justifyContent={'center'}>
                    <Button onPress={()=>{resetBoard()}} variant={'outline'}>
                        <Text fontWeight={'bold'}>Reset</Text>
                    </Button>
                </HStack>
            </VStack>
        </HStack>
</NativeBaseProvider>)
                    }

export default Board;