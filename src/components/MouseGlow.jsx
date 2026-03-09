import { useEffect, useState } from 'react'
import { Box, useTheme } from '@mui/material'

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const theme = useTheme()

  useEffect(() => {
    const handler = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

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
