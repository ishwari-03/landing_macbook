// src/components/models/Macbook.jsx
/*
  Same gltf as your Macbookmodel16, just cleaned up & fixed.
*/
import React, { useEffect } from 'react';
import { useGLTF, useVideoTexture } from '@react-three/drei';
import { Color } from 'three';
import useMacBookStore from '../../store';
import { noChangeParts } from '../../constants';

export default function MacbookModel(props) {
  const { color, texture } = useMacBookStore();
  const { nodes, materials, scene } = useGLTF('/models/macbook-transformed.glb');

  // Video texture for the screen
  const screenMap = useVideoTexture(texture);

  // Tint body meshes with current color
  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        if (!noChangeParts.includes(child.name)) {
          child.material.color = new Color(color);
        }
      }
    });
  }, [color, scene]);

  return (
    <group {...props} dispose={null}>
      {/* Your auto-generated mesh list – unchanged except for screen */}
      <mesh geometry={nodes.Object_10.geometry} material={materials.PaletteMaterial001} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.zhGRTuGrQoJflBD} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.PaletteMaterial002} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.lmWQsEjxpsebDlK} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_30.geometry} material={materials.LtEafgAVRolQqRw} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_32.geometry} material={materials.iyDJFXmHelnMTbD} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_34.geometry} material={materials.eJObPwhgFzvfaoZ} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.nDsMUuDKliqGFdU} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_42.geometry} material={materials.CRQixVLpahJzhJc} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_48.geometry} material={materials.YYwBgwvcyZVOOAA} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_54.geometry} material={materials.SLGkCohDDelqXBu} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_58.geometry} material={materials.WnHKXHhScfUbJQi} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_66.geometry} material={materials.fNHiBfcxHUJCahl} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_74.geometry} material={materials.LpqXZqhaGCeSzdu} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_82.geometry} material={materials.gMtYExgrEUqPfln} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_96.geometry} material={materials.PaletteMaterial003} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_107.geometry} material={materials.JvMFZolVCdpPqjj} rotation={[Math.PI / 2, 0, 0]} />

      {/* ✅ Screen with video texture */}
      <mesh geometry={nodes.Object_123.geometry} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial map={screenMap} toneMapped={false} />
      </mesh>

      <mesh geometry={nodes.Object_127.geometry} material={materials.ZCDwChwkbBfITSW} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
}

useGLTF.preload('/models/macbook-transformed.glb');
