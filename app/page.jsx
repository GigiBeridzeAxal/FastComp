'use client'

import axios from "axios";
import { Stint_Ultra_Expanded } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import  Header from './components/Header'
import  Getstarted from './components/Getstarted'
import  Packets from './components/Packets'
import Aboutus from './components/aboutus'
import End from './components/end'

export default function Home() {



  return (
<>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@600&display=swap" rel="stylesheet"/>
 <Header></Header>
  <Getstarted></Getstarted>
  <Packets></Packets>
   <Aboutus></Aboutus>
   <End></End>
</>



  );
}
