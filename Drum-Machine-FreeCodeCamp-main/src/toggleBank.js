import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { connect } from 'react-redux';
import { updateBank } from './drumAction'

const ToggleBank = ({ changeBank}) => {
    const handleOnClickBank = (event) => {
        changeBank(event.target.checked)
    }
    return (
      <FormGroup>
        <FormControlLabel control={<Switch onChange={handleOnClickBank} />} label="Bank" />
      </FormGroup>
    )
  }
  const mapDispatchToProps = (dispatch) => {
    return ({
      changeBank: (switchpowerpayload) => dispatch(updateBank(switchpowerpayload)),
    })
  };
  
  export default connect(null, mapDispatchToProps)(ToggleBank);