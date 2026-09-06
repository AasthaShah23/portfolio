import { Outlet } from '@tanstack/react-router'
export function RootLayout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Outlet />
    </>
  )
}
