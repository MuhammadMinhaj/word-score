import { Box, Button, TextField, withStyles } from '@material-ui/core';
import { Clear as ClearIcon, Functions as FunctionsIcon } from '@material-ui/icons';
import { Component } from 'react';

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

class WordScore extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <TextField
                    placeholder="Example - hard work, knowledge, attitude"
                    variant="filled"
                    fullWidth
                    color="secondary"
                    label="Enter one or more words"
                    helperText="Write one or more words with commas or spaces separately"
                    multiline
                    InputProps={{
                        className: classes.input,
                    }}
                    InputLabelProps={{
                        className: classes.label,
                    }}
                    FormHelperTextProps={{ className: classes.helperText }}
                />
                <Box py="1rem" display="flex">
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        startIcon={<FunctionsIcon />}
                        fullWidth
                    >
                        Calculate
                    </Button>
                    <Box width="1rem" />
                    <Button
                        variant="text"
                        color="secondary"
                        size="large"
                        startIcon={<ClearIcon />}
                        fullWidth
                    >
                        Clear
                    </Button>
                </Box>
            </>
        );
    }
}

export default withStyles(styles)(WordScore);
