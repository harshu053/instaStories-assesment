interface Story {
  id: string;
  imageUrl:  Array<string>
  username: string;
}

export const stories: Story[] = [
  {
    id: '1',
    imageUrl: ['https://picsum.photos/400/600?random=1','https://picsum.photos/400/600?random=4','https://picsum.photos/400/600?random=5'],
    username: 'Harish'
  },
  {
    id: '2',
    imageUrl: ['https://picsum.photos/400/600?random=2','https://picsum.photos/400/600?random=6'],
    username: 'Dattu'
  },
  {
    id: '3',
    imageUrl: ['https://picsum.photos/400/600?random=3','https://picsum.photos/400/600?random=8'],
    username: 'Pawan'
  },
  {
    id: '4',
    imageUrl: ['https://picsum.photos/400/600?random=4'],
    username: 'Sai'
  }
];

export type { Story };