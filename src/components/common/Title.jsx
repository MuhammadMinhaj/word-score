import { Box, Typography } from '@material-ui/core';
import { Component } from 'react';

class Title extends Component {
    render() {
        const { title, isSub } = this.props;
        return (
            <Box color="#fff">
                <Typography variant={isSub ? 'subtitle1' : 'h5'} align="center">
                    {title}
                </Typography>
            </Box>
        );
    }
}

export default Title;
