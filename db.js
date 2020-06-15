const dogs = [
  {
    id: '1',
    className: 'activ',
    src: '/bullterrier.jpg',
    url: '/home/1',
    h3: 'Bullterrier',
    p: 'activity: 100',
  },
  {
    id: '2',
    className: 'middle',
    src: '/favicon.jpg',
    url: '/home/2',
    h3: 'Frenchy',
    p: 'activity:50',
  },
  {
    id: '3',
    className: 'null',
    src: '/englischedogge.jpg',
    url: '/home/3',
    h3: 'English bulldog',
    p: 'activity:0',
  },
];

export function getDogsById(id) {
  return dogs.find((dog) => dog.id === id);
}
