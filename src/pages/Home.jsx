import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureGallery from '../components/FeatureGallery';
import MainGallery from '../components/gallery/MainGallery';
import ReviewsSection from '../components/reviews/ReviewsSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {

    return (
        <>
            <HeroSection />

            <FeatureGallery />

            <MainGallery />

            <ReviewsSection />

            <ContactSection />
        </>
    );
}
