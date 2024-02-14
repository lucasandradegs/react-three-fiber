import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Experience } from './components/Experience'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <Canvas camera={{
      fov: 50,
      position: [-5.60, 2.04, 8.18]
    }}>
      <Experience />
    </Canvas>
  )
}

export default App
