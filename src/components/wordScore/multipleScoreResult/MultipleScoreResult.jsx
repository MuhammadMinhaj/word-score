import { Box } from '@material-ui/core';
import { Component } from 'react';
import Title from '../../common/Title';
import MultipleScoreItem from './MultipleScoreItem';

class MultipleScoreResult extends Component {
    render() {
        return (
            <Box boxShadow={3} borderRadius="1rem">
                <Title title="Sequence of results" isSub />
                <Box maxHeight="390px" overflow="auto">
                    <MultipleScoreItem text="Hard Work" />
                    <MultipleScoreItem text="Knowledge" />
                    <MultipleScoreItem text="Attitude" />
                </Box>
            </Box>
        );
    }
}

export default MultipleScoreResult;
