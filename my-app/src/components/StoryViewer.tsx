import { useState, useEffect, useCallback } from 'react';
import type { Story } from '../data/stories';
import '../styles/StoryViewer.css';

interface StoryViewerProps {
  story: Story;
  onClose: () => void;
}

export const StoryViewer = ({ story, onClose }: StoryViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const STORY_DURATION = 5000;

  const goToNextStory = useCallback(() => {
    if (currentIndex < story.imageUrl.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setProgress(0);
    } else {
      onClose();
    }
  }, [currentIndex, story.imageUrl.length, onClose]);

  const goToPreviousStory = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setProgress(0);
    }
  }, [currentIndex]);

  const handleClick = (e: React.MouseEvent) => {
    const { clientX } = e;
    const { innerWidth } = window;
    const threshold = innerWidth / 2;

    if (clientX < threshold) {
      goToPreviousStory();
    } else {
      goToNextStory();
    }
  };

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          goToNextStory();
          return 0;
        }
        return prev + (100 / STORY_DURATION) * 100;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPaused, goToNextStory]);

  return (
    <div 
      className="story-viewer"
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="progress-container">
        {story.imageUrl.map((_, index) => (
          <div key={index} className="progress-bar-container">
            <div
              className="progress-bar"
              style={{
                width: `${index < currentIndex ? 100 : index === currentIndex ? progress : 0}%`
              }}
            />
          </div>
        ))}
      </div>

      <button className="close-button" onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}>
        ✕
      </button>

      <span className="username">{story.username}</span>

      <img
        key={currentIndex}
        src={story.imageUrl[currentIndex]}
        alt={`${story.username}'s story`}
        className="story-image"
      />
    </div>
  );
};