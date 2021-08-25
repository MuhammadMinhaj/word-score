import { Box, IconButton, Tooltip, Typography, withStyles } from '@material-ui/core';
import { Info as InfoIcon } from '@material-ui/icons';
import { Component } from 'react';
import ScoreResult from '../../common/ScoreResult';

const styles = () => ({
    bgColor: {
        backgroundImage: 'var(--bg-dark)',
    },
});

class MultipleScoreResultItem extends Component {
    render() {
        const { text } = this.props;

        return (
            <>
                <Box display="flex" color="#fff" borderRadius="1rem" overflow="hidden" p="0.5rem">
                    <Box
                        color="var(--primary)"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Tooltip title="Details">
                            <IconButton color="inherit">
                                <InfoIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box width="100%" display="flex" justifyContent="center" alignItems="center">
                        <Typography variant="h6">{text}</Typography>
                    </Box>

                    <Box width="100%">
                        <ScoreResult isNoneShadow />
                    </Box>
                </Box>

                <Box height="1px" width="100%" boxShadow={3} />
            </>
        );
    }
}

export default withStyles(styles)(MultipleScoreResultItem);
