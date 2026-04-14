import type { Metadata } from 'next';
import GalleryPageContent from '@/components/GalleryPageContent';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    "Take a look at the mouth-watering food at Taty's Chicken. Crispy fried chicken, Latin sides, and more — fresh out the fryer.",
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
