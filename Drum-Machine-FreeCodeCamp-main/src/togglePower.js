import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { connect } from 'react-redux';
import { updatePower } from './drumAction'


const TogglePower = ({changePower}) => {
  const handleOnClickPower = (event) => {
    changePower(event.target.checked)
  }
  return (
    <FormGroup>
      <FormControlLabel control={<Switch onChange={handleOnClickPower} //checked={false}
      />} label="Power" />
    </FormGroup>
  )
}
const mapDispatchToProps = (dispatch) => {
  return ({
    changePower: (powerPayload) => dispatch(updatePower(powerPayload)),
  })
};

export default connect(null, mapDispatchToProps)(TogglePower);