import { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'

const TYPE_SPEED = 50
const DELETE_SPEED = 30
const PAUSE_MS = 2000

export default function Typewriter({ strings }) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[wordIndex]

    if (!deleting && displayed === current) {
      const pause = setTimeout(() => setDeleting(true), PAUSE_MS)
      return () => clearTimeout(pause)
    }

    if (deleting && displayed === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % strings.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setDisplayed(deleting ? displayed.slice(0, -1) : current.slice(0, displayed.length + 1))
      },
      deleting ? DELETE_SPEED : TYPE_SPEED,
    )

    return () => clearTimeout(timeout)
  }, [displayed, wordIndex, deleting, strings])

  return (
    <Typography variant="body1" color="primary.main" sx={{ fontFamily: 'monospace', minHeight: '1.5em' }}>
      {displayed}
      <Box component="span" sx={{ animation: 'blink 1s step-start infinite' }}>
        |
      </Box>
    </Typography>
  )
}
