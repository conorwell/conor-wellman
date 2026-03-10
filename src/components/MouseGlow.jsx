import { useEffect, useState } from 'react'
import { Box, useTheme } from '@mui/material'

const isTouchDevice = window.matchMedia('(pointer: coarse)').matches

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const theme = useTheme()

  useEffect(() => {
    if (isTouchDevice) return
    const handler = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  if (isTouchDevice) return null

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        background: `radial-gradient(circle 350px at ${pos.x}px ${pos.y}px, ${theme.palette.primary.main}10, transparent 80%)`,
      }}
    />
  )
}
