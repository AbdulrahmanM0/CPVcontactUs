import React from 'react'
import Lottie from "lottie-react";
import  Animation from './Animation.json';

export default function Confirm() {
  return (
    <div>
      <h1 className="text-primary fw-bold">You have submitted successfully</h1>
      <Lottie animationData={Animation} loop={true}/>
    </div>
  )
}
