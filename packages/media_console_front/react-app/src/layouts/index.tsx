import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { getCookie } from '@/utils'
import { Outlet } from 'react-router-dom'
import { AppSidebar } from './app-sidebar'
import { Header } from './header'

type Props = {}

export * from './nav-user'

export const Layout: React.FC<Props> = () => {
  const sidebarState = getCookie('sidebar_state')
  const defaultOpen = sidebarState === 'true'

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1 cursor-pointer" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Header />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
