import React from 'react';
import './App.css';
import {Box, Center, NativeBaseProvider, Text} from "native-base";
import Board from "./components/Board";

function App() {
  return (
    <NativeBaseProvider>
      <Center>
          <Box padding={'0.5'}>
              <Text fontSize={"lg"} fontWeight={'extrabold'} paddingBottom={1}>Let's play Tic Tac Toe</Text>
          </Box>
          <Board />
      </Center>
    </NativeBaseProvider>
  );
}

export default App;
