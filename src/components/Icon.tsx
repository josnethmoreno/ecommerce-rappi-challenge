import { LocalDrink, BreakfastDining, DinnerDining, WineBar } from '@mui/icons-material'
import { SvgIconTypeMap } from '@mui/material'

function Icon(props) {
  const { name } = props
  const icons = {
    LocalDrink, 
    BreakfastDining, 
    DinnerDining, 
    WineBar 
  }

  const TheIcon = icons[name]
  return (
    <TheIcon {...props}/>
  )
}

export default Icon