//import Image from "next/image";
//import styles from "./page.module.css";
'use client'
 
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()



  return (
    <>
      <p>Child-main</p>;
      <button type="button" onClick={() => router.push('/dashboard')}>Dashboard</button>
    </>
  ); 
}
