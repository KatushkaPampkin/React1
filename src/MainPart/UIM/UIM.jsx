import { Button, Rating, Switch } from '@mui/material'
import './UIM.scss'
import React from 'react'
import {Checkbox} from '@mui/material'
import {FormControlLabel} from '@mui/material'

const UIM = () => {
  return (
      <section>
    <div>
        <Button variant="contained">Contained</Button>
        <Rating name="half-rating" defaultValue={4} precision={1} />
        <Switch  defaultChecked />
    </div>
      <div>
         {/* <FormGroup>*/}
              <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
              <FormControlLabel required control={<Checkbox />} label="Required" />
              <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
          {/*</FormGroup>*/}
      </div>
</section>
  )
}

export default UIM