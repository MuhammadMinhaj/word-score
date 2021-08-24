import { Box, withStyles } from '@material-ui/core';
import { Component } from 'react';
import ScoreResult from '../common/ScoreResult';
import Title from '../common/Title';
import Fields from './Fields';

const styles = () => ({});

class LoveScore extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Box p="1rem">
                <Title title="Love Score" />
                <Box height="1rem" />
                <Fields />
                <Box height="1rem" />
                <Title title="Result" isSub />

                <ScoreResult isRight />
                <Box height="1rem" />
                <Title title="Calculation Method" isSub />
            </Box>
        );
    }
}

export default withStyles(styles)(LoveScore);
