import { Box, Divider, Typography, withStyles } from '@material-ui/core';
import { Component } from 'react';
import ScoreResult from '../../common/ScoreResult';

const styles = () => ({
    bgColor: {
        backgroundImage: 'var(--bg-dark)',
    },
});

class MultipleScoreResultItem extends Component {
    render() {
        const { classes, isRight } = this.props;

        return (
            <>
                <Box display="flex" color="#fff" borderRadius="1rem" overflow="hidden" p="1rem">
                    <Box width="100%" display="flex" justifyContent="center" alignItems="center">
                        <Typography variant="h6">My Word</Typography>
                    </Box>

                    <Box width="100%">
                        <ScoreResult />
                    </Box>
                </Box>

                <Divider />
            </>
        );
    }
}

export default withStyles(styles)(MultipleScoreResultItem);
