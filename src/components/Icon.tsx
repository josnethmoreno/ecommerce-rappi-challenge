import {LocalDrink, BreakfastDining, DinnerDining, WineBar} from '@mui/icons-material'

interface IconsProps {
  icon: string
}

function Icon({icon}: IconsProps) {
  const SpecificIconProps = {
    icon: icon
  }
  const SpecificIcon =  icon
  return (
    <SpecificIcon icon={props.Icon} ></SpecificIcon>
  )
}

export default Icon