const mockTrainData = [
  {
    name: 'Tokaido Main Line',
    stations: [
      { name: 'totsuka' },
      { name: 'yokohama' },
      { name: 'kawasaki' },
      { name: 'shinagawa' }],
  },
  {
    name: 'Yokosuka Line',
    stations: [
      { name: 'totsuka' },
      { name: 'east totsuka' },
    ],
  },
  {
    name: 'Hakone Tozan Line',
    stations: [
      { name: 'odawara' },
      { name: 'hakone yumoto' },
    ],
  },
];

const mockUserConfig = {
  we: {
    password: 'we',
    config: {
      stations: [
        { name: 'totsuka', fav: true },
        { name: 'shinagawa' },
      ],
      trainlines: [
        { name: 'Tokaidou Main Line', fav: true },
        { name: 'Shounan-Shinjuku Line' },
        { name: 'Hakone Touzan Line', fav: true },
      ],
    },
  },
};

module.exports = {
  mockTrainData,
  mockUserConfig,
};
