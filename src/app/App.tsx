import { Outlet } from 'react-router-dom'
import { FloatingMenu } from '../components/FloatingMenu'

export function App() {
  return (
    <main className="site-shell">
      <Outlet />
      <FloatingMenu />
    </main>
  )
}
