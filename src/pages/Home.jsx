import { Suspense, lazy } from 'react';
import HeroSection from '../components/HeroSection';
//const FeatureGallery = lazy(() => import('../components/FeatureGallery'));
const MainGallery = lazy(() => import('../components/gallery/MainGallery'));
const ReviewsSection = lazy(() => import('../components/reviews/ReviewsSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));

export default function HomePage() {

    return (
        <main>
            <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
                <HeroSection />
                {/* 
                <FeatureGallery />
                */}
                <MainGallery />
                <ReviewsSection />
                <ContactSection />
            </Suspense>
        </main>
    );
}
