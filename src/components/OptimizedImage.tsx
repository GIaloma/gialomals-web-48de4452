
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  sizes = '100vw'
}) => {
  // Extract filename and extension from src
  const getOptimizedSrc = (format: 'webp' | 'avif' | 'original') => {
    if (src.includes('/lovable-uploads/')) {
      const filename = src.split('/').pop()?.split('.')[0];
      switch (format) {
        case 'webp':
          return `/assets/images/optimized/${filename}.webp`;
        case 'avif':
          return `/assets/images/optimized/${filename}.avif`;
        default:
          return src;
      }
    }
    return src;
  };

  // For critical images (logos, hero), we might want to preload
  const preloadLink = priority ? (
    <>
      <link rel="preload" as="image" href={getOptimizedSrc('avif')} type="image/avif" />
      <link rel="preload" as="image" href={getOptimizedSrc('webp')} type="image/webp" />
      <link rel="preload" as="image" href={src} />
    </>
  ) : null;

  return (
    <>
      {preloadLink}
      <picture className={className}>
        <source srcSet={getOptimizedSrc('avif')} type="image/avif" sizes={sizes} />
        <source srcSet={getOptimizedSrc('webp')} type="image/webp" sizes={sizes} />
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          className={className}
          decoding="async"
        />
      </picture>
    </>
  );
};

export default OptimizedImage;
