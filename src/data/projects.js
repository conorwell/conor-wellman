export const featured = {
  title: 'Board Lord',
  tagline: 'CNN-based V-grade predictor for Tension Board 2',
  description:
    'Board Lord takes a Tension Board 2 problem\'s hold layout and board angle and predicts its V-grade using a CNN trained on community-graded problems. The model uses 2D spatial grid encoding, a learned angle embedding, and a combined Earth Mover\'s Distance + Cross-Entropy loss for ordinal aware grade prediction, achieving 0.53 MAE in 10-fold cross-validation.',
  liveUrl: 'https://boardlord.app',
  screenshot: '/Boardlord.png',
  repos: [
    { label: 'Model', url: 'https://github.com/conorwell/BoardLord-AI-Model' },
    { label: 'Model Service', url: 'https://github.com/conorwell/BoardLord-AI-Model-Service' },
    { label: 'UI', url: 'https://github.com/conorwell/BoardLord-AI-UI' },
  ],
  tech: ['Python', 'PyTorch', 'FastAPI', 'React', 'GCP'],
}

export const cards = [
  {
    title: 'Neural Traveling Salesperson Solver',
    description:
      'Neural ant colony optimization using a transformer to pre-place pheromone, reducing runtime by 25% while maintaining accuracy.',
    link: 'https://github.com/conorwell/neural_tsp',
    tech: ['Python', 'PyTorch'],
  },
  {
    title: '8a.nu Softness Calculator',
    description:
      'REST API scoring climbers\' grading tendencies using 8a.nu data — tracking each user\'s likelihood to suggest harder or easier grades than the community average.',
    link: 'https://github.com/conorwell/8aSoftnessIndex',
    tech: ['Python', 'Flask'],
  },
]
