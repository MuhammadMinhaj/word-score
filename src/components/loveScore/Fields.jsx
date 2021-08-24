import { Box, Button, TextField, Typography, withStyles } from '@material-ui/core';
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

class Fields extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <Box display="flex">
                    <TextField
                        placeholder="Example - Programmer"
                        variant="filled"
                        fullWidth
                        color="secondary"
                        label="Enter your name"
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
                        placeholder="Example - Programming"
                        variant="filled"
                        fullWidth
                        color="secondary"
                        label="Enter your parthner name"
                        InputProps={{
                            className: classes.input,
                        }}
                        InputLabelProps={{
                            className: classes.label,
                        }}
                        FormHelperTextProps={{ className: classes.helperText }}
                    />
                </Box>

                <Box pl="0.5" pt="0.25rem">
                    <Typography color="secondary" variant="caption">
                        Enter two names in the fields
                    </Typography>
                </Box>
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

export default withStyles(styles)(Fields);
