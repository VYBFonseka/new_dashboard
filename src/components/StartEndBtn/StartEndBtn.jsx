import { Button, Stack } from '@mui/material'
import './startEndBtn.css'

export default function StartEndBtn() {
  return (
    <div className='startEndBtn'>
      <Stack direction="row" spacing={3}>
      
      <Button variant="contained" color="success">
        Start Test
      </Button>
      <Button variant="outlined" color="error">
        End Test
      </Button>
    </Stack>  
    </div>
  )
}
