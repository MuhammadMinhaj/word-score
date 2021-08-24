import { Box, Container, useMediaQuery, useTheme } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';
import LoveScore from './loveScore/LoveScore';
import WordScore from './wordScore/WordScore';

const styles = () => ({
    root: {
        backgroundImage: 'var(--fg)',
    },
    line: {
        backgroundImage: 'var(--fg)',
    },
});

class Body extends Component {
    render() {
        const { classes, isSm } = this.props;
        return (
            <Box component="main" py="1rem" className={classes.root}>
                <Container>
                    <Box boxShadow={3} borderRadius="0.5rem" py="2rem">
                        <Box display={isSm ? 'block' : 'flex'}>
                            <Box width="100%">
                                <WordScore />
                            </Box>
                            {!isSm && (
                                <Box
                                    width="1.5rem"
                                    minHeight="100%"
                                    borderRadius="1rem"
                                    className={classes.line}
                                />
                            )}

                            <Box width="100%">
                                <LoveScore />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        );
    }
}

const WithMediaQuery = (props) => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    return <Body {...props} isSm={isSm} />;
};

export default withStyles(styles)(WithMediaQuery);
