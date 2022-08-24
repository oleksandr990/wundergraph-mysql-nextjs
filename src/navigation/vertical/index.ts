// ** Icon imports
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'ToDo',
      icon: HomeOutline,
      path: '/'
    },
    {
      icon: CubeOutline,
      title: 'Add New ToDo',
      path: '/add-todo'
    }
  ]
}

export default navigation
