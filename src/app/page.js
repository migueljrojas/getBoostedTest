import Image from 'next/image';
import styles from './home.module.scss';
import {
  Hero,
  Features,
  Spotlight,
  Integrations,
  AboutUs
} from '@/pages/home';

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Features />
      <Spotlight />
      <Integrations />
      <AboutUs />
    </main>
  )
}
