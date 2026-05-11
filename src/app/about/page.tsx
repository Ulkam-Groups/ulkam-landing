import type { Metadata } from 'next';
import HeritageBanner from '@/components/about/HeritageBanner';
import FoundingStory from '@/components/about/FoundingStory';
import MissionVisionCards from '@/components/about/MissionVisionCards';
import TeamSection from '@/components/about/TeamSection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Discover the story of Ulkam Group — three generations of tea mastery rooted in the Ahom Kingdom heritage of Assam, India.',
};

export default function AboutPage() {
  return (
    <>
      <HeritageBanner />
      <FoundingStory />
      <MissionVisionCards />
      <TeamSection />
    </>
  );
}
