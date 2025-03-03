import { find } from 'lodash'
import { BlocksIcon, BookOpenIcon, ChartPieIcon, UsersIcon, Waypoints, WorkflowIcon } from 'lucide-react'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export const useMenu = () => {
  const location = useLocation()
  const menu = {
    navMain: [
      {
        title: 'Summary',
        url: '/',
        icon: ChartPieIcon,
      },
      {
        title: 'Zones',
        url: '/zones',
        icon: BlocksIcon,
      },
      {
        title: 'Nodes',
        url: '/nodes',
        icon: WorkflowIcon,
      },
      {
        title: 'Network Visualization',
        url: '/network/visualization',
        icon: Waypoints,
      },
    ],
    navSecondary: [
      {
        title: 'Documentation',
        url: '/',
        icon: BookOpenIcon,
      },
      {
        title: 'Discord',
        url: 'https://discord.gg/g5KYHRKS52',
        icon: UsersIcon,
      },
    ],
  }

  const isActive = useMemo(() => {
    return find(menu.navMain, (item) =>
      item.url !== '/' ? location.pathname.includes(item.url) : item.url === location.pathname
    )
  }, [location.pathname, menu.navMain])

  return {
    menu,
    isActive,
  }
}
