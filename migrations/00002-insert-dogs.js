exports.up = async (sql) => {
  const dogs = [
    {
      id: '1',
      name: 'Bullterrier',
      h2: 'Activity: 100',

      p:
        'Bull terriers are balanced and well educated. They are particularly good when dealing with people and are suitable as family dogs. They are strong, balanced and active. In addition, bull terriers have a lively, determined and intelligent expression. Bull terriers look very compact and move with light, regular steps and a characteristic maneuverability. \n--- "I know where your socks are, AND I believe you know where the treats are!"',
      src: '/bullterrier-1.jpg',
      className1: 'bullterrier-page',

      className2: 'bullterrier-image',
    },
    {
      id: '2',
      name: 'French Bulldog',
      h2: 'Activity: 50',
      p:
        'The French Bulldog is an Achondroplastic breed - short limbed dwarfism, as seen in Dachshunds, Bassets, Bulldogs, Frenchies, Skye Terriers etc.; all are achondroplastic breeds.Well behaved, adaptable, and comfortable companions with an affectionate nature and even disposition, active, alert and playful. \n--- "I am on a seafood DIET! I SEE food & I EAT it!" ',
      src: '/frenchy-1.jpg',
      className1: 'frenchy-page',
      className2: 'frenchy-image',
    },
    {
      id: '3',
      name: 'English Bulldog',
      h2: 'Activity: 0',
      p:
        'English bulldogs have very low genetic diversity resulting from a small founder population and artificialgenetic bottlenecks. Although some phenotypic and genotypic diversity still exists within the breed, whether it issufficient to use reverse selection to improve health, select against simple recessive deleterioutraits, and/or toaccommodate further genotypic/phenotypic manipulations without further decreasing existing genetic diversityis questionable. \n--- "I snore like a trucker, sometimes I scare MYSELF!"',
      src: '/english-bull-1.jpg',
      className1: 'english-bull-page',
      className2: 'english-bull-image',
    },
  ];
  sql`
	INSERT INTO dogs ${sql(
    dogs,
    'name',
    'h2',
    'p',
    'src',
    'className1',
    'className2',
  )}`;
};

exports.down = async (sql) => {
  sql`
	DELETE FROM dogs WHERE id = 1 and id = 2 and id = 3
	
	`;
};
