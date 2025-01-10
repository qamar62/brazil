'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFloating, offset, shift, flip, arrow, FloatingArrow } from '@floating-ui/react';
import { FaPlane, FaMountain, FaLandmark, FaStar } from 'react-icons/fa';
import styles from './EventTimeline.module.css';

interface TimelineEvent {
  day: number;
  title: string;
  description: string;
  shortDetail: string;
  icon: React.ReactNode;
}

const events: TimelineEvent[] = [
  {
    day: 1,
    title: "Welcome Day",
    description: "Begin your amazing journey with us through Brazil's most exciting destinations",
    shortDetail: "Arrival & Welcome Reception ",
    icon: <FaPlane className={styles.iconStyle} />
  },
  {
    day: 2,
    title: "Adventure Day",
    description: "Explore breathtaking locations and participate in thrilling activities",
    shortDetail: "Outdoor Adventures & Activities ",
    icon: <FaMountain className={styles.iconStyle} />
  },
  {
    day: 3,
    title: "Cultural Day",
    description: "Immerse yourself in Brazilian culture, traditions, and local experiences",
    shortDetail: "Cultural Immersion & Local Life ",
    icon: <FaLandmark className={styles.iconStyle} />
  },
  {
    day: 4,
    title: "Farewell Day",
    description: "Create lasting memories and celebrate your Brazilian adventure",
    shortDetail: "Celebration & Memories ",
    icon: <FaStar className={styles.iconStyle} />
  }
];

const EventTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);
  
  const { refs, floatingStyles, context } = useFloating({
    open: hoveredDay !== null,
    placement: 'top',
    middleware: [offset(10), shift(), flip(), arrow()],
  });

  return (
    <div className={styles.timelineContainer}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Event Journey
      </motion.h2>
      
      <div className={styles.timeline}>
        <div className={styles.timelineLine} />
        
        <div className={styles.eventsContainer}>
          {events.map((event, index) => (
            <motion.div
              key={event.day}
              className={styles.timelineEvent}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className={`${styles.eventCard} ${selectedEvent === index ? styles.selected : ''}`}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
              >
                <div className={styles.eventIcon}>{event.icon}</div>
                <div 
                  className={styles.dayBubble}
                  onMouseEnter={() => setHoveredDay(event.day)}
                  onMouseLeave={() => setHoveredDay(null)}
                  ref={hoveredDay === event.day ? refs.setReference : null}
                >
                  Day {event.day}
                </div>
                {hoveredDay === event.day && (
                  <div
                    ref={refs.setFloating}
                    style={floatingStyles}
                    className={styles.tooltip}
                  >
                    {event.shortDetail}
                    <FloatingArrow ref={refs.setArrow} context={context} className={styles.tooltipArrow} />
                  </div>
                )}
                <h3>{event.title}</h3>
                
                <AnimatePresence>
                  {selectedEvent === index && (
                    <motion.div
                      className={styles.eventDescription}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{event.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
