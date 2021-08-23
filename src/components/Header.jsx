import { Box, Container, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';

const styles = () => ({
    root: {
        backgroundImage: 'var(--bg)',
    },
    wrapper: {
        backgroundImage: 'var(--fg)',
        color: '#fff',
        borderRadius: '0.5rem',
    },
});

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Box className={classes.root}>
                <Container>
                    <Box py="1rem">
                        <Box className={classes.wrapper} py="0.5rem" boxShadow={3}>
                            <Typography variant="h3" align="center" color="inherit">
                                SCORE APPLICATION
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        );
    }
}

export default withStyles(styles)(App);
