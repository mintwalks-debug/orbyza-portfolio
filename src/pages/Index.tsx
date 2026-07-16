import { useState } from 'react';
import { LoadingScreen } from '../components/LoadingScreen';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { SelectedWorks } from '../components/SelectedWorks';
import { Journal } from '../components/Journal';
import { Explorations } from '../components/Explorations';
import { Stats } from '../components/Stats';
import { ContactFooter } from '../components/ContactFooter';

export function Index() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <Hero />
      <SelectedWorks />
      <Journal />
      <Explorations />
      <Stats />
      <ContactFooter />
    </>
  );
}
