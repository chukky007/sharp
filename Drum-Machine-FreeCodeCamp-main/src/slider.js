import * as React from 'react';
import Slider from '@mui/material/Slider';
import { connect } from 'react-redux';
import { updateVolume } from './drumAction'

const SliderComponent = ({ changeVolume }) => {
    const handleOnChange = (event) => {
        changeVolume(event.target.value)

    }
    return (
        <Slider
            defaultValue={30}
            sx={{
                width: 300,
                color: 'success.main',
            }}
            onChange={handleOnChange}
        />
    )
}
const mapDispatchToProps = (dispatch) => {
    return ({
        changeVolume: (graduallyincreasevolume) => dispatch(updateVolume(graduallyincreasevolume)),
    })
};
export default connect(null, mapDispatchToProps)(SliderComponent);
