import { Box } from '@material-ui/core';
import { Component } from 'react';
import methods from '../../lib';
import ScoreResult from '../common/ScoreResult';
import Title from '../common/Title';
import Field from './Filed';
import MultipleScoreResult from './multipleScoreResult/MultipleScoreResult';

const { getPercentageOnWord, getArrayParseByCommas, getArrayParseBySpaces } = methods;

class WordScore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            results: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    handleClick() {
        const { value } = this.state;
        console.log(getPercentageOnWord(value));
        // const nameList = getArrayParseByCommas(value);
        // if (nameList.length !== 0) {
        //     nameList.forEach((name) => {
        //         const wordList = getArrayParseBySpaces(name);

        //         if (wordList.length !== 0) {
        //             wordList.forEach((word) => {});
        //         }
        //     });
        // }
    }

    render() {
        const { value } = this.state;
        return (
            <Box p="1rem">
                <Title title="Word Score" />
                <Box height="1rem" />
                <Field
                    value={value}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                />
                <Box height="1rem" />
                <Title title="Result" isSub />
                <ScoreResult />

                <Box height="1rem" />
                <MultipleScoreResult />
            </Box>
        );
    }
}

export default WordScore;
