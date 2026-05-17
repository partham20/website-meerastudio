import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

// Import all images with correct relative paths
import wedding1 from '../assets/portfolio/wedding-1.jpg';
import wedding2 from '../assets/portfolio/wedding-2.jpg';
import family1 from '../assets/portfolio/family-1.jpg';
import family2 from '../assets/portfolio/family-2.jpg';
import maternity1 from '../assets/portfolio/maternity-1.jpg';
import maternity2 from '../assets/portfolio/maternity-2.jpg';
import wedding3 from '../assets/portfolio/wedding-3.jpg';
import kids1 from '../assets/portfolio/kids-1.jpg';
import wedding4 from '../assets/portfolio/wedding-4.jpg';
import baby1 from '../assets/portfolio/baby-1.jpg';
import portrait1 from '../assets/portfolio/portrait-1.jpg';
import newborn1 from '../assets/portfolio/newborn-1.jpg';

// categoryIndex maps to t.portfolio.categories — 0=All, 1=Wedding, 2=Family,
// 3=Maternity, 4=Portrait, 5=Kids, 6=Baby, 7=Newborn. Tracking by index keeps
// the active filter valid when the user toggles language.
const portfolioImages: { url: string; categoryIndex: number }[] = [
  { url: wedding1, categoryIndex: 1 },
  { url: wedding2, categoryIndex: 1 },
  { url: family1, categoryIndex: 2 },
  { url: family2, categoryIndex: 2 },
  { url: maternity1, categoryIndex: 3 },
  { url: maternity2, categoryIndex: 3 },
  { url: wedding3, categoryIndex: 1 },
  { url: kids1, categoryIndex: 5 },
  { url: wedding4, categoryIndex: 1 },
  { url: baby1, categoryIndex: 6 },
  { url: portrait1, categoryIndex: 4 },
  { url: newborn1, categoryIndex: 7 },
];

export default function Portfolio() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const localizedImages = portfolioImages.map((img, i) => ({
    ...img,
    title: t.portfolio.items[i].title,
    category: t.portfolio.items[i].category,
    originalIndex: i,
  }));

  const filteredImages =
    activeCategoryIndex === 0
      ? localizedImages
      : localizedImages.filter((img) => img.categoryIndex === activeCategoryIndex);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeLightbox();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  const activeCategoryLabel =
    activeCategoryIndex === 0 ? null : t.portfolio.categories[activeCategoryIndex];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {t.portfolio.subtitle}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {t.portfolio.categories.map((label, i) => (
              <button
                key={i}
                onClick={() => setActiveCategoryIndex(i)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  activeCategoryIndex === i
                    ? 'bg-amber-400 text-black font-semibold'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.originalIndex}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <p className="text-sm font-semibold text-amber-400 mb-1">{image.category}</p>
                  <p className="text-lg font-serif">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show count */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            {t.portfolio.showing(filteredImages.length, portfolioImages.length, activeCategoryLabel)}
          </p>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-amber-400 z-10 p-2"
              aria-label={t.portfolio.closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white hover:text-amber-400 z-10 p-2"
              aria-label={t.portfolio.prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white hover:text-amber-400 z-10 p-2"
              aria-label={t.portfolio.nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div
              className="max-w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
              <p className="text-amber-400 font-semibold">{filteredImages[selectedImage].category}</p>
              <p className="text-lg font-serif">{filteredImages[selectedImage].title}</p>
              <p className="text-sm text-gray-300 mt-1">
                {t.portfolio.counter(selectedImage + 1, filteredImages.length)}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
