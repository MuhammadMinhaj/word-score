import { Box, withStyles } from '@material-ui/core';
import { Component } from 'react';
import Title from '../../common/Title';
import MultipleScoreItem from './MultipleScoreItem';

const styles = () => ({
    bgColor: {
        backgroundImage: 'var(--bg-dark)',
    },
});

class MultipleScoreResult extends Component {
    render() {
        const { classes, isRight } = this.props;
        return (
            <Box boxShadow={3}>
                <Title title="Sequence of results" isSub />

                <MultipleScoreItem />
                <MultipleScoreItem />
                <MultipleScoreItem />
            </Box>
        );
    }
}

export default withStyles(styles)(MultipleScoreResult);
