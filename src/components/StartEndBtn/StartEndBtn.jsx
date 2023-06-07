import { Button, Stack } from '@mui/material'
import './startEndBtn.css'

export default function StartEndBtn() {
  return (
    <div className='startEndBtn'>
    <div className="startEndBtnContainer">
      <Stack direction="row" spacing={3}>
      
      <Button variant="contained" color="success">
        Start Test
      </Button>
      <Button variant="outlined" color="error">
        Stop Test
      </Button>
    </Stack>  
    </div>
    </div>
  )
}
