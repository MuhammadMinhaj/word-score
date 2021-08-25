import { Box, withStyles } from '@material-ui/core';
import { Component } from 'react';
import ScoreResult from '../common/ScoreResult';
import Title from '../common/Title';
import Field from './Filed';
import MultipleScoreResult from './multipleScoreResult/MultipleScoreResult';

const styles = () => ({});

class WordScore extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Box p="1rem">
                <Title title="Word Score" />
                <Box height="1rem" />
                <Field />
                <Box height="1rem" />
                <Title title="Result" isSub />
                <ScoreResult />

                <Box height="1rem" />
                <MultipleScoreResult />
            </Box>
        );
    }
}

export default withStyles(styles)(WordScore);
