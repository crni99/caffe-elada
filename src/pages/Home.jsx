import React, { Suspense, lazy } from 'react';
import HeroSection from '../components/HeroSection';
import Preloader from '../components/Preloader';
//const FeatureGallery = lazy(() => import('../components/FeatureGallery'));
const MainGallery = lazy(() => import('../components/gallery/MainGallery'));
const ReviewsSection = lazy(() => import('../components/reviews/ReviewsSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));

export default function HomePage() {

    return (
        <main>
            <HeroSection />
            <Suspense fallback={
                <div style={{
                    minHeight: '80vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    <Preloader />
                </div>
            }>
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
