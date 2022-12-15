import { useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IPropsLayout } from '../../common/types/layout'
import { SideBarComponent } from '../sidebar'
import { TopBarComponent } from '../top-bar'

export const LayoutComponent: FC<IPropsLayout> = (
	props: IPropsLayout
): JSX.Element => {
	const { children } = props
	const location = useLocation()
	const isNoneMobile = useMediaQuery('(min-width:600px)')
	const [isOpen, setIsOpen] = useState(true)

	return location.pathname === '/register' || location.pathname === '/login' ? (
		<>{children}</>
	) : (
		<>
			<Box display={isNoneMobile ? 'flex' : 'block'} width='100%' height='100%'>
				<SideBarComponent
					isNoneMobile={isNoneMobile}
					drawerWidth='200px'
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
				<Box>
					<TopBarComponent />
					{children}
				</Box>
			</Box>
		</>
	)
}
