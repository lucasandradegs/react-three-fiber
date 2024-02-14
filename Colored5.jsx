/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/colored5.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/colored5.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.FLbrake002.geometry} material={materials['brake_disc.003']} />
        <mesh geometry={nodes.FLbrake002_1.geometry} material={materials['brake_color.003']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.FLbrake003.geometry} material={materials['brake_disc.003']} />
        <mesh geometry={nodes.FLbrake003_1.geometry} material={materials['brake_color.003']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.FLwheel002.geometry} material={materials['rubber.003']} />
        <mesh geometry={nodes.FLwheel002_1.geometry} material={materials['wheel_color.003']} />
        <mesh geometry={nodes.FLwheel002_2.geometry} material={materials['hcap1.003']} />
        <mesh geometry={nodes.FLwheel002_3.geometry} material={materials['hcap2.003']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.FLwheel003.geometry} material={materials['rubber.003']} />
        <mesh geometry={nodes.FLwheel003_1.geometry} material={materials['wheel_color.003']} />
        <mesh geometry={nodes.FLwheel003_2.geometry} material={materials['hcap1.003']} />
        <mesh geometry={nodes.FLwheel003_3.geometry} material={materials['hcap2.003']} />
      </group>
      <mesh geometry={nodes.interior.geometry} material={materials['interior.003']} rotation={[Math.PI / 2, 0, 0]} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.main005.geometry} material={materials['main_color.003']} />
        <mesh geometry={nodes.main005_1.geometry} material={materials['body_plastic.003']} />
        <mesh geometry={nodes.main005_2.geometry} material={materials['void.003']} />
        <mesh geometry={nodes.main005_3.geometry} material={materials['metal.003']} />
        <mesh geometry={nodes.main005_4.geometry} material={materials['reflective_light.003']} />
        <mesh geometry={nodes.main005_5.geometry} material={materials['glass.003']} />
        <mesh geometry={nodes.main005_6.geometry} material={materials['light.003']} />
        <mesh geometry={nodes.main005_7.geometry} material={materials['chrome.003']} />
        <mesh geometry={nodes.main005_8.geometry} material={materials['backlight.003']} />
        <mesh geometry={nodes.main005_9.geometry} material={materials['glass_op0.003']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.main006.geometry} material={materials['main_color.003']} />
        <mesh geometry={nodes.main006_1.geometry} material={materials['body_plastic.003']} />
        <mesh geometry={nodes.main006_2.geometry} material={materials['metal.003']} />
      </group>
      <mesh geometry={nodes.main002.geometry} material={materials['metal.003']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.main003.geometry} material={materials['glass.003']} rotation={[Math.PI / 2, 0, 0]} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.main009.geometry} material={materials['plastic.003']} />
        <mesh geometry={nodes.main009_1.geometry} material={materials['light.003']} />
        <mesh geometry={nodes.main009_2.geometry} material={materials['chrome.003']} />
        <mesh geometry={nodes.main009_3.geometry} material={materials['glass_op0.003']} />
      </group>
      <mesh geometry={nodes.misc.geometry} material={materials['void.003']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['metal.003']} rotation={[Math.PI / 2, 0, 0]} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Plane007.geometry} material={materials['logo1.003']} />
        <mesh geometry={nodes.Plane007_1.geometry} material={materials['logo2.003']} />
      </group>
      <mesh geometry={nodes.Plane004.geometry} material={materials['metal.003']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane005.geometry} material={materials['body_plastic.003']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane006.geometry} material={materials['body_plastic.003']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.plates.geometry} material={materials['Material.003']} rotation={[Math.PI / 2, 0, 0]} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Rbrakes001.geometry} material={materials['brake_disc.003']} />
        <mesh geometry={nodes.Rbrakes001_1.geometry} material={materials['brake_color.003']} />
        <mesh geometry={nodes.Rbrakes001_2.geometry} material={materials['metal.003']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.RLwheel001.geometry} material={materials['rubber.003']} />
        <mesh geometry={nodes.RLwheel001_1.geometry} material={materials['wheel_color.003']} />
        <mesh geometry={nodes.RLwheel001_2.geometry} material={materials['hcap1.003']} />
        <mesh geometry={nodes.RLwheel001_3.geometry} material={materials['hcap2.003']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.RRwheel001.geometry} material={materials['rubber.003']} />
        <mesh geometry={nodes.RRwheel001_1.geometry} material={materials['wheel_color.003']} />
        <mesh geometry={nodes.RRwheel001_2.geometry} material={materials['hcap1.003']} />
        <mesh geometry={nodes.RRwheel001_3.geometry} material={materials['hcap2.003']} />
      </group>
      <mesh geometry={nodes.wiper.geometry} material={materials['body_plastic.003']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/colored5.glb')
