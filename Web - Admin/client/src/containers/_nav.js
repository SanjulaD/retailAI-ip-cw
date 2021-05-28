import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW UPDATE',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Others']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Heatmap',
    to: '/heatmap',
    icon: 'cil-puzzle',
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Settings',
  //   to: '/settings',
  //   icon: 'cil-settings',
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Logout',
    to: '/login',
    icon: 'cil-cursor',
  },
]

export default _nav
