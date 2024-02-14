import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Car } from "./Car"
import { Office } from "./Office"
import { Teste } from "./Teste"
import { Ferrari } from "./Ferrari"
import { Teste2 } from "./Teste2"
import { Ferrari2 } from "./Ferrari2"
import { Colored } from "./Colored"

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={1}/>
            <OrbitControls enableZoom={false}/>
            <ScrollControls pages={3} damping={0.25}>
            <Colored/>
            </ScrollControls>
        </>
    )
}