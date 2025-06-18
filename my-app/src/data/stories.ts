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
  },
  {
    id: '5',
    imageUrl: ['https://picsum.photos/400/600?random=13'],
    username: 'Mayur'
  },
  {
    id: '6',
    imageUrl: ['https://picsum.photos/400/600?random=10'],
    username: 'mhir'
  },
  {
    id: '7',
    imageUrl: ['https://picsum.photos/400/600?random=11'],
    username: 'palak'
  },
  {
    id: '8',
    imageUrl: ['https://picsum.photos/400/600?random=13'],
    username: 'deepika'
  }
];

export type { Story };