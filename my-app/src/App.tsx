import { useState } from 'react';
import { StoryList } from './components/StoryList';
import { StoryViewer } from './components/StoryViewer';
import { stories } from './data/stories';
import './App.css';

function App() {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  const handleStoryClick = (userId: string) => {
    setSelectedStory(userId);
  };

  const selectedStoryData = stories.find(story => story.id === selectedStory);

  return (
    <div className="app">
      <div className='logo'>
        <img src='./Instagram_logo.svg' alt='logo'/>
      </div> 
      <StoryList
        stories={stories}
        onStoryClick={handleStoryClick}
      />
      {selectedStory && selectedStoryData && (
        <StoryViewer
          story={selectedStoryData}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </div>
  );
}

export default App;
