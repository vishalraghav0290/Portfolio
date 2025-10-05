import React from "react";
import ModelViewer from '../components/ModelViewer';
import TextTrail from '../components/TextTrail';

const myCustomStyle = {
    width: '600px',
    height: '600px',
    position: 'absolute',
    top: '50px',
    left: '50px',
    zIndex: 10
};

export default function ConnectUS() {

    return (
        <div className="flex w-screen h-screen">
            <ModelViewer
                url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
                useOrthographic={true}
                defaultZoom={2000}
            />
            {/* <TextTrail
                text="LINKEDIN - https://www.linkedin.com/in/vishal-raghav-2b4b35210/"
                fontFamily="Figtree"
                fontWeight="900"
                
            /> */}
        </div>)
}