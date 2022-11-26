import List from '@mui/material/List'
import ListSubheader from '@mui/material/ListSubheader'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Icon from './Icon'
import ChevronRight from '@mui/icons-material/ChevronRight'
import {LocalDrink, BreakfastDining, DinnerDining, WineBar} from '@mui/icons-material'

type Category = {
  id: number,
  name: string,
	icon: string,
  sublevels?: Category[]
}

type MenuProps = {
  categories: Category[]
}

function Menu({categories}: MenuProps) {
	return (
		<List
			sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', height: '100vh' }}
			component='nav'
			aria-labelledby='nested-list-subheader'
			subheader={
				<ListSubheader component='div' id='nested-list-subheader'>
					{categories.length === 0
						? 'No existen productos disponibles'
						: 'Products:'}
				</ListSubheader>
			}
		>
			{categories.map((category) => (
				<div key={category.id}>
					<ListItemButton>
						<ListItemIcon>
							<Icon name={category.icon}></Icon>
						</ListItemIcon>
						<ListItemText primary={category.name} />
					</ListItemButton>
				</div>
			))}
		</List>
	)
}

export default Menu
