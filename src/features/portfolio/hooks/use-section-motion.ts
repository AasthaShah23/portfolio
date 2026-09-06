import type { RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function useSectionMotion(scope: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      const media = gsap.matchMedia()
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
          gsap.from(element, {
            y: 24,
            opacity: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 94%', once: true },
          })
        })
        gsap.to('[data-float]', { y: -9, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      })
      return () => media.revert()
    },
    { scope },
  )
}
