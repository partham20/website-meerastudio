import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioImages = [
    {
      url: '/images/portfolio/wedding-1.jpg',
      category: 'Wedding',
      title: 'Traditional Wedding Ceremony'
    },
    {
      url: '/images/portfolio/wedding-2.jpg',
      category: 'Wedding',
      title: 'Intimate Wedding Moments'
    },
    {
      url: '/images/portfolio/family-1.jpg',
      category: 'Family',
      title: 'Joyful Children Portrait'
    },
    {
      url: '/images/portfolio/family-2.jpg',
      category: 'Family',
      title: 'Traditional Family Gathering'
    },
    {
      url: '/images/portfolio/maternity-1.jpg',
      category: 'Maternity',
      title: 'Expecting Joy - Creative Collage'
    },
    {
      url: '/images/portfolio/maternity-2.jpg',
      category: 'Maternity',
      title: 'Beautiful Maternity Session'
    },
    {
      url: '/images/portfolio/wedding-3.jpg',
      category: 'Wedding',
      title: 'Bridal Portrait Excellence'
    },
    {
      url: '/images/portfolio/kids-1.jpg',
      category: 'Kids',
      title: 'Creative Kids Photography'
    },
    {
      url: '/images/portfolio/wedding-4.jpg',
      category: 'Wedding',
      title: 'Pre-Wedding Romance'
    },
    {
      url: '/images/portfolio/baby-1.jpg',
      category: 'Baby',
      title: 'Traditional Baby Portrait'
    },
    {
      url: '/images/portfolio/portrait-1.jpg',
      category: 'Portrait',
      title: 'Father & Son Bond'
    },
    {
      url: '/images/portfolio/newborn-1.jpg',
      category: 'Newborn',
      title: 'Peaceful Newborn Session'
    }
  ];

  const categories = ['All', 'Wedding', 'Family', 'Maternity', 'Portrait', 'Kids', 'Baby', 'Newborn'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

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

  // Handle keyboard navigation
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

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Capturing life's precious moments through our lens - from traditional ceremonies to intimate family portraits.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-amber-400 text-black font-semibold'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.category}-${index}`}
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
            Showing {filteredImages.length} of {portfolioImages.length} images
            {activeCategory !== 'All' && ` in ${activeCategory} category`}
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
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white hover:text-amber-400 z-10 p-2"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white hover:text-amber-400 z-10 p-2"
              aria-label="Next image"
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
                {selectedImage + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}