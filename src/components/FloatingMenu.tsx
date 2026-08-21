import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/FloatingMenu.css'

const menuItems = [
  { to: '/', label: '主页', end: true },
  { to: '/man', label: '奥特曼' },
]

type Position = {
  left: number
  top: number
}

type PanelDirection = 'up' | 'down'
type PanelAlignment = 'start' | 'end'

const ballSize = 56
const viewportPadding = 12
const dragThreshold = 6

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<Position | null>(null)
  const [panelDirection, setPanelDirection] = useState<PanelDirection>('up')
  const [panelAlignment, setPanelAlignment] = useState<PanelAlignment>('end')
  const dragStart = useRef<Position | null>(null)
  const wasDragged = useRef(false)

  function toggleMenu() {
    if (wasDragged.current) {
      wasDragged.current = false
      return
    }

    setIsOpen((open) => {
      if (!open) {
        const button = document.querySelector<HTMLButtonElement>('.floating-menu__button')

        if (button) {
          const rect = button.getBoundingClientRect()
          setPanelDirection(rect.top > window.innerHeight - rect.bottom ? 'up' : 'down')
          setPanelAlignment(rect.left > window.innerWidth - rect.right ? 'end' : 'start')
        }
      }

      return !open
    })
  }

  function handlePointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect()

    dragStart.current = {
      left: event.clientX - rect.left,
      top: event.clientY - rect.top,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event: React.PointerEvent<HTMLButtonElement>) {
    if (!dragStart.current) {
      return
    }

    const left = Math.min(
      Math.max(viewportPadding, event.clientX - dragStart.current.left),
      window.innerWidth - ballSize - viewportPadding,
    )
    const top = Math.min(
      Math.max(viewportPadding, event.clientY - dragStart.current.top),
      window.innerHeight - ballSize - viewportPadding,
    )

    const current = event.currentTarget.getBoundingClientRect()
    if (Math.abs(left - current.left) > dragThreshold || Math.abs(top - current.top) > dragThreshold) {
      wasDragged.current = true
      setIsOpen(false)
    }

    setPosition({ left, top })
  }

  function handlePointerUp(event: React.PointerEvent<HTMLButtonElement>) {
    dragStart.current = null
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <div
      className="floating-menu"
      style={position ? { left: position.left, top: position.top, right: 'auto', bottom: 'auto' } : undefined}
    >
      <nav
        id="floating-menu"
        className="floating-menu__panel"
        data-alignment={panelAlignment}
        data-direction={panelDirection}
        hidden={!isOpen}
      >
        {menuItems.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `floating-menu__link${isActive ? ' floating-menu__link--active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <button
        className="floating-menu__button"
        type="button"
        onClick={toggleMenu}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <span>{isOpen ? '×' : '☰'}</span>
      </button>
    </div>
  )
}
