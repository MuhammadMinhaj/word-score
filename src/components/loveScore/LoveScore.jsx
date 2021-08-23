import { Box, Button, TextField, withStyles } from '@material-ui/core';
import { Functions as FunctionsIcon } from '@material-ui/icons';
import { Component } from 'react';
import Title from '../common/Title';

const styles = () => ({
    input: {
        color: '#fff',
    },
    label: {
        color: '#607d8b',
    },
    helperText: {
        color: '#e91e63',
    },
});

class LoveScore extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Box p="1rem">
                <Title title="Love Score" />
                <Box height="1rem" />

                <Box display="flex">
                    <TextField
                        placeholder="Example - None"
                        variant="filled"
                        fullWidth
                        color="secondary"
                        label="Enter your name"
                        // helperText=" Write one or more words with commas or spaces separately"
                        InputProps={{
                            className: classes.input,
                        }}
                        InputLabelProps={{
                            className: classes.label,
                        }}
                        FormHelperTextProps={{ className: classes.helperText }}
                    />
                    <Box width="1rem" />

                    <TextField
                        placeholder="Example - Undefined"
                        variant="filled"
                        fullWidth
                        color="secondary"
                        label="Enter your parthner name"
                        // helperText=" Write one or more words with commas or spaces separately"
                        InputProps={{
                            className: classes.input,
                        }}
                        InputLabelProps={{
                            className: classes.label,
                        }}
                        FormHelperTextProps={{ className: classes.helperText }}
                    />
                </Box>
                <Box height="1rem" />
                <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    startIcon={<FunctionsIcon />}
                >
                    Calculate
                </Button>
            </Box>
        );
    }
}

export default withStyles(styles)(LoveScore);
