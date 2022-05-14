import {FunctionComponent} from "react";
import {StyleSheet, View} from "react-native";

interface IGuessedWordsSectionProps {
    guessedWords: string[];
    correctWord: string;
};

const GuessedWordsSection: FunctionComponent<IGuessedWordsSectionProps> = ({guessedWords, correctWord}) => {
    const getLetterIsInWord = (letter: string) => {
        return correctWord.includes(letter);
    };

    const getLetterIsInRightSpot = (letter: string, index: number) => {
        return correctWord.charAt(index) === letter;
    };

    const getWordDisplay = (word: string) => {
        let chars = [...word];
        return chars.map((char, index) => (
            <span style={getLetterIsInRightSpot(char, index) ? styles.letterInRightSpot : getLetterIsInWord(char) ? styles.letterInWord : ''}>{char}</span>
        ));
    };

    return (
        <View>
            {guessedWords.map((word) => {
            getWordDisplay(word);
        })}
        </View>
    );
};

const styles = StyleSheet.create({
    letterInWord: {
        color: 'gold'
    },
    letterInRightSpot: {
        color: 'green'
    }
});