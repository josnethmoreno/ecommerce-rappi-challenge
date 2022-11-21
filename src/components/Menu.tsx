import List from '@mui/material/List'
import ListSubheader from '@mui/material/ListSubheader'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ChevronRight from '@mui/icons-material/ChevronRight'

import { categories } from '../database/categories.json'

interface Category {
  id: number,
  name: string,
  sublevels?: Category[]
}

function Menu() {

  interface CreateListProps {
    categories: Category[]
  }

  const createListNested = ({categories}: CreateListProps) => {
    <List
			sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
			component='nav'
			aria-labelledby='nested-list-subheader'
		>
    </List>
  }

	return (
		<List
			sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
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
				<>
					<ListItemButton key={category.id}>
						<ListItemIcon>
							<ChevronRight></ChevronRight>
						</ListItemIcon>
						<ListItemText primary={category.name} />
					</ListItemButton>
				</>
			))}
		</List>
	)
}

export default Menu
