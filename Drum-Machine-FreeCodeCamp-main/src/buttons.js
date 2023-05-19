import React from 'react'
import { connect } from 'react-redux';
import { playSoundAction } from './drumAction'
import Button from '@mui/material/Button';
import { blue} from '@mui/material/colors';

const themeColor = blue[100]

const LetterButton = ({ letter, playSound }) => {
    const handleOnClick = () => {   
        playSound(letter);
    }
    return (
        <Button onClick={handleOnClick} variant="contained" sx={{ fontSize: 20, color: themeColor, padding: '9px 12px' }}>
            {letter}
        </Button>
    )
}
const mapDispatchToProps = (dispatch) => {
    return ({
        playSound: (letter) => dispatch(playSoundAction(letter)),
    })
};

export default connect(null, mapDispatchToProps)(LetterButton)

