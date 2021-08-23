import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';

const circleCommonStyles = {
    background: '#f44336',
    width: '300px',
    height: '300px',
    position: 'absolute',
    borderRadius: '50%',
};

const styles = () => ({
    root: {
        minHeight: '500px',
        paddingTop: '5rem',
    },
    rectangular: {
        background: '#ff6e6e',
        width: '300px',
        height: '300px',
        transform: 'rotate(45deg)',
        position: 'relative',
        borderBottom: '5px solid #f44336',
        borderRight: '5px solid #f44336',
        display: 'flex',
        justifyContent: 'center',
    },
    leftCircle: {
        ...circleCommonStyles,
        top: '0px',
        left: '-155px',
    },
    rightCircle: {
        ...circleCommonStyles,
        top: '-155px',
        right: '-5px',
    },
    textGrade: {
        transform: 'rotate(-45deg)',
        color: '#fff',
    },
    textPerchentage: {
        position: 'absolute',
        transform: 'rotate(-45deg)',
        bottom: '10%',
        left: '65%',
        color: '#fff',
    },
});

class Heart extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Box className={classes.root}>
                <Box className={classes.rectangular}>
                    <Box className={classes.leftCircle} />
                    <Box className={classes.rightCircle} />
                    <Box className={classes.textGrade}>
                        <h1>A+</h1>
                    </Box>
                    <Box className={classes.textPerchentage}>
                        <h1>99%</h1>
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default withStyles(styles)(Heart);
