'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ExpandableGallery.module.css';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery/burjkhalifa.jpg',
    alt: 'burj-khalifa',
    title: 'Burj Khalifa',
    description: 'Experience the vibrant atmosphere of Rio\'s most famous beach'
  },
  {
    id: 2,
    src: '/images/gallery/fom.jpg',
    alt: 'future of museum',
    title: 'Future of Meuseum',
    description: 'Discover the wonders of the world\'s largest rainforest'
  },
  {
    id: 3,
    src: '/images/gallery/awp.jpg',
    alt: 'Salvador Historic Center',
    title: 'Aqua Venture Water Park',
    description: 'Explore the colorful colonial architecture of Salvador'
  },
  {
    id: 4,
    src: '/images/gallery/ds.jpg',
    alt: 'Iguazu Falls',
    title: 'Desert Safari Dubai',
    description: 'Witness the power of one of the world\'s largest waterfalls'
  },
  {
    id: 5,
    src: '/images/gallery/df.jpg',
    alt: 'dubai frame',
    title: 'Dubai Frame',
    description: 'Observe exotic wildlife in their natural habitat'
  }
];

const ExpandableGallery = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className={styles.galleryContainer}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Event Gallery
      </motion.h2>
      
      <div className={styles.gallery}>
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            layoutId={`container-${image.id}`}
            className={`${styles.imageContainer} ${selectedId === image.id ? styles.selected : ''}`}
            onClick={() => setSelectedId(selectedId === image.id ? null : image.id)}
            initial={{ borderRadius: 24 }}
            animate={{ 
              flex: selectedId === image.id ? 5 : 1,
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            
            <motion.div 
              className={styles.overlay}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              animate={{ opacity: selectedId === image.id ? 1 : 0 }}
            >
              <motion.h3 
                className={styles.imageTitle}
                layoutId={`title-${image.id}`}
              >
                {image.title}
              </motion.h3>
              
              <AnimatePresence>
                {selectedId === image.id && (
                  <motion.p
                    className={styles.imageDescription}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2 }}
                  >
                    {image.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExpandableGallery;
