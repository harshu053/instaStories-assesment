import type { Story } from '../data/stories';
import '../styles/StoryList.css';

interface StoryListProps {
  stories: Story[];
  onStoryClick: (userId: string) => void;
}

export const StoryList = ({ stories, onStoryClick }: StoryListProps) => {
  return (
    <div className="story-list">
      {stories.map((story) => (
        <div
          key={story.id}
          className="story-thumbnail"
          onClick={() => onStoryClick(story.id)}
        >
          <img
            src={story.imageUrl[story.imageUrl.length - 1]}
            alt={`${story.username}'s story`}
            className="thumbnail-image"
          />
          <span className="thumbnail-username">{story.username}</span>
        </div>
      ))}
    </div>
  );
};