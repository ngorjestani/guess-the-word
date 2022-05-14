import {FunctionComponent} from "react";
import {Button, Text, View} from "react-native";

interface IResultSectionProps {
    gameIsWon: boolean,
    correctWord?: string
};

export const ResultSection: FunctionComponent<IResultSectionProps> = ({gameIsWon, correctWord}) => {
    const getMessage = () => {
        return gameIsWon
            ? <Text>Congratulations! You guessed {correctWord} correctly!</Text>
            : <Text>You lost.</Text>
    };

    return (
        <View>
            <View>{getMessage()}</View>
            <Button title="New Game" />
        </View>
    );
};