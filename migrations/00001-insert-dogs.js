exports.up = async (sql) => {
  const dogs = [
    {
      id: '1',
      name: 'Bullterrier',
      h2: 'Activity: 100',
      p:
        'All puppies should be checked for deafness, which occurs in 20.4% of pure white Bull Terriers and 1.3% of colored Bull Terriers and is difficult to notice, especially in a relatively young puppy. Many Bull Terriers have a tendency to develop skin allergies.Insect bites, such as those from fleas, and sometimes mosquitoes and mites, can produce a generalised allergic response of hives, rash, and itching. This problem can be stopped by keeping the dog free of contact from these insects, but this is definitely a consideration in climates or circumstances where exposure to these insects is inevitable. A UK breed survey puts their median lifespan at 10 years and their mean at 9 years (1 s.f., RSE = 13.87% 2 d. p.), with a good number of dogs living to 10–15 years.',
      src: '/bullterrier-1.jpg',
      className1: 'bullterrier-page',
      className2: 'bullterrier-image',
    },
    {
      id: '2',
      name: 'French Bulldog',
      h2: 'Activity: 50',
      p:
        'Grooming for a French bulldog is fairly easy and requires some brushing as French bulldogs have a short, fine and silky coat. However, as a French bulldog has many wrinkles in the face, it is advised that one should clean between the wrinkles and keep them dry. As most dogs, French bulldogs will need the occasional bath but a brushing should suffice most of the time in order to have hair oils distributed evenly through the coat to maintain a natural shine.',
      src: '/frenchy-1.jpg',
      className1: 'frenchy-page',
      className2: 'frenchy-image',
    },
    {
      id: '3',
      name: 'English Bulldog',
      h2: 'Activity: 0',
      p:
        'Most have a friendly, patient, but stubborn nature. Bulldogs are recognized as excellent family pets because of their tendency to form strong bonds with children.Generally, Bulldogs are known for getting along well with children, other dogs, and other pets.',
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
	DELETE FROM dogs WHERE id = 4
	
	`;
};
