import * as React from 'react'
import { X } from 'lucide-react'
import { Toast as ToastPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'

function ToastProvider(props: React.ComponentProps<typeof ToastPrimitive.Provider>) {
  return <ToastPrimitive.Provider swipeDirection="right" {...props} />
}

function Toast({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Root> & {
  variant?: 'default' | 'success' | 'destructive'
}) {
  return (
    <ToastPrimitive.Root
      data-slot="toast-root"
      data-variant={variant}
      className={cn(
        'group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-lg border border-white/10 bg-toast p-4 pr-10 text-toast-foreground shadow-[0_16px_42px_rgb(0_0_0/0.28)] outline-none',
        'data-[state=open]:animate-in data-[state=open]:slide-in-from-right-full data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:animate-out data-[swipe=end]:slide-out-to-right-full',
        variant === 'success' &&
          'border-toast-success bg-toast-success [&_[data-slot=toast-title]]:text-white',
        variant === 'destructive' &&
          'border-toast-error bg-toast-error [&_[data-slot=toast-title]]:text-white',
        className,
      )}
      {...props}
    />
  )
}

function ToastTitle({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Title>) {
  return (
    <ToastPrimitive.Title
      data-slot="toast-title"
      className={cn('text-[12px] font-semibold', className)}
      {...props}
    />
  )
}

function ToastDescription({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Description>) {
  return (
    <ToastPrimitive.Description
      data-slot="toast-description"
      className={cn('mt-1 text-[11px] leading-relaxed text-toast-foreground/75', className)}
      {...props}
    />
  )
}

function ToastClose({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Close>) {
  return (
    <ToastPrimitive.Close
      data-slot="toast-close"
      aria-label="Close notification"
      className={cn(
        'absolute top-3 right-3 rounded-sm p-1 text-toast-foreground/65 transition-colors hover:text-toast-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        className,
      )}
      {...props}
    >
      <X size={14} aria-hidden="true" />
    </ToastPrimitive.Close>
  )
}

function ToastViewport({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Viewport>) {
  return (
    <ToastPrimitive.Viewport
      data-slot="toast-viewport"
      className={cn(
        'fixed right-0 bottom-0 z-[100] flex max-h-screen w-full flex-col gap-2 p-4 sm:max-w-[390px]',
        className,
      )}
      {...props}
    />
  )
}

export { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport }
