/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/untitled.glb 
*/

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber';

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;


export function Car(props) {
    const { nodes, materials } = useGLTF('./models/untitled.glb')
    const ref = useRef()
    const tl = useRef()

    const scroll = useScroll();

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration())
    })
    
    useLayoutEffect(() => {
        tl.current = gsap.timeline()

        tl.current.to(
            ref.current.position,
            {
                duration: 2,
                y: -FLOOR_HEIGHT * (NB_FLOORS - 1)
            },
            0
        )
    }, [])

    return (
        <group {...props} dispose={null} ref={ref}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={4.134}>
                <mesh geometry={nodes.Object_10.geometry} material={materials.body_plastic} />
                <mesh geometry={nodes.Object_11.geometry} material={materials.body_plastic} />
                <mesh geometry={nodes.Object_12.geometry} material={materials.body_plastic} />
                <mesh geometry={nodes.Object_13.geometry} material={materials.body_plastic} />
                <mesh geometry={nodes.Object_14.geometry} material={materials.body_plastic} />
                <mesh geometry={nodes.Object_15.geometry} material={materials.body_plastic} />
                <mesh geometry={nodes.Object_16.geometry} material={materials.body_plastic} />
                <mesh geometry={nodes.Object_17.geometry} material={materials.brake_color} />
                <mesh geometry={nodes.Object_18.geometry} material={materials.chrome} />
                <mesh geometry={nodes.Object_19.geometry} material={materials.chrome} />
                <mesh geometry={nodes.Object_2.geometry} material={materials['Material.015']} />
                <mesh geometry={nodes.Object_20.geometry} material={materials.chrome} />
                <mesh geometry={nodes.Object_21.geometry} material={materials.glass} />
                <mesh geometry={nodes.Object_22.geometry} material={materials.glass_op0} />
                <mesh geometry={nodes.Object_23.geometry} material={materials.brake_disc} />
                <mesh geometry={nodes.Object_24.geometry} material={materials.hcap2} />
                <mesh geometry={nodes.Object_25.geometry} material={materials['void']} />
                <mesh geometry={nodes.Object_26.geometry} material={materials.metal} />
                <mesh geometry={nodes.Object_27.geometry} material={materials.metal} />
                <mesh geometry={nodes.Object_28.geometry} material={materials.metal} />
                <mesh geometry={nodes.Object_29.geometry} material={materials.main_color} />
                <mesh geometry={nodes.Object_3.geometry} material={materials.backlight} />
                <mesh geometry={nodes.Object_30.geometry} material={materials.main_color} />
                <mesh geometry={nodes.Object_31.geometry} material={materials.main_color} />
                <mesh geometry={nodes.Object_32.geometry} material={materials.main_color} />
                <mesh geometry={nodes.Object_33.geometry} material={materials.light} />
                <mesh geometry={nodes.Object_34.geometry} material={materials.light} />
                <mesh geometry={nodes.Object_35.geometry} material={materials.hcap1} />
                <mesh geometry={nodes.Object_36.geometry} material={materials.plastic} />
                <mesh geometry={nodes.Object_37.geometry} material={materials.plastic} />
                <mesh geometry={nodes.Object_38.geometry} material={materials.wheel_color} />
                <mesh geometry={nodes.Object_39.geometry} material={materials.wheel_color} />
                <mesh geometry={nodes.Object_40.geometry} material={materials.wheel_color} />
                <mesh geometry={nodes.Object_41.geometry} material={materials.wheel_color} />
                <mesh geometry={nodes.Object_42.geometry} material={materials.rubber} />
                <mesh geometry={nodes.Object_5.geometry} material={materials.logo2} />
                <mesh geometry={nodes.Object_6.geometry} material={materials.interior} />
                <mesh geometry={nodes.Object_7.geometry} material={materials.logo1} />
                <mesh geometry={nodes.Object_8.geometry} material={materials.reflective_light} />
                <mesh geometry={nodes.Object_9.geometry} material={materials.body_plastic} />
            </group>
        </group>
    )
}

useGLTF.preload('./models/untitled.glb')
