import { Box, Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';
import LoveScore from './LoveScore';
import WordScore from './WordScore';

const styles = () => ({
    root: {
        backgroundImage: 'var(--fg)',
    },
});

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Box p="1rem" className={classes.root}>
                <Container>
                    <Box p="1rem" boxShadow={3} borderRadius="0.5rem">
                        <Grid container spacing={3}>
                            <Grid item md={6}>
                                <WordScore />
                            </Grid>
                            <Grid item md={6}>
                                <LoveScore />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        );
    }
}

export default withStyles(styles)(App);
