import { Outlet } from '@tanstack/react-router'
export function RootLayout() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed top-[-100px] left-5 z-100 bg-primary text-primary-foreground pt-3 pr-5 pb-3 pl-5 rounded-[4px] focus:top-3"
      >
        Skip to content
      </a>
      <Outlet />
    </>
  )
}
