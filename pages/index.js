import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from './../components/Slider';

export default function Home() {
  return (
    <div className=''>
      <Slider />
    </div>
  )
}
