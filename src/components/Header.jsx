import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@material-ui/core';
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

class Header extends Component {
    render() {
        const { classes, isSm } = this.props;
        return (
            <Box className={classes.root}>
                <Container>
                    <Box py="1rem">
                        <Box className={classes.wrapper} py="0.5rem" boxShadow={3}>
                            <Typography variant={isSm ? 'h5' : 'h3'} align="center" color="inherit">
                                SCORE APPLICATION
                            </Typography>
                            <Box maxWidth="500px" m="auto" textAlign="center">
                                <Box height="0.5rem" />

                                <Typography variant="body1" align="center" color="secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Voluptatum, culpa! Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Voluptatum, culpa!
                                </Typography>
                                <Box height="0.5rem" />
                                <Button variant="outlined" color="secondary" size="large">
                                    Source On Github
                                </Button>
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
    return <Header {...props} isSm={isSm} />;
};

export default withStyles(styles)(WithMediaQuery);
