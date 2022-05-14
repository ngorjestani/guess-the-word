import {FunctionComponent, useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {WordList} from "./WordList";

interface IGuessWordPageProps {

};

export const GuessWordPage: FunctionComponent<IGuessWordPageProps> = () => {
    const [correctWord, setCorrectWord] = useState('');
    const [wordGuesses, setWordGuesses] = useState<string[]>([]);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [currentWordGuess, setCurrentWordGuess] = useState('');
    const [showResultsSection, setShowResultsSection] = useState(false);
    const [gameIsWon, setGameIsWon] = useState(false);
    const [guessCount, setGuessCount] = useState(0);

    const setUpNewGame = () => {
        setShowResultsSection(false);
        setWordGuesses([]);
        setGuessedLetters([]);
        setCurrentWordGuess('');
        setGameIsWon(false);
        setGuessCount(0);
        setCorrectWord(WordList.getRandomWord());
    }

    const onWordGuessed = () => {
        if (currentWordGuess !== correctWord) {

        } else {

        }
    };

    return (
        <View>
            <Text style={styles.titleText}>Guess the Word</Text>
            <TextInput
                value={currentWordGuess}
                onChangeText={x => setCurrentWordGuess(x)}
            />
            <Button title={'Guess'} disabled={currentWordGuess.length !== 5} />
        </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
});