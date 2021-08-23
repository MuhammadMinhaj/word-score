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

class WordScore extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Box p="1rem">
                <Title title="Word Score" />
                <Box height="1rem" />

                <TextField
                    placeholder="Example - hard work, knowledge, attitude"
                    variant="filled"
                    fullWidth
                    color="secondary"
                    label="Enter one or more words"
                    helperText=" Write one or more words with commas or spaces separately"
                    InputProps={{
                        className: classes.input,
                    }}
                    InputLabelProps={{
                        className: classes.label,
                    }}
                    FormHelperTextProps={{ className: classes.helperText }}
                />
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

export default withStyles(styles)(WordScore);
