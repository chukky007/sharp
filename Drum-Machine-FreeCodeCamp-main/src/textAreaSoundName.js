import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { connect } from 'react-redux';
import { playSoundAction } from './drumAction'

const TextArea = ({ soundName}) => {
    
    return (
        <div>
            <TextareaAutosize
                aria-label="empty textarea"
                placeholder={soundName}
                style={{ width: 200, size: 20 }}
            />
        </div>
    )
}
const mapStateToProps = (state) => ({
    soundName: state.soundName
});
export default connect(mapStateToProps)(TextArea);