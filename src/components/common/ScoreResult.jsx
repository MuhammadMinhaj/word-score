import { Box, withStyles } from '@material-ui/core';
import { Component } from 'react';

const styles = () => ({
    bgColor: {
        backgroundImage: 'var(--bg-dark)',
    },
});

class ScoreResult extends Component {
    render() {
        const { classes, isRight } = this.props;
        return (
            <Box
                display="flex"
                color="#fff"
                borderRadius="1rem"
                mt="1rem"
                boxShadow={3}
                overflow="hidden"
            >
                <Box
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                    className={!isRight ? classes.bgColor : ''}
                >
                    <Box component="h1">A+</Box>
                </Box>
                <Box width="2px" minHeight="100%" bgcolor="#e91e63" />
                <Box
                    width="100%"
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                    className={isRight ? classes.bgColor : ''}
                >
                    <Box component="h1">99%</Box>
                </Box>
            </Box>
        );
    }
}

export default withStyles(styles)(ScoreResult);
