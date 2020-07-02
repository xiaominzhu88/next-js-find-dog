exports.up = async (sql) => {
  const fetchedDogs = [
    {
      bred_for: 'Small rodent hunting, lapdog',
      breed_group: 'Toy',
      height_imperial: '9 - 11.5',
      height_metric: '23 - 29',

      id: '1',
      life_span: '10 - 12 years',
      name: 'Affenpinscher',
      origin: 'Germany, France',
      temperament:
        'Stubborn, Curious, Playful, Adventurous, Active, Fun-loving',
      weight_imperial: '6 - 13',
      weight_metric: '3 - 6',

      url: 'https://cdn2.thedogapi.com/images/Dkqdl0c6N.jpg',
    },

    {
      bred_for: 'Coursing and hunting',
      breed_group: 'Hound',
      country_code: 'AG',
      height_imperial: '25 - 27',
      height_metric: '64 - 69',

      id: '2',
      life_span: '10 - 13 years',
      name: 'Afghan Hound',
      origin: 'Afghanistan, Iran, Pakistan',
      temperament: 'Aloof, Clownish, Dignified, Independent, Happy',
      weight_imperial: '50 - 60',
      weight_metric: '23 - 27',

      url: 'https://cdn2.thedogapi.com/images/4WiUpv_4W.jpg',
    },

    {
      bred_for: 'A wild pack animal',
      height_imperial: '30',
      height_metric: '76',

      id: 3,
      life_span: '11 years',
      name: 'African Hunting Dog',
      origin: '',
      temperament: 'Wild, Hardworking, Dutiful',
      weight_imperial: '44 - 66',
      weight_metric: '20 - 30',

      url: 'https://cdn2.thedogapi.com/images/Z8LiOtceX.jpg',
    },
    {
      bred_for: 'Badger, otter hunting',
      breed_group: 'Terrier',
      height_imperial: '21 - 23',
      height_metric: '53 - 58',

      id: 4,
      life_span: '10 - 13 years',
      name: 'Airedale Terrier',
      origin: 'United Kingdom, England',
      temperament:
        'Outgoing, Friendly, Alert, Confident, Intelligent, Courageous',
      weight_imperial: '40 - 65',
      weight_metric: '18 - 29',

      url: 'https://cdn2.thedogapi.com/images/lNnWNU4qU.jpg',
    },
    {
      bred_for: 'Sheep guarding',
      breed_group: 'Working',
      height_imperial: '28 - 34',
      height_metric: '71 - 86',

      id: 5,
      life_span: '10 - 12 years',
      name: 'Akbash Dog',
      origin: '',
      temperament: 'Loyal, Independent, Intelligent, Brave',
      weight_imperial: '90 - 120',
      weight_metric: '41 - 54',

      url: 'https://cdn2.thedogapi.com/images/fIXRDcKzn.jpg',
    },
    {
      bred_for: 'Hunting bears',
      breed_group: 'Working',
      height_imperial: '24 - 28',
      height_metric: '61 - 71',

      id: 6,
      life_span: '10 - 14 years',
      name: 'Akita',
      temperament:
        'Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous',
      weight_imperial: '65 - 115',
      weight_metric: '29 - 52',

      url: 'https://cdn2.thedogapi.com/images/40bvxOUyl.jpg',
    },
    {
      bred_for: 'Guarding',
      breed_group: 'Mixed',
      description:
        "The Alapaha Blue Blood Bulldog is a well-developed, exaggerated bulldog with a broad head and natural drop ears. The prominent muzzle is covered by loose upper lips. The prominent eyes are set well apart. The Alapaha's coat is relatively short and fairly stiff. Preferred colors are blue merle, brown merle, or red merle all trimmed in white or chocolate and white. Also preferred are the glass eyes (blue) or marble eyes (brown and blue mixed in a single eye). The ears and tail are never trimmed or docked. The body is sturdy and very muscular. The well-muscled hips are narrower than the chest. The straight back is as long as the dog is high at the shoulders. The dewclaws are never removed and the feet are cat-like.",
      height_imperial: '18 - 24',
      height_metric: '46 - 61',

      history: '',
      id: 7,
      life_span: '12 - 13 years',
      name: 'Alapaha Blue Blood Bulldog',
      temperament: 'Loving, Protective, Trainable, Dutiful, Responsible',
      weight_imperial: '55 - 90',
      weight_metric: '25 - 41',

      url: 'https://cdn2.thedogapi.com/images/5hQo-doWf.jpg',
    },
    {
      bred_for: 'Sled pulling',
      breed_group: 'Mixed',
      height_imperial: '23 - 26',
      height_metric: '58 - 66',

      id: 8,
      life_span: '10 - 13 years',
      name: 'Alaskan-Husky',
      temperament: 'Friendly, Energetic, Loyal, Gentle, Confident',
      weight_imperial: '38 - 50',
      weight_metric: '17 - 23',

      url: 'https://cdn2.thedogapi.com/images/LMjrDDwSJ.jpg',
    },
    {
      bred_for: 'Hauling heavy freight, Sled pulling',
      breed_group: 'Working',
      height_imperial: '23 - 25',
      height_metric: '58 - 64',

      id: 9,
      life_span: '12 - 15 years',
      name: 'Alaskan Malamute',
      temperament: 'Friendly, Affectionate, Devoted, Loyal, Dignified, Playful',
      weight_imperial: '65 - 100',
      weight_metric: '29 - 45',

      url: 'https://cdn2.thedogapi.com/images/rJqd1ecV7_1280.jpg',
    },
    {
      breed_group: 'Working',
      height_imperial: '22 - 27',
      height_metric: '56 - 69',

      id: 10,
      life_span: '10 - 12 years',
      name: 'American Bulldog',
      temperament:
        'Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant',
      weight_imperial: '60 - 120',
      weight_metric: '27 - 54',

      url: 'https://cdn2.thedogapi.com/images/pk1AAdloG.jpg',
    },
    {
      bred_for: 'Family companion dog',
      breed_group: '',
      country_code: 'US',
      height_imperial: '14 - 17',
      height_metric: '36 - 43',

      id: 11,
      life_span: '8 – 15 years',
      name: 'American Bully',
      temperament:
        'Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous',
      weight_imperial: '30 - 150',
      weight_metric: '14 - 68',

      url: 'https://cdn2.thedogapi.com/images/34v9aKCct.jpg',
    },
    {
      bred_for: 'Circus performer',
      breed_group: 'Non-Sporting',
      country_code: 'US',
      height_imperial: '15 - 19',
      height_metric: '38 - 48',

      id: 12,
      life_span: '12 - 15 years',
      name: 'American Eskimo Dog',
      temperament: 'Friendly, Alert, Reserved, Intelligent, Protective',
      weight_imperial: '20 - 40',
      weight_metric: '9 - 18',

      url: 'https://cdn2.thedogapi.com/images/EB8A5HQHX.jpg',
    },
    {
      bred_for: 'Companionship',
      country_code: 'US',
      height_imperial: '9 - 12',
      height_metric: '23 - 30',

      id: 13,
      life_span: '13 – 15 years',
      name: 'American Eskimo Dog(Miniature)',
      temperament: 'Friendly, Alert, Reserved, Intelligent, Protective',
      weight_imperial: '7 - 10',
      weight_metric: '3 - 5',

      url: 'https://cdn2.thedogapi.com/images/0yxSqpNj4.jpg',
    },
    {
      bred_for: 'Fox hunting, scent hound',
      breed_group: 'Hound',
      country_code: 'US',
      height_imperial: '21 - 28',
      height_metric: '53 - 71',

      id: 14,
      life_span: '8 - 15 years',
      name: 'American Foxhound',
      temperament:
        'Kind, Sweet-Tempered, Loyal, Independent, Intelligent, Loving',
      weight_imperial: '65 - 75',
      weight_metric: '29 - 34',

      url: 'https://cdn2.thedogapi.com/images/LvKF3cSkb.jpg',
    },
    {
      bred_for: 'Fighting',
      breed_group: 'Terrier',
      country_code: 'US',
      height_imperial: '17 - 21',
      height_metric: '43 - 53',

      id: 15,
      life_span: '10 - 15 years',
      name: 'American Pit Bull Terrier',
      temperament:
        'Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous',
      weight_imperial: '30 - 60',
      weight_metric: '14 - 27',

      url: 'https://cdn2.thedogapi.com/images/HkC31gcNm_1280.png',
    },
    {
      bred_for: '',
      breed_group: 'Terrier',
      country_code: 'US',
      height_imperial: '17 - 19',
      height_metric: '43 - 48',

      id: 16,
      life_span: '12 - 15 years',
      name: 'American Staffordshire Terrier',
      temperament: 'Tenacious, Friendly, Devoted, Loyal, Attentive, Courageous',
      weight_imperial: '50 - 60',
      weight_metric: '23 - 27',

      url: 'https://cdn2.thedogapi.com/images/rJIakgc4m_1280.jpg',
    },
    {
      bred_for: 'Bird flushing and retrieving',
      breed_group: 'Sporting',
      country_code: 'US',
      height_imperial: '15 - 18',
      height_metric: '38 - 46',

      id: 17,
      life_span: '10 - 12 years',
      name: 'American Water Spaniel',
      temperament:
        'Friendly, Energetic, Obedient, Intelligent, Protective, Trainable',
      weight_imperial: '25 - 45',
      weight_metric: '11 - 20',

      url: 'https://cdn2.thedogapi.com/images/SkmRJl9VQ_1280.jpg',
    },
    {
      bred_for: 'Livestock herding',
      breed_group: 'Working',
      height_imperial: '27 - 29',
      height_metric: '69 - 74',

      id: 18,
      life_span: '11 - 13 years',
      name: 'Anatolian Shepherd Dog',
      temperament: 'Steady, Bold, Independent, Confident, Intelligent, Proud',
      weight_imperial: '80 - 150',
      weight_metric: '36 - 68',

      url: 'https://cdn2.thedogapi.com/images/B1uW7l5VX.jpg',
    },
    {
      bred_for: 'Herding livestock, pulling carts, and guarding the farm',
      height_imperial: '20 - 22',
      height_metric: '51 - 56',

      id: 19,
      life_span: '12 – 14 years',
      name: 'Appenzeller Sennenhund',
      temperament: 'Reliable, Fearless, Energetic, Lively, Self-assured',
      weight_imperial: '48 - 55',
      weight_metric: '22 - 25',

      url: 'https://cdn2.thedogapi.com/images/CAy4xLsx6.jpg',
    },
    {
      bred_for: 'Cattle herding, herding trials',
      breed_group: 'Herding',
      country_code: 'AU',
      height_imperial: '17 - 20',
      height_metric: '43 - 51',

      id: 20,
      life_span: '12 - 14 years',
      name: 'Australian Cattle Dog',
      temperament: 'Cautious, Energetic, Loyal, Obedient, Protective, Brave',
      weight_imperial: '44 - 62',
      weight_metric: '20 - 28',

      url: 'https://cdn2.thedogapi.com/images/ZxP-viFTK.jpg',
    },
    {
      bred_for: 'Farm dog, Cattle herding',
      breed_group: 'Herding',
      country_code: 'AU',
      height_imperial: '17 - 20',
      height_metric: '43 - 51',

      id: 21,
      life_span: '10 - 13 years',
      name: 'Australian Kelpie',
      temperament: 'Friendly, Energetic, Alert, Loyal, Intelligent, Eager',
      weight_imperial: '31 - 46',
      weight_metric: '14 - 21',

      url: 'https://cdn2.thedogapi.com/images/Hyq1ge9VQ_1280.jpg',
    },
    {
      bred_for: 'Sheep herding',
      breed_group: 'Herding',
      country_code: 'AU',
      height_imperial: '18 - 23',
      height_metric: '46 - 58',

      id: 22,
      life_span: '12 - 16 years',
      name: 'Australian Shepherd',
      temperament:
        'Good-natured, Affectionate, Intelligent, Active, Protective',
      weight_imperial: '35 - 65',
      weight_metric: '16 - 29',

      url: 'https://cdn2.thedogapi.com/images/B1-llgq4m_1280.jpg',
    },
    {
      bred_for: 'Cattle herdering, hunting snakes and rodents',
      breed_group: 'Terrier',
      country_code: 'AU',
      height_imperial: '10 - 11',
      height_metric: '25 - 28',

      id: 23,
      life_span: '15 years',
      name: 'Australian Terrier',
      temperament:
        'Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous',
      weight_imperial: '14 - 16',
      weight_metric: '6 - 7',

      url: 'https://cdn2.thedogapi.com/images/r1Ylge5Vm_1280.jpg',
    },
    {
      bred_for: 'Livestock guardian, hunting',
      breed_group: 'Hound',
      height_imperial: '23 - 29',
      height_metric: '58 - 74',

      id: 24,
      life_span: '10 - 13 years',
      name: 'Azawakh',
      temperament: 'Aloof, Affectionate, Attentive, Rugged, Fierce, Refined',
      weight_imperial: '33 - 55',
      weight_metric: '15 - 25',

      url: 'https://cdn2.thedogapi.com/images/SkvZgx94m_1280.jpg',
    },
    {
      bred_for: 'Hunting water game',
      height_imperial: '20 - 26',
      height_metric: '51 - 66',

      id: 25,
      life_span: '13 – 15 years',
      name: 'Barbet',
      temperament: 'Obedient, Companionable, Intelligent, Joyful',
      weight_imperial: '40 - 65',
      weight_metric: '18 - 29',

      url: 'https://cdn2.thedogapi.com/images/HyWGexcVQ_1280.jpg',
    },
    {
      bred_for: 'Hunting',
      breed_group: 'Hound',
      height_imperial: '16 - 17',
      height_metric: '41 - 43',

      id: 26,
      life_span: '10 - 12 years',
      name: 'Basenji',
      temperament:
        'Affectionate, Energetic, Alert, Curious, Playful, Intelligent',
      weight_imperial: '22 - 24',
      weight_metric: '10 - 11',

      url: 'https://cdn2.thedogapi.com/images/H1dGlxqNQ_1280.jpg',
    },
    {
      bred_for: 'Hunting on foot.',
      breed_group: 'Hound',
      height_imperial: '13 - 15',
      height_metric: '33 - 38',

      id: 27,
      life_span: '10 - 14 years',
      name: 'Basset Bleu de Gascogne',
      temperament: 'Affectionate, Lively, Agile, Curious, Happy, Active',
      weight_imperial: '35 - 40',
      weight_metric: '16 - 18',

      url: 'https://cdn2.thedogapi.com/images/BkMQll94X_1280.jpg',
    },
    {
      bred_for: 'Hunting by scent',
      breed_group: 'Hound',
      height_imperial: '14',
      height_metric: '36',

      id: 28,
      life_span: '12 - 15 years',
      name: 'Basset Hound',
      temperament:
        'Tenacious, Friendly, Affectionate, Devoted, Sweet-Tempered, Gentle',
      weight_imperial: '50 - 65',
      weight_metric: '23 - 29',

      url: 'https://cdn2.thedogapi.com/images/Sy57xx9EX_1280.jpg',
    },
    {
      bred_for: 'Rabbit, hare hunting',
      breed_group: 'Hound',
      height_imperial: '13 - 15',
      height_metric: '33 - 38',

      id: 29,
      life_span: '13 - 16 years',
      name: 'Beagle',
      temperament:
        'Amiable, Even Tempered, Excitable, Determined, Gentle, Intelligent',
      weight_imperial: '20 - 35',
      weight_metric: '9 - 16',

      url: 'https://cdn2.thedogapi.com/images/Syd4xxqEm_1280.jpg',
    },
    {
      bred_for: 'Sheep herding',
      breed_group: 'Herding',
      height_imperial: '20 - 22',
      height_metric: '51 - 56',

      id: 30,
      life_span: '12 - 14 years',
      name: 'Bearded Collie',
      temperament: 'Self-confidence, Hardy, Lively, Alert, Intelligent, Active',
      weight_imperial: '45 - 55',
      weight_metric: '20 - 25',

      url: 'https://cdn2.thedogapi.com/images/_eGtrKB20.jpg',
    },
    {
      bred_for: 'Boar herding, hunting, guarding',
      breed_group: 'Herding',
      height_imperial: '24 - 27.5',
      height_metric: '61 - 70',

      id: 31,
      life_span: '10 - 12 years',
      name: 'Beauceron',
      temperament: 'Fearless, Friendly, Intelligent, Protective, Calm',
      weight_imperial: '80 - 110',
      weight_metric: '36 - 50',

      url: 'https://cdn2.thedogapi.com/images/HJQ8ge5V7_1280.jpg',
    },
    {
      bred_for: 'Killing rat, badger, other vermin',
      breed_group: 'Terrier',
      height_imperial: '15 - 16',
      height_metric: '38 - 41',

      id: 32,
      life_span: '14 - 16 years',
      name: 'Bedlington Terrier',
      temperament: 'Affectionate, Spirited, Intelligent, Good-tempered',
      weight_imperial: '17 - 23',
      weight_metric: '8 - 10',

      url: 'https://cdn2.thedogapi.com/images/ByK8gx947_1280.jpg',
    },
    {
      bred_for: 'Stock herding',
      breed_group: 'Herding',
      height_imperial: '22 - 26',
      height_metric: '56 - 66',

      id: 33,
      life_span: '12 - 14 years',
      name: 'Belgian Malinois',
      temperament:
        'Watchful, Alert, Stubborn, Friendly, Confident, Hard-working, Active, Protective',
      weight_imperial: '40 - 80',
      weight_metric: '18 - 36',

      url: 'https://cdn2.thedogapi.com/images/r1f_ll5VX_1280.jpg',
    },
    {
      bred_for: 'Guarding, Drafting, Police work.',
      breed_group: 'Herding',
      height_imperial: '22 - 26',
      height_metric: '56 - 66',

      id: 34,
      life_span: '10 - 12 years',
      name: 'Belgian Tervuren',
      temperament:
        'Energetic, Alert, Loyal, Intelligent, Attentive, Protective',
      weight_imperial: '40 - 65',
      weight_metric: '18 - 29',
    },
    {
      bred_for: 'Draft work',
      breed_group: 'Working',
      height_imperial: '23 - 27.5',
      height_metric: '58 - 70',

      id: 35,
      life_span: '7 - 10 years',
      name: 'Bernese Mountain Dog',
      temperament: 'Affectionate, Loyal, Intelligent, Faithful',
      weight_imperial: '65 - 120',
      weight_metric: '29 - 54',

      url: 'https://cdn2.thedogapi.com/images/S1fFlx5Em_1280.jpg',
    },
    {
      bred_for: 'Companion',
      breed_group: 'Non-Sporting',
      height_imperial: '9.5 - 11.5',
      height_metric: '24 - 29',

      id: 36,
      life_span: '15 years',
      name: 'Bichon Frise',
      temperament: 'Feisty, Affectionate, Cheerful, Playful, Gentle, Sensitive',
      weight_imperial: '10 - 18',
      weight_metric: '5 - 8',
    },
    {
      bred_for: 'Hunting raccoons, night hunting',
      breed_group: 'Hound',
      height_imperial: '23 - 27',
      height_metric: '58 - 69',

      id: 37,
      life_span: '10 - 12 years',
      name: 'Black and Tan Coonhound',
      temperament:
        'Easygoing, Gentle, Adaptable, Trusting, Even Tempered, Lovable',
      weight_imperial: '65 - 100',
      weight_metric: '29 - 45',

      url: 'https://cdn2.thedogapi.com/images/HJAFgxcNQ_1280.jpg',
    },
    {
      bred_for: 'Trailing',
      breed_group: 'Hound',
      height_imperial: '23 - 27',
      height_metric: '58 - 69',

      id: 38,
      life_span: '8 - 10 years',
      name: 'Bloodhound',
      temperament: 'Stubborn, Affectionate, Gentle, Even Tempered',
      weight_imperial: '80 - 110',
      weight_metric: '36 - 50',

      url: 'https://cdn2.thedogapi.com/images/Skdcgx9VX_1280.jpg',
    },
    {
      bred_for: 'Hunting with a superior sense of smell.',
      breed_group: 'Hound',
      height_imperial: '21 - 27',
      height_metric: '53 - 69',

      id: 39,
      life_span: '12 - 14 years',
      name: 'Bluetick Coonhound',
      temperament: 'Friendly, Intelligent, Active',
      weight_imperial: '45 - 80',
      weight_metric: '20 - 36',

      url: 'https://cdn2.thedogapi.com/images/rJxieg9VQ_1280.jpg',
    },
    {
      bred_for: 'Guarding the homestead, farm work.',
      breed_group: 'Working',
      height_imperial: '22 - 27',
      height_metric: '56 - 69',

      id: 40,
      life_span: '10 - 12 years',
      name: 'Boerboel',
      temperament: 'Obedient, Confident, Intelligent, Dominant, Territorial',
      weight_imperial: '110 - 200',
      weight_metric: '50 - 91',

      url: 'https://cdn2.thedogapi.com/images/HyOjge5Vm_1280.jpg',
    },
    {
      bred_for: 'Sheep herder',
      breed_group: 'Herding',
      height_imperial: '18 - 22',
      height_metric: '46 - 56',

      id: 41,
      life_span: '12 - 16 years',
      name: 'Border Collie',
      temperament: 'Tenacious, Keen, Energetic, Responsive, Alert, Intelligent',
      weight_imperial: '30 - 45',
      weight_metric: '14 - 20',

      url: 'https://cdn2.thedogapi.com/images/U7OLiFMLX.jpg',
    },
    {
      bred_for: 'Fox bolting, ratting',
      breed_group: 'Terrier',
      height_imperial: '11 - 16',
      height_metric: '28 - 41',

      id: 42,
      life_span: '12 - 14 years',
      name: 'Border Terrier',
      temperament:
        'Fearless, Affectionate, Alert, Obedient, Intelligent, Even Tempered',
      weight_imperial: '11.5 - 15.5',
      weight_metric: '5 - 7',
    },
    {
      bred_for: 'Ratting, Companionship',
      breed_group: 'Non-Sporting',
      height_imperial: '16 - 17',
      height_metric: '41 - 43',

      id: 43,
      life_span: '11 - 13 years',
      name: 'Boston Terrier',
      temperament: 'Friendly, Lively, Intelligent',
      weight_imperial: '10 - 25',
      weight_metric: '5 - 11',

      url: 'https://cdn2.thedogapi.com/images/rkZRggqVX_1280.jpg',
    },
    {
      bred_for: 'Cattle herding',
      breed_group: 'Herding',
      height_imperial: '23.5 - 27.5',
      height_metric: '60 - 70',

      id: 44,
      life_span: '10 - 15 years',
      name: 'Bouvier des Flandres',
      temperament: 'Protective, Loyal, Gentle, Intelligent, Familial, Rational',
      weight_imperial: '70 - 110',
      weight_metric: '32 - 50',

      url: 'https://cdn2.thedogapi.com/images/Byd0xl5VX_1280.jpg',
    },
    {
      bred_for: 'Bull-baiting, guardian',
      breed_group: 'Working',
      height_imperial: '21.5 - 25',
      height_metric: '55 - 64',

      id: 45,
      life_span: '8 - 10 years',
      name: 'Boxer',
      temperament:
        'Devoted, Fearless, Friendly, Cheerful, Energetic, Loyal, Playful, Confident, Intelligent, Bright, Brave, Calm',
      weight_imperial: '50 - 70',
      weight_metric: '23 - 32',

      url: 'https://cdn2.thedogapi.com/images/ry1kWe5VQ_1280.jpg',
    },
    {
      bred_for: 'Turkey retrieving',
      breed_group: 'Sporting',
      height_imperial: '14 - 18',
      height_metric: '36 - 46',

      id: 46,
      life_span: '10 - 14 years',
      name: 'Boykin Spaniel',
      temperament:
        'Friendly, Energetic, Companionable, Intelligent, Eager, Trainable',
      weight_imperial: '25 - 40',
      weight_metric: '11 - 18',
    },
    {
      bred_for: 'Versatile gun dog',
      breed_group: 'Sporting',
      height_imperial: '21.5 - 26.5',
      height_metric: '55 - 67',

      id: 47,
      life_span: '10 - 12 years',
      name: 'Bracco Italiano',
      temperament:
        'Stubborn, Affectionate, Loyal, Playful, Companionable, Trainable',
      weight_imperial: '55 - 88',
      weight_metric: '25 - 40',

      url: 'https://cdn2.thedogapi.com/images/S13yZg5VQ_1280.jpg',
    },
    {
      bred_for: 'Herding, guarding sheep',
      breed_group: 'Herding',
      height_imperial: '22 - 27',
      height_metric: '56 - 69',

      id: 48,
      life_span: '10 - 12 years',
      name: 'Briard',
      temperament:
        'Fearless, Loyal, Obedient, Intelligent, Faithful, Protective',
      weight_imperial: '70 - 90',
      weight_metric: '32 - 41',

      url: 'https://cdn2.thedogapi.com/images/rkVlblcEQ_1280.jpg',
    },
    {
      bred_for: 'Pointing, retrieving',
      breed_group: 'Sporting',
      height_imperial: '17.5 - 20.5',
      height_metric: '44 - 52',

      id: 49,
      life_span: '12 - 14 years',
      name: 'Brittany',
      temperament: 'Agile, Adaptable, Quick, Intelligent, Attentive, Happy',
      weight_imperial: '30 - 45',
      weight_metric: '14 - 20',

      url: 'https://cdn2.thedogapi.com/images/HJWZZxc4X_1280.jpg',
    },
    {
      bred_for: 'Bull baiting, Fighting',
      breed_group: 'Terrier',
      height_imperial: '21 - 22',
      height_metric: '53 - 56',

      id: 50,
      life_span: '10 - 12 years',
      name: 'Bull Terrier',
      temperament: 'Trainable, Protective, Sweet-Tempered, Keen, Active',
      weight_imperial: '50 - 70',
      weight_metric: '23 - 32',

      url: 'https://cdn2.thedogapi.com/images/8WPhRloCS.jpg',
    },
    {
      bred_for: "An elegant man's fashion statement",
      height_imperial: '10 - 14',
      height_metric: '25 - 36',

      id: 51,
      life_span: '11 – 14 years',
      name: 'Bull Terrier(Miniature)',
      temperament:
        'Trainable, Protective, Sweet-Tempered, Keen, Active, Territorial',
      weight_imperial: '25 - 33',
      weight_metric: '11 - 15',

      url: 'https://cdn2.thedogapi.com/images/BkKZWlcVX_1280.jpg',
    },
    {
      bred_for: 'Estate guardian',
      breed_group: 'Working',
      height_imperial: '24 - 27',
      height_metric: '61 - 69',

      id: 52,
      life_span: '8 - 12 years',
      name: 'Bullmastiff',
      temperament:
        'Docile, Reliable, Devoted, Alert, Loyal, Reserved, Loving, Protective, Powerful, Calm, Courageous',
      weight_imperial: '100 - 130',
      weight_metric: '45 - 59',

      url: 'https://cdn2.thedogapi.com/images/r1dgtOnBm_1280.jpg',
    },
    {
      bred_for: 'Bolting of otter, foxes, other vermin',
      breed_group: 'Terrier',
      height_imperial: '9 - 10',
      height_metric: '23 - 25',

      id: 53,
      life_span: '14 - 15 years',
      name: 'Cairn Terrier',
      temperament: 'Hardy, Fearless, Assertive, Gay, Intelligent, Active',
      weight_imperial: '13 - 14',
      weight_metric: '6 - 6',

      url: 'https://cdn2.thedogapi.com/images/Sk7Qbg9E7_1280.jpg',
    },
    {
      bred_for: 'Companion, guard dog, and hunter',
      breed_group: 'Working',
      height_imperial: '23.5 - 27.5',
      height_metric: '60 - 70',

      id: 54,
      life_span: '10 - 11 years',
      name: 'Cane Corso',
      temperament: 'Trainable, Reserved, Stable, Quiet, Even Tempered, Calm',
      weight_imperial: '88 - 120',
      weight_metric: '40 - 54',

      url: 'https://cdn2.thedogapi.com/images/r15m-lc4m_1280.jpg',
    },
    {
      bred_for: 'Cattle droving',
      breed_group: 'Herding',
      height_imperial: '10.5 - 12.5',
      height_metric: '27 - 32',

      id: 55,
      life_span: '12 - 14 years',
      name: 'Cardigan Welsh Corgi',
      temperament:
        'Affectionate, Devoted, Alert, Companionable, Intelligent, Active',
      weight_imperial: '25 - 38',
      weight_metric: '11 - 17',
    },
    {
      bred_for: 'Driving livestock',
      breed_group: 'Herding',
      height_imperial: '20 - 26',
      height_metric: '51 - 66',

      id: 56,
      life_span: '10 - 12 years',
      name: 'Catahoula Leopard Dog',
      temperament:
        'Energetic, Inquisitive, Independent, Gentle, Intelligent, Loving',
      weight_imperial: '50 - 95',
      weight_metric: '23 - 43',

      url: 'https://cdn2.thedogapi.com/images/BJcNbec4X_1280.jpg',
    },
    {
      bred_for:
        'Guard dogs, defending sheep from predators, mainly wolves, jackals and bears',
      breed_group: 'Working',
      height_imperial: '24 - 33.5',
      height_metric: '61 - 85',

      id: 57,
      life_span: '10 - 12 years',
      name: 'Caucasian Shepherd(Ovcharka)',
      temperament: 'Alert, Quick, Dominant, Powerful, Calm, Strong',
      weight_imperial: '80 - 100',
      weight_metric: '36 - 45',

      url: 'https://cdn2.thedogapi.com/images/r1rrWe5Em_1280.jpg',
    },
    {
      bred_for: 'Flushing small birds, companion',
      breed_group: 'Toy',
      height_imperial: '12 - 13',
      height_metric: '30 - 33',

      id: 58,
      life_span: '10 - 14 years',
      name: 'Cavalier King Charles Spaniel',
      temperament:
        'Fearless, Affectionate, Sociable, Patient, Playful, Adaptable',
      weight_imperial: '13 - 18',
      weight_metric: '6 - 8',

      url: 'https://cdn2.thedogapi.com/images/HJRBbe94Q_1280.jpg',
    },
    {
      bred_for: 'Water Retriever',
      breed_group: 'Sporting',
      height_imperial: '21 - 26',
      height_metric: '53 - 66',

      id: 59,
      life_span: '10 - 13 years',
      name: 'Chesapeake Bay Retriever',
      temperament:
        'Affectionate, Intelligent, Quiet, Dominant, Happy, Protective',
      weight_imperial: '55 - 80',
      weight_metric: '25 - 36',

      url: 'https://cdn2.thedogapi.com/images/4UcpAcdLm.jpg',
    },
    {
      bred_for: 'Ratting, lapdog, curio',
      breed_group: 'Toy',
      height_imperial: '11 - 13',
      height_metric: '28 - 33',

      id: 60,
      life_span: '10 - 14 years',
      name: 'Chinese Crested',
      temperament:
        'Affectionate, Sweet-Tempered, Lively, Alert, Playful, Happy',
      weight_imperial: '10 - 13',
      weight_metric: '5 - 6',

      url: 'https://cdn2.thedogapi.com/images/B1pDZx9Nm_1280.jpg',
    },
    {
      bred_for: 'Fighting',
      breed_group: 'Non-Sporting',
      height_imperial: '18 - 20',
      height_metric: '46 - 51',

      id: 61,
      life_span: '10 years',
      name: 'Chinese Shar Pei',
      temperament:
        'Suspicious, Affectionate, Devoted, Reserved, Independent, Loving',
      weight_imperial: '45 - 60',
      weight_metric: '20 - 27',

      url: 'https://cdn2.thedogapi.com/images/B1ruWl94Q_1280.jpg',
    },
    {
      bred_for: 'Sled pulling',
      breed_group: 'Working',
      height_imperial: '22 - 26',
      height_metric: '56 - 66',

      id: 62,
      life_span: '12 - 15 years',
      name: 'Chinook',
      temperament: 'Friendly, Alert, Dignified, Intelligent, Calm',
      weight_imperial: '50 - 90',
      weight_metric: '23 - 41',

      url: 'https://cdn2.thedogapi.com/images/Sypubg54Q_1280.jpg',
    },
    {
      bred_for: 'Guardian, cart pulling, hunting',
      breed_group: 'Non-Sporting',
      height_imperial: '17 - 20',
      height_metric: '43 - 51',

      id: 63,
      life_span: '12 - 15 years',
      name: 'Chow Chow',
      temperament: 'Aloof, Loyal, Independent, Quiet',
      weight_imperial: '40 - 70',
      weight_metric: '18 - 32',

      url: 'https://cdn2.thedogapi.com/images/ry8KWgqEQ_1280.jpg',
    },
    {
      bred_for: 'Bird flushing, retrieving',
      breed_group: 'Sporting',
      height_imperial: '17 - 20',
      height_metric: '43 - 51',

      id: 64,
      life_span: '10 - 12 years',
      name: 'Clumber Spaniel',
      temperament:
        'Affectionate, Loyal, Dignified, Gentle, Calm, Great-hearted',
      weight_imperial: '55 - 85',
      weight_metric: '25 - 39',

      url: 'https://cdn2.thedogapi.com/images/rkeqWgq4Q_1280.jpg',
    },
    {
      bred_for: 'Bird flushing, retrieving',
      breed_group: 'Sporting',
      height_imperial: '14 - 15',
      height_metric: '36 - 38',

      id: 65,
      life_span: '12 - 15 years',
      name: 'Cocker Spaniel',
      temperament:
        'Trainable, Friendly, Affectionate, Playful, Quiet, Faithful',
      weight_imperial: '20 - 30',
      weight_metric: '9 - 14',

      url: 'https://cdn2.thedogapi.com/images/2v2nAUTLB.jpg',
    },
    {
      bred_for: 'Hunting the American woodcock',
      breed_group: 'Sporting',
      height: {
        imperial: '14 - 15',
        metric: '36 - 38',
      },
      id: 66,
      life_span: '12 - 15 years',
      name: 'Cocker-Spaniel(American)',
      temperament: 'Outgoing, Sociable, Trusting, Joyful, Even Tempered, Merry',
      weight: {
        imperial: '20 - 30',
        metric: '9 - 14',
      },
      url: 'https://cdn2.thedogapi.com/images/HkRcZe547_1280.jpg',
    },
    {
      bred_for:
        'Accompanying ladies on long sea voyages, ratters onboard ship.',
      breed_group: 'Non-Sporting',
      height: {
        imperial: '9 - 11',
        metric: '23 - 28',
      },
      id: 67,
      life_span: '13 - 16 years',
      name: 'Coton-de-Tulear',
      temperament:
        'Affectionate, Lively, Playful, Intelligent, Trainable, Vocal',
      weight: {
        imperial: '9 - 15',
        metric: '4 - 7',
      },
      url: 'https://cdn2.thedogapi.com/images/SyviZlqNm_1280.jpg',
    },
    {
      bred_for:
        'Carriage dog - trot alongside carriages to protect the occupants from banditry or other interference',
      breed_group: 'Non-Sporting',
      height: {
        imperial: '19 - 23',
        metric: '48 - 58',
      },
      id: 68,
      life_span: '10 - 13 years',
      name: 'Dalmatian',
      temperament:
        'Outgoing, Friendly, Energetic, Playful, Sensitive, Intelligent, Active',
      weight: {
        imperial: '50 - 55',
        metric: '23 - 25',
      },
      url: 'https://cdn2.thedogapi.com/images/SkJ3blcN7_1280.jpg',
    },
    {
      bred_for: 'Guardian',
      breed_group: 'Working',
      height: {
        imperial: '24 - 28',
        metric: '61 - 71',
      },
      id: 69,
      life_span: '10 years',
      name: 'Doberman-Pinscher',
      temperament:
        'Fearless, Energetic, Alert, Loyal, Obedient, Confident, Intelligent',
      weight: {
        imperial: '66 - 88',
        metric: '30 - 40',
      },
      url: 'https://cdn2.thedogapi.com/images/HJyvFu2Sm_1280.jpg',
    },
    {
      bred_for: 'Big-game hunting',
      breed_group: 'Working',
      height: {
        imperial: '23.5 - 27',
        metric: '60 - 69',
      },
      id: 70,
      life_span: '10 - 12 years',
      name: 'Dogo-Argentino',
      temperament:
        'Friendly, Affectionate, Cheerful, Loyal, Tolerant, Protective',
      weight: {
        imperial: '80 - 100',
        metric: '36 - 45',
      },
      url: 'https://cdn2.thedogapi.com/images/S1nhWx94Q_1280.jpg',
    },
    {
      bred_for: 'Farms, watchdog, guard duty',
      height: {
        imperial: '22 - 24.5',
        metric: '56 - 62',
      },
      id: 71,
      life_span: '15 years',
      name: 'Dutch-Shepherd',
      temperament: 'Reliable, Affectionate, Alert, Loyal, Obedient, Trainable',
      weight: {
        imperial: '50 - 70',
        metric: '23 - 32',
      },
      url: 'https://cdn2.thedogapi.com/images/BkE6Wg5E7_1280.jpg',
    },
    {
      bred_for: 'Bird setting, retrieving',
      breed_group: 'Sporting',
      height: {
        imperial: '24 - 25',
        metric: '61 - 64',
      },
      id: 72,
      life_span: '12 years',
      name: 'English-Setter',
      temperament:
        'Strong Willed, Mischievous, Affectionate, Energetic, Playful, Companionable, Gentle, Hard-working, Intelligent, Eager, People-Oriented',
      weight: {
        imperial: '45 - 80',
        metric: '20 - 36',
      },
      url: 'https://cdn2.thedogapi.com/images/By4A-eqVX_1280.jpg',
    },
    {
      bred_for: 'Herding & guarding livestock, farm watch dog',
      breed_group: 'Working',
      height: {
        imperial: '18 - 23',
        metric: '46 - 58',
      },
      id: 73,
      life_span: '10 - 13 years',
      name: 'English-Shepherd',
      temperament:
        'Kind, Energetic, Independent, Adaptable, Intelligent, Bossy',
      weight: {
        imperial: '44 - 66',
        metric: '20 - 30',
      },
      url: 'https://cdn2.thedogapi.com/images/ByCyKunBQ_1280.jpg',
    },
    {
      bred_for: 'Bird flushing, retrieving',
      breed_group: 'Sporting',
      height: {
        imperial: '19 - 20',
        metric: '48 - 51',
      },
      id: 74,
      life_span: '12 - 14 years',
      name: 'English-Springer-Spaniel',
      temperament:
        'Affectionate, Cheerful, Alert, Intelligent, Attentive, Active',
      weight: {
        imperial: '35 - 50',
        metric: '16 - 23',
      },
      url: 'https://cdn2.thedogapi.com/images/Hk0Jfe5VQ_1280.jpg',
    },
    {
      bred_for: 'Companion of kings',
      breed_group: 'Toy',
      height: {
        imperial: '10',
        metric: '25',
      },
      id: 75,
      life_span: '10 - 12 years',
      name: 'English-Toy-Spaniel',
      temperament: 'Affectionate, Reserved, Playful, Gentle, Happy, Loving',
      weight: {
        imperial: '8 - 14',
        metric: '4 - 6',
      },
      url: 'https://cdn2.thedogapi.com/images/SkIgzxqNQ_1280.jpg',
    },
    {
      bred_for: 'Rat-baiting',
      height: {
        imperial: '10 - 12',
        metric: '25 - 30',
      },
      id: 76,
      life_span: '12 - 13 years',
      name: 'English-Toy-Terrier',
      temperament:
        'Stubborn, Alert, Companionable, Intelligent, Cunning, Trainable',
      weight: {
        imperial: '6 - 8',
        metric: '3 - 4',
      },
      url: 'https://cdn2.thedogapi.com/images/SJ6eMxqEQ_1280.jpg',
    },
    {
      bred_for: 'Companionship',
      breed_group: 'Non-Sporting',
      height: {
        imperial: '20.5 - 23.5',
        metric: '52 - 60',
      },
      id: 77,
      life_span: '12 - 14 years',
      name: 'Eurasier',
      temperament:
        'Alert, Reserved, Intelligent, Even Tempered, Watchful, Calm',
      weight: {
        imperial: '40 - 70',
        metric: '18 - 32',
      },
      url: 'https://cdn2.thedogapi.com/images/S1VWGx9Nm_1280.jpg',
    },
    {
      bred_for: 'Bird flushing, retrieving',
      breed_group: 'Sporting',
      height: {
        imperial: '17 - 18',
        metric: '43 - 46',
      },
      id: 78,
      life_span: '11 - 15 years',
      name: 'Field-Spaniel',
      temperament: 'Docile, Cautious, Sociable, Sensitive, Adaptable, Familial',
      weight: {
        imperial: '35 - 50',
        metric: '16 - 23',
      },
      url: 'https://cdn2.thedogapi.com/images/SkJfGecE7_1280.jpg',
    },
    {
      bred_for: 'Herding reindeer',
      breed_group: 'Herding',
      height: {
        imperial: '16 - 21',
        metric: '41 - 53',
      },
      id: 79,
      life_span: '12 - 15 years',
      name: 'Finnish-Lapphund',
      temperament: 'Friendly, Keen, Faithful, Calm, Courageous',
      weight: {
        imperial: '33 - 53',
        metric: '15 - 24',
      },
      url: 'https://cdn2.thedogapi.com/images/S1KMGg5Vm_1280.jpg',
    },
    {
      bred_for: 'Hunting birds, small mammals',
      breed_group: 'Non-Sporting',
      height: {
        imperial: '15.5 - 20',
        metric: '39 - 51',
      },
      id: 80,
      life_span: '12 - 15 years',
      name: 'Finnish-Spitz',
      temperament: 'Playful, Loyal, Independent, Intelligent, Happy, Vocal',
      weight: {
        imperial: '23 - 28',
        metric: '10 - 13',
      },
      url: 'https://cdn2.thedogapi.com/images/6_lwtm_Zr.jpg',
    },
    {
      bred_for: 'Lapdog',
      breed_group: 'Non-Sporting',
      height: {
        imperial: '11 - 12',
        metric: '28 - 30',
      },
      id: 81,
      life_span: '9 - 11 years',
      name: 'French-Bulldog',
      temperament:
        'Playful, Affectionate, Keen, Sociable, Lively, Alert, Easygoing, Patient, Athletic, Bright',
      weight: {
        imperial: '28',
        metric: '13',
      },
      url: 'https://cdn2.thedogapi.com/images/HyWNfxc47_1280.jpg',
    },
    {
      bred_for: 'Watchdog, Hunting vermin on the farm.',
      breed_group: 'Working',
      height: {
        imperial: '17 - 20',
        metric: '43 - 51',
      },
      id: 82,
      life_span: '12 - 14 years',
      name: 'German-Pinscher',
      temperament:
        'Spirited, Lively, Intelligent, Loving, Even Tempered, Familial',
      weight: {
        imperial: '25 - 45',
        metric: '11 - 20',
      },
      url: 'https://cdn2.thedogapi.com/images/B1u4zgqE7_1280.jpg',
    },
    {
      bred_for: 'Herding, Guard dog',
      breed_group: 'Herding',
      height: {
        imperial: '22 - 26',
        metric: '56 - 66',
      },
      id: 83,
      life_span: '10 - 13 years',
      name: 'German-Shepherd-Dog',
      temperament:
        'Alert, Loyal, Obedient, Curious, Confident, Intelligent, Watchful, Courageous',
      weight: {
        imperial: '50 - 90',
        metric: '23 - 41',
      },
      url: 'https://cdn2.thedogapi.com/images/SJyBfg5NX_1280.jpg',
    },
    {
      bred_for: 'General hunting',
      breed_group: 'Sporting',
      height: {
        imperial: '21 - 25',
        metric: '53 - 64',
      },
      id: 84,
      life_span: '12 - 14 years',
      name: 'German-Shorthaired-Pointer',
      temperament:
        'Boisterous, Bold, Affectionate, Intelligent, Cooperative, Trainable',
      weight: {
        imperial: '45 - 70',
        metric: '20 - 32',
      },
    },
    {
      bred_for: 'Herding, guarding',
      breed_group: 'Working',
      height: {
        imperial: '23.5 - 27.5',
        metric: '60 - 70',
      },
      id: 85,
      life_span: '10 - 12 years',
      name: 'Giant-Schnauzer',
      temperament:
        'Strong Willed, Kind, Loyal, Intelligent, Dominant, Powerful',
      weight: {
        imperial: '65 - 90',
        metric: '29 - 41',
      },
    },
    {
      bred_for: 'Rid the home and farm of vermin, and hunt badger and fox',
      breed_group: 'Terrier',
      height: {
        imperial: '12.5 - 14',
        metric: '32 - 36',
      },
      id: 86,
      life_span: '12 - 15 years',
      name: 'Glen-of-Imaal-Terrier',
      temperament: 'Spirited, Agile, Loyal, Gentle, Active, Courageous',
      weight: {
        imperial: '32 - 40',
        metric: '15 - 18',
      },
      url: 'ttps://cdn2.thedogapi.com/images/H1oLMe94m_1280.jpg',
    },
    {
      bred_for: 'Retrieving',
      breed_group: 'Sporting',
      height: {
        imperial: '21.5 - 24',
        metric: '55 - 61',
      },
      id: 87,
      life_span: '10 - 12 years',
      name: 'Golden-Retriever',
      temperament:
        'Intelligent, Kind, Reliable, Friendly, Trustworthy, Confident',
      weight: {
        imperial: '55 - 75',
        metric: '25 - 34',
      },
      url: 'https://cdn2.thedogapi.com/images/HJ7Pzg5EQ_1280.jpg',
    },
    {
      bred_for: 'Find and point gamebirds',
      breed_group: 'Sporting',
      height: {
        imperial: '23 - 27',
        metric: '58 - 69',
      },
      id: 88,
      life_span: '10 - 12 years',
      name: 'Gordon-Setter',
      temperament: 'Fearless, Alert, Loyal, Confident, Gay, Eager',
      weight: {
        imperial: '45 - 80',
        metric: '20 - 36',
      },
    },
    {
      bred_for: 'Hunting & holding boars, Guardian',
      breed_group: 'Working',
      height: {
        imperial: '28 - 32',
        metric: '71 - 81',
      },
      id: 89,
      life_span: '7 - 10 years',
      name: 'Great-Dane',
      temperament: 'Friendly, Devoted, Reserved, Gentle, Confident, Loving',
      weight: {
        imperial: '110 - 190',
        metric: '50 - 86',
      },
      url: 'https://cdn2.thedogapi.com/images/B1Edfl9NX_1280.jpg',
    },
    {
      bred_for: 'Sheep guardian',
      breed_group: 'Working',
      height: {
        imperial: '25 - 32',
        metric: '64 - 81',
      },
      id: 90,
      life_span: '10 - 12 years',
      name: 'Great-Pyrenees',
      temperament:
        'Strong Willed, Fearless, Affectionate, Patient, Gentle, Confident',
      weight: {
        imperial: '85 - 115',
        metric: '39 - 52',
      },
      url: 'https://cdn2.thedogapi.com/images/B12uzg9V7_1280.png',
    },
    {
      bred_for: 'Coursing hares',
      breed_group: 'Hound',
      height: {
        imperial: '27 - 30',
        metric: '69 - 76',
      },
      id: 91,
      life_span: '10 - 13 years',
      name: 'Greyhound',
      temperament:
        'Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered',
      weight: {
        imperial: '50 - 70',
        metric: '23 - 32',
      },
      url: 'https://cdn2.thedogapi.com/images/ryNYMx94X_1280.jpg',
    },
    {
      bred_for: 'Hunt and kill vermin in stables',
      height: {
        imperial: '9 - 11',
        metric: '23 - 28',
      },
      id: 92,
      life_span: '10 – 15 years',
      name: 'Griffon-Bruxellois',
      temperament:
        'Self-important, Inquisitive, Alert, Companionable, Sensitive, Watchful',
      weight: {
        imperial: '12',
        metric: '5',
      },
      url: 'https://cdn2.thedogapi.com/images/ryoYGec4Q_1280.jpg',
    },
    {
      bred_for: 'Hunting hares by trailing them',
      breed_group: 'Hound',
      height: {
        imperial: '18 - 22',
        metric: '46 - 56',
      },
      id: 93,
      life_span: '12 - 15 years',
      name: 'Harrier',
      temperament:
        'Outgoing, Friendly, Cheerful, Sweet-Tempered, Tolerant, Active',
      weight: {
        imperial: '40 - 60',
        metric: '18 - 27',
      },
      url: 'https://cdn2.thedogapi.com/images/B1IcfgqE7_1280.jpg',
    },
    {
      bred_for: 'Companionship',
      breed_group: 'Toy',
      height: {
        imperial: '8.5 - 11.5',
        metric: '22 - 29',
      },
      id: 94,
      life_span: '14 - 15 years',
      name: 'Havanese',
      temperament:
        'Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent',
      weight: {
        imperial: '7 - 13',
        metric: '3 - 6',
      },
      url: 'https://cdn2.thedogapi.com/images/rkXiGl9V7_1280.jpg',
    },
    {
      bred_for: 'Bird setting, retrieving',
      breed_group: 'Sporting',
      height: {
        imperial: '24 - 27',
        metric: '61 - 69',
      },
      id: 95,
      life_span: '10 - 11 years',
      name: 'Irish-Setter',
      temperament:
        'Affectionate, Energetic, Lively, Independent, Playful, Companionable',
      weight: {
        imperial: '35 - 70',
        metric: '16 - 32',
      },
    },
    {
      breed_group: 'Terrier',
      height: {
        imperial: '18',
        metric: '46',
      },
      id: 96,
      life_span: '12 - 16 years',
      name: 'Irish-Terrier',
      temperament:
        'Respectful, Lively, Intelligent, Dominant, Protective, Trainable',
      weight: {
        imperial: '25 - 27',
        metric: '11 - 12',
      },
      url: 'https://cdn2.thedogapi.com/images/By-hGecVX_1280.jpg',
    },
    {
      bred_for: 'Coursing wolves, elk',
      breed_group: 'Hound',
      height: {
        imperial: '30 - 35',
        metric: '76 - 89',
      },
      id: 97,
      life_span: '6 - 8 years',
      name: 'Irish-Wolfhound',
      temperament:
        'Sweet-Tempered, Loyal, Dignified, Patient, Thoughtful, Generous',
      weight: {
        imperial: '105 - 180',
        metric: '48 - 82',
      },
      url: 'https://cdn2.thedogapi.com/images/Hyd2zgcEX_1280.jpg',
    },
    {
      bred_for: 'Lapdog',
      breed_group: 'Toy',
      height: {
        imperial: '13 - 15',
        metric: '33 - 38',
      },
      id: 98,
      life_span: '12 - 15 years',
      name: 'Italian-Greyhound',
      temperament:
        'Mischievous, Affectionate, Agile, Athletic, Companionable, Intelligent',
      weight: {
        imperial: '7 - 15',
        metric: '3 - 7',
      },
      url: 'https://cdn2.thedogapi.com/images/SJAnzg9NX_1280.jpg',
    },
    {
      bred_for: 'Lapdog',
      breed_group: 'Toy',
      height: {
        imperial: '8 - 11',
        metric: '20 - 28',
      },
      id: 99,
      life_span: '12 - 14 years',
      name: 'Japanese-Chin',
      temperament: 'Alert, Loyal, Independent, Intelligent, Loving, Cat-like',
      weight: {
        imperial: '4 - 9',
        metric: '2 - 4',
      },
      url: 'https://cdn2.thedogapi.com/images/r1H6feqEm_1280.jpg',
    },
    {
      bred_for: 'Companion',
      height: {
        imperial: '12 - 15',
        metric: '30 - 38',
      },
      id: 100,
      life_span: '10 – 16 years',
      name: 'Japanese-Spitz',
      temperament:
        'Affectionate, Obedient, Playful, Companionable, Intelligent, Proud',
      weight: {
        imperial: '15 - 19',
        metric: '7 - 9',
      },
      url: 'ttps://cdn2.thedogapi.com/images/HksaMxqNX_1280.jpg',
    },
    {
      bred_for: 'Barge watchdog',
      breed_group: 'Non-Sporting',
      height: {
        imperial: '17 - 18',
        metric: '43 - 46',
      },
      id: 101,
      life_span: '12 - 15 years',
      name: 'Keeshond',
      temperament: 'Agile, Obedient, Playful, Quick, Sturdy, Bright',
      weight: {
        imperial: '35 - 45',
        metric: '16 - 20',
      },
      url: 'https://cdn2.thedogapi.com/images/S1GAGg9Vm_1280.jpg',
    },
    {
      bred_for: 'Sheep guardian',
      breed_group: 'Working',
      height: {
        imperial: '25.5 - 27.5',
        metric: '65 - 70',
      },
      id: 102,
      life_span: '10 - 12 years',
      name: 'Komondor',
      temperament: 'Steady, Fearless, Affectionate, Independent, Gentle, Calm',
      weight: {
        imperial: '80 - 100',
        metric: '36 - 45',
      },
      url: 'https://cdn2.thedogapi.com/images/Bko0fl547_1280.jpg',
    },
    {
      bred_for: 'Luring ducks into traps - "tolling"',
      breed_group: 'Sporting',
      height: {
        imperial: '14 - 16',
        metric: '36 - 41',
      },
      id: 103,
      life_span: '12 - 15 years',
      name: 'Kooikerhondje',
      temperament: 'Benevolent, Agile, Alert, Intelligent, Active, Territorial',
      weight: {
        imperial: '20 - 30',
        metric: '9 - 14',
      },
      url: 'https://cdn2.thedogapi.com/images/omhpknDX6.jpg',
    },
    {
      bred_for: 'Guardian, hunting large game',
      breed_group: 'Working',
      height: {
        imperial: '26 - 30',
        metric: '66 - 76',
      },
      id: 104,
      life_span: '8 - 10 years',
      name: 'Kuvasz',
      temperament:
        'Clownish, Loyal, Patient, Independent, Intelligent, Protective',
      weight: {
        imperial: '70 - 115',
        metric: '32 - 52',
      },
    },
    {
      bred_for: 'Water retrieving',
      breed_group: 'Sporting',
      height: {
        imperial: '21.5 - 24.5',
        metric: '55 - 62',
      },
      id: 105,
      life_span: '10 - 13 years',
      name: 'Labrador-Retriever',
      temperament:
        'Kind, Outgoing, Agile, Gentle, Intelligent, Trusting, Even Tempered',
      weight: {
        imperial: '55 - 80',
        metric: '25 - 36',
      },
      url: 'https://cdn2.thedogapi.com/images/B1uW7l5VX_1280.jpg',
    },
    {
      bred_for: 'Water retrieval dog in the marshes of Romagna',
      breed_group: 'Sporting',
      height: {
        imperial: '16 - 19',
        metric: '41 - 48',
      },
      id: 106,
      life_span: '14 - 16 years',
      name: 'Lagotto-Romagnolo',
      temperament: 'Keen, Loyal, Companionable, Loving, Active, Trainable',
      weight: {
        imperial: '24 - 35',
        metric: '11 - 16',
      },
      url: 'https://cdn2.thedogapi.com/images/ryzzmgqE7_1280.jpg',
    },
    {
      bred_for: 'Cattle herding, Ratting, Driving cattle to market.',
      height: {
        imperial: '10 - 12',
        metric: '25 - 30',
      },
      id: 107,
      life_span: '12 – 15 years',
      name: 'Lancashire-Heeler',
      temperament: 'Clever, Friendly, Alert, Intelligent',
      weight: {
        imperial: '6 - 13',
        metric: '3 - 6',
      },
      url: 'https://cdn2.thedogapi.com/images/S1RGml5Em_1280.jpg',
    },
    {
      bred_for: 'Guardian, appearance.',
      breed_group: 'Working',
      height: {
        imperial: '25.5 - 31.5',
        metric: '65 - 80',
      },
      id: 108,
      life_span: '6 - 8 years',
      name: 'Leonberger',
      temperament:
        'Obedient, Fearless, Loyal, Companionable, Adaptable, Loving',
      weight: {
        imperial: '120 - 170',
        metric: '54 - 77',
      },
      url: 'https://cdn2.thedogapi.com/images/ByrmQlqVm_1280.jpg',
    },
    {
      bred_for: 'Guarding inside the home, companion',
      breed_group: 'Non-Sporting',
      height: {
        imperial: '10 - 11',
        metric: '25 - 28',
      },
      id: 109,
      life_span: '12 - 15 years',
      name: 'Lhasa-Apso',
      temperament:
        'Steady, Fearless, Friendly, Devoted, Assertive, Spirited, Energetic, Lively, Alert, Obedient, Playful, Intelligent',
      weight: {
        imperial: '12 - 18',
        metric: '5 - 8',
      },
      url: 'https://cdn2.thedogapi.com/images/SJp7Qe5EX_1280.jpg',
    },
    {
      bred_for: 'Lapdog',
      breed_group: 'Toy',
      height: {
        imperial: '8 - 10',
        metric: '20 - 25',
      },
      id: 110,
      life_span: '15 - 18 years',
      name: 'Maltese',
      temperament:
        'Playful, Docile, Fearless, Affectionate, Sweet-Tempered, Lively, Responsive, Easygoing, Gentle, Intelligent, Active',
      weight: {
        imperial: '4 - 7',
        metric: '2 - 3',
      },
      url: 'https://cdn2.thedogapi.com/images/B1SV7gqN7_1280.jpg',
    },
    {
      breed_group: 'Herding',
      height: {
        imperial: '13 - 18',
        metric: '33 - 46',
      },
      id: 111,
      life_span: '12 - 15 years',
      name: 'Miniature-American-Shepherd',
      temperament: 'Energetic, Loyal, Intelligent, Trainable',
      weight: {
        imperial: '20 - 40',
        metric: '9 - 18',
      },
      url: 'https://cdn2.thedogapi.com/images/BkHHQgcN7_1280.jpg',
    },
    {
      bred_for: 'Small vermin hunting',
      breed_group: 'Toy',
      height: {
        imperial: '10 - 12.5',
        metric: '25 - 32',
      },
      id: 112,
      life_span: '15 years',
      name: 'Miniature-Pinscher',
      temperament: 'Clever, Outgoing, Friendly, Energetic, Responsive, Playful',
      weight: {
        imperial: '8 - 11',
        metric: '4 - 5',
      },
      url: 'https://cdn2.thedogapi.com/images/Hy3H7g94X_1280.jpg',
    },
    {
      bred_for: 'Ratting',
      breed_group: 'Terrier',
      height: {
        imperial: '12 - 14',
        metric: '30 - 36',
      },
      id: 113,
      life_span: '12 - 14 years',
      name: 'Miniature-Schnauzer',
      temperament: 'Fearless, Friendly, Spirited, Alert, Obedient, Intelligent',
      weight: {
        imperial: '11 - 20',
        metric: '5 - 9',
      },
      url: 'https://cdn2.thedogapi.com/images/SJIUQl9NX_1280.jpg',
    },
    {
      bred_for: 'All purpose water dog, fishing aid',
      breed_group: 'Working',
      height: {
        imperial: '26 - 28',
        metric: '66 - 71',
      },
      id: 114,
      life_span: '8 - 10 years',
      name: 'Newfoundland',
      temperament: 'Sweet-Tempered, Gentle, Trainable',
      weight: {
        imperial: '100 - 150',
        metric: '45 - 68',
      },
    },
    {
      bred_for: 'Ratting, fox bolting',
      breed_group: 'Terrier',
      height: {
        imperial: '9 - 10',
        metric: '23 - 25',
      },
      id: 115,
      life_span: '12 - 15 years',
      name: 'Norfolk-Terrier',
      temperament:
        'Self-confidence, Fearless, Spirited, Companionable, Happy, Lovable',
      weight: {
        imperial: '11 - 12',
        metric: '5 - 5',
      },
      url: 'https://cdn2.thedogapi.com/images/B1ADQg94X_1280.jpg',
    },
    {
      bred_for: 'Ratting, fox bolting',
      breed_group: 'Terrier',
      height: {
        imperial: '10',
        metric: '25',
      },
      id: 116,
      life_span: '12 - 15 years',
      name: 'Norwich-Terrier',
      temperament: 'Hardy, Affectionate, Energetic, Sensitive, Intelligent',
      weight: {
        imperial: '11 - 12',
        metric: '5 - 5',
      },
      url: 'https://cdn2.thedogapi.com/images/BkgKXlqE7_1280.jpg',
    },
    {
      breed_group: 'Sporting',
      height: {
        imperial: '17 - 21',
        metric: '43 - 53',
      },
      id: 117,
      life_span: '12 - 14 years',
      name: 'Nova-Scotia-Duck-Tolling-Retriever',
      temperament: 'Outgoing, Alert, Patient, Intelligent, Loving',
      weight: {
        imperial: '35 - 50',
        metric: '16 - 23',
      },
    },
    {
      bred_for: 'Driving sheep, cattle',
      breed_group: 'Herding',
      height: {
        imperial: '21',
        metric: '53',
      },
      id: 118,
      life_span: '10 - 12 years',
      name: 'Old-English-Sheepdog',
      temperament: 'Sociable, Bubbly, Playful, Adaptable, Intelligent, Loving',
      weight: {
        imperial: '60 - 100',
        metric: '27 - 45',
      },
      url: 'ttps://cdn2.thedogapi.com/images/HkZ57lq4m_1280.jpg',
    },
    {
      height: {
        imperial: '15 - 19',
        metric: '38 - 48',
      },
      id: 119,
      life_span: '9 – 14 years',
      name: 'Olde-English-Bulldogge',
      temperament: 'Friendly, Alert, Confident, Loving, Courageous, Strong',
      weight: {
        imperial: '65 – 85',
        metric: 'NaN',
      },
      url: 'https://cdn2.thedogapi.com/images/W2nbhuint_1280.jpg',
    },
    {
      bred_for: 'Lapdog',
      breed_group: 'Toy',
      height: {
        imperial: '8 - 11',
        metric: '20 - 28',
      },
      id: 120,
      life_span: '13 - 17 years',
      name: 'Papillon',
      temperament: 'Hardy, Friendly, Energetic, Alert, Intelligent, Happy',
      weight: {
        imperial: '3 - 12',
        metric: '1 - 5',
      },
      url: 'https://cdn2.thedogapi.com/images/SkJj7e547_1280.jpg',
    },
    {
      bred_for: 'Lapdog',
      breed_group: 'Toy',
      height: {
        imperial: '6 - 9',
        metric: '15 - 23',
      },
      id: 121,
      life_span: '14 - 18 years',
      name: 'Pekingese',
      temperament:
        'Opinionated, Good-natured, Stubborn, Affectionate, Aggressive, Intelligent',
      weight: {
        imperial: '14',
        metric: '6',
      },
      url: 'https://cdn2.thedogapi.com/images/ByIiml9Nm_1280.jpg',
    },
    {
      bred_for: 'Driving stock to market in northern Wales',
      breed_group: 'Herding',
      height: {
        imperial: '10 - 12',
        metric: '25 - 30',
      },
      id: 122,
      life_span: '12 - 14 years',
      name: 'Pembroke-Welsh-Corgi',
      temperament: 'Tenacious, Outgoing, Friendly, Bold, Playful, Protective',
      weight: {
        imperial: '25 - 30',
        metric: '11 - 14',
      },
      url: 'https://cdn2.thedogapi.com/images/rJ6iQeqEm_1280.jpg',
    },
    {
      breed_group: 'Working',
      height: {
        imperial: '22 - 25.5',
        metric: '56 - 65',
      },
      id: 123,
      life_span: '10 - 12 years',
      name: 'Perro-de-Presa-Canario',
      temperament: 'Strong Willed, Suspicious, Gentle, Dominant, Calm',
      weight: {
        imperial: '88 - 110',
        metric: '40 - 50',
      },
      url: 'https://cdn2.thedogapi.com/images/S1V3Qeq4X_1280.jpg',
    },
    {
      bred_for: 'Hunting rabbits',
      breed_group: 'Hound',
      height: {
        imperial: '21 - 25',
        metric: '53 - 64',
      },
      id: 124,
      life_span: '12 - 14 years',
      name: 'Pharaoh-Hound',
      temperament:
        'Affectionate, Sociable, Playful, Intelligent, Active, Trainable',
      weight: {
        imperial: '40 - 60',
        metric: '18 - 27',
      },
    },
    {
      bred_for: 'Hunting big-game like Boar.',
      breed_group: 'Hound',
      height: {
        imperial: '20 - 25',
        metric: '51 - 64',
      },
      id: 125,
      life_span: '12 - 14 years',
      name: 'Plott',
      temperament: 'Bold, Alert, Loyal, Intelligent',
      weight: {
        imperial: '40 - 60',
        metric: '18 - 27',
      },
      url: 'https://cdn2.thedogapi.com/images/B1i67l5VQ_1280.jpg',
    },
    {
      bred_for: 'Companion',
      breed_group: 'Toy',
      height: {
        imperial: '8 - 12',
        metric: '20 - 30',
      },
      id: 126,
      life_span: '15 years',
      name: 'Pomeranian',
      temperament:
        'Extroverted, Friendly, Sociable, Playful, Intelligent, Active',
      weight: {
        imperial: '3 - 7',
        metric: '1 - 3',
      },
    },
    {
      height: {
        imperial: '11 - 15',
        metric: '28 - 38',
      },
      id: 127,
      life_span: '12 – 15 years',
      name: 'Poodle(Miniature)',
      weight: {
        imperial: '15 - 17',
        metric: '7 - 8',
      },
      url: 'https://cdn2.thedogapi.com/images/Hkxk4ecVX_1280.jpg',
    },
    {
      height: {
        imperial: '9 - 11',
        metric: '23 - 28',
      },
      id: 128,
      life_span: '18 years',
      name: 'Poodle(Toy)',
      weight: {
        imperial: '6 - 9',
        metric: '3 - 4',
      },
      url: 'https://cdn2.thedogapi.com/images/XXNYMzrDO.jpg',
    },
    {
      bred_for: 'Lapdog',
      breed_group: 'Toy',
      height: {
        imperial: '10 - 12',
        metric: '25 - 30',
      },
      id: 129,
      life_span: '12 - 14 years',
      name: 'Pug',
      temperament:
        'Docile, Clever, Charming, Stubborn, Sociable, Playful, Quiet, Attentive',
      weight: {
        imperial: '14 - 18',
        metric: '6 - 8',
      },
      url: 'https://cdn2.thedogapi.com/images/HyJvcl9N7_1280.jpg',
    },
    {
      bred_for: 'Herding',
      breed_group: 'Herding',
      height: {
        imperial: '16 - 17',
        metric: '41 - 43',
      },
      id: 130,
      life_span: '12 - 16 Years years',
      name: 'Puli',
      temperament: 'Energetic, Agile, Loyal, Obedient, Intelligent, Faithful',
      weight: {
        imperial: '25 - 35',
        metric: '11 - 16',
      },
      url: 'https://cdn2.thedogapi.com/images/ryPgVl5N7_1280.jpg',
    },
    {
      breed_group: 'Herding',
      height: {
        imperial: '15 - 18.5',
        metric: '38 - 47',
      },
      id: 131,
      life_span: '13 - 15 years',
      name: 'Pumi',
      temperament: 'Lively, Reserved, Intelligent, Active, Protective, Vocal',
      weight: {
        imperial: '18 - 33',
        metric: '8 - 15',
      },
      url: 'https://cdn2.thedogapi.com/images/SyRe4xcN7_1280.jpg',
    },
    {
      breed_group: 'Terrier',
      height: {
        imperial: '10 - 13',
        metric: '25 - 33',
      },
      id: 132,
      life_span: '12 - 18 years',
      name: 'Rat-Terrier',
      temperament:
        'Affectionate, Lively, Inquisitive, Alert, Intelligent, Loving',
      weight: {
        imperial: '8 - 25',
        metric: '4 - 11',
      },
      url: 'https://cdn2.thedogapi.com/images/HkXWNl9E7_1280.jpg',
    },
    {
      bred_for: 'Hunting raccoon, deer, bear, and cougar.',
      breed_group: 'Hound',
      height: {
        imperial: '21 - 27',
        metric: '53 - 69',
      },
      id: 133,
      life_span: '10 - 12 years',
      name: 'Redbone-Coonhound',
      temperament:
        'Affectionate, Energetic, Independent, Companionable, Familial, Unflappable',
      weight: {
        imperial: '45 - 80',
        metric: '20 - 36',
      },
      url: 'https://cdn2.thedogapi.com/images/_zy2OcyhQ.jpg',
    },
    {
      bred_for: 'Big game hunting, guarding',
      breed_group: 'Hound',
      height: {
        imperial: '24 - 27',
        metric: '61 - 69',
      },
      id: 134,
      life_span: '10 - 12 years',
      name: 'Rhodesian-Ridgeback',
      temperament:
        'Strong Willed, Mischievous, Loyal, Dignified, Sensitive, Intelligent',
      weight: {
        imperial: '75 - 80',
        metric: '34 - 36',
      },
      url: 'https://cdn2.thedogapi.com/images/By9zNgqE7_1280.jpg',
    },
    {
      bred_for: 'Cattle drover, guardian, draft',
      breed_group: 'Working',
      height: {
        imperial: '22 - 27',
        metric: '56 - 69',
      },
      id: 135,
      life_span: '8 - 10 years',
      name: 'Rottweiler',
      temperament:
        'Steady, Good-natured, Fearless, Devoted, Alert, Obedient, Confident, Self-assured, Calm, Courageous',
      weight: {
        imperial: '75 - 110',
        metric: '34 - 50',
      },
      url: 'https://cdn2.thedogapi.com/images/r1xXEgcNX_1280.jpg',
    },
    {
      breed_group: 'Toy',
      height: {
        imperial: '7.5 - 10.5',
        metric: '19 - 27',
      },
      id: 136,
      life_span: '10 - 12 years',
      name: 'Russian-Toy',
      weight: {
        imperial: '3 - 6',
        metric: '1 - 3',
      },
      url: 'https://cdn2.thedogapi.com/images/HkP7Vxc4Q_1280.jpg',
    },
    {
      bred_for: 'Draft, search, rescue',
      breed_group: 'Working',
      height: {
        imperial: '25.5 - 27.5',
        metric: '65 - 70',
      },
      id: 137,
      life_span: '7 - 10 years',
      name: 'Saint-Bernard',
      temperament: 'Friendly, Lively, Gentle, Watchful, Calm',
      weight: {
        imperial: '130 - 180',
        metric: '59 - 82',
      },
      url: 'https://cdn2.thedogapi.com/images/t7FefmYNk.jpg',
    },
    {
      bred_for: 'Coursing gazelle and hare',
      breed_group: 'Hound',
      height: {
        imperial: '23 - 28',
        metric: '58 - 71',
      },
      id: 138,
      life_span: '12 - 14 years',
      name: 'Saluki',
      temperament: 'Aloof, Reserved, Intelligent, Quiet',
      weight: {
        imperial: '35 - 65',
        metric: '16 - 29',
      },
      url: 'https://cdn2.thedogapi.com/images/tFQkJi_-6.jpg',
    },
    {
      bred_for: 'Herding reindeer, guardian, draft',
      breed_group: 'Working',
      height: {
        imperial: '19 - 23.5',
        metric: '48 - 60',
      },
      id: 139,
      life_span: '12 - 14 years',
      name: 'Samoyed',
      temperament: 'Stubborn, Friendly, Sociable, Lively, Alert, Playful',
      weight: {
        imperial: '50 - 60',
        metric: '23 - 27',
      },
      url: 'https://cdn2.thedogapi.com/images/S1T8Ee9Nm_1280.jpg',
    },
    {
      bred_for: 'Barge watchdog',
      breed_group: 'Non-Sporting',
      height: {
        imperial: '10 - 13',
        metric: '25 - 33',
      },
      id: 140,
      life_span: '13 - 15 years',
      name: 'Schipperke',
      temperament: 'Fearless, Agile, Curious, Independent, Confident, Faithful',
      weight: {
        imperial: '10 - 16',
        metric: '5 - 7',
      },
      url: 'https://cdn2.thedogapi.com/images/SyBvVgc47_1280.jpg',
    },
    {
      bred_for: 'Coursing deer',
      breed_group: 'Hound',
      height: {
        imperial: '28 - 32',
        metric: '71 - 81',
      },
      id: 141,
      life_span: '8 - 10 years',
      name: 'Scottish-Deerhound',
      temperament: 'Docile, Friendly, Dignified, Gentle',
      weight: {
        imperial: '70 - 130',
        metric: '32 - 59',
      },
      url: 'https://cdn2.thedogapi.com/images/SkNjqx9NQ_1280.jpg',
    },
    {
      bred_for: 'Vermin hunting',
      breed_group: 'Terrier',
      height: {
        imperial: '10',
        metric: '25',
      },
      id: 142,
      life_span: '11 - 13 years',
      name: 'Scottish-Terrier',
      temperament: 'Feisty, Alert, Independent, Playful, Quick, Self-assured',
      weight: {
        imperial: '18 - 22',
        metric: '8 - 10',
      },
    },
    {
      bred_for: 'Sheep herding',
      breed_group: 'Herding',
      height: {
        imperial: '13 - 16',
        metric: '33 - 41',
      },
      id: 143,
      life_span: '12 - 14 years',
      name: 'Shetland-Sheepdog',
      temperament:
        'Affectionate, Lively, Responsive, Alert, Loyal, Reserved, Playful, Gentle, Intelligent, Active, Trainable, Strong',
      weight: {
        imperial: '30',
        metric: '14',
      },
    },
    {
      bred_for: 'Hunting in the mountains of Japan, Alert Watchdog',
      breed_group: 'Non-Sporting',
      height: {
        imperial: '13.5 - 16.5',
        metric: '34 - 42',
      },
      id: 144,
      life_span: '12 - 16 years',
      name: 'Shiba-Inu',
      temperament: 'Charming, Fearless, Keen, Alert, Confident, Faithful',
      weight: {
        imperial: '17 - 23',
        metric: '8 - 10',
      },
      url: 'https://cdn2.thedogapi.com/images/xJJyuYXJS.jpg',
    },
    {
      bred_for: 'Lapdog',
      breed_group: 'Toy',
      height: {
        imperial: '8 - 11',
        metric: '20 - 28',
      },
      id: 145,
      life_span: '10 - 18 years',
      name: 'Shih-Tzu',
      temperament:
        'Clever, Spunky, Outgoing, Friendly, Affectionate, Lively, Alert, Loyal, Independent, Playful, Gentle, Intelligent, Happy, Active, Courageous',
      weight: {
        imperial: '9 - 16',
        metric: '4 - 7',
      },
      url: 'https://cdn2.thedogapi.com/images/BkrJjgcV7_1280.jpg',
    },
    {
      bred_for: 'Swimming, Carrying backpacks, Pulling carts or sleds',
      height: {
        imperial: '26 - 30',
        metric: '66 - 76',
      },
      id: 146,
      life_span: '9 – 14 years',
      name: 'Shiloh-Shepherd',
      temperament: 'Outgoing, Loyal, Companionable, Gentle, Loving, Trainable',
      weight: {
        imperial: '120 - 140',
        metric: '54 - 64',
      },
      url: 'https://cdn2.thedogapi.com/images/SJJxjecEX_1280.jpg',
    },
    {
      bred_for: 'Sled pulling',
      breed_group: 'Working',
      height: {
        imperial: '20 - 23.5',
        metric: '51 - 60',
      },
      id: 147,
      life_span: '12 years',
      name: 'Siberian-Husky',
      temperament: 'Outgoing, Friendly, Alert, Gentle, Intelligent',
      weight: {
        imperial: '35 - 60',
        metric: '16 - 27',
      },
      url: 'https://cdn2.thedogapi.com/images/S17ZilqNm_1280.jpg',
    },
    {
      bred_for: 'Small vermin hunting, companionship',
      breed_group: 'Toy',
      height: {
        imperial: '9 - 10',
        metric: '23 - 25',
      },
      id: 148,
      life_span: '12 - 15 years',
      name: 'Silky-Terrier',
      temperament: 'Friendly, Responsive, Inquisitive, Alert, Quick, Joyful',
      weight: {
        imperial: '8 - 10',
        metric: '4 - 5',
      },
      url: 'https://cdn2.thedogapi.com/images/ByzGsl5Nm_1280.jpg',
    },
    {
      bred_for: 'Fox bolting',
      breed_group: 'Terrier',
      height: {
        imperial: '15.5',
        metric: '39',
      },
      id: 149,
      life_span: '12 - 14 years',
      name: 'Smooth-Fox-Terrier',
      temperament:
        'Fearless, Affectionate, Alert, Playful, Intelligent, Active',
      weight: {
        imperial: 'up - 18',
        metric: 'NaN - 8',
      },
      url: 'https://cdn2.thedogapi.com/images/Syszjx9Em_1280.jpg',
    },
    {
      bred_for: 'Vermin hunting, guarding, all-around farm helper',
      breed_group: 'Terrier',
      height: {
        imperial: '16 - 18',
        metric: '41 - 46',
      },
      id: 150,
      life_span: '12 - 15 years',
      name: 'Soft-Coated-Wheaten-Terrier',
      temperament:
        'Affectionate, Spirited, Energetic, Playful, Intelligent, Faithful',
      weight: {
        imperial: '30 - 40',
        metric: '14 - 18',
      },
      url: 'https://cdn2.thedogapi.com/images/HJHmix5NQ_1280.jpg',
    },
    {
      bred_for: 'Herding flocks of sheep and goats from one pasture to another',
      breed_group: 'Sporting',
      height: {
        imperial: '16 - 20',
        metric: '41 - 51',
      },
      id: 151,
      life_span: '12 - 15 years',
      name: 'Spanish-Water-Dog',
      temperament:
        'Trainable, Diligent, Affectionate, Loyal, Athletic, Intelligent',
      weight: {
        imperial: '30 - 50',
        metric: '14 - 23',
      },
      url: 'https://cdn2.thedogapi.com/images/HJf4jl9VX_1280.jpg',
    },
    {
      breed_group: 'Sporting',
      height: {
        imperial: '22.5 - 27.5',
        metric: '57 - 70',
      },
      id: 152,
      life_span: '10 - 12 years',
      name: 'Spinone-Italiano',
      temperament: 'Docile, Friendly, Affectionate, Loyal, Patient, Gentle',
      weight: {
        imperial: '61 - 85',
        metric: '28 - 39',
      },
      url: 'https://cdn2.thedogapi.com/images/rk5Eoe5Nm_1280.jpg',
    },
    {
      bred_for: '',
      breed_group: 'Terrier',
      height: {
        imperial: '14 - 16',
        metric: '36 - 41',
      },
      id: 153,
      life_span: '12 - 14 years',
      name: 'Staffordshire-Bull-Terrier',
      temperament:
        'Reliable, Fearless, Bold, Affectionate, Loyal, Intelligent, Courageous',
      weight: {
        imperial: '24 - 38',
        metric: '11 - 17',
      },
      url: 'https://cdn2.thedogapi.com/images/H1zSie9V7_1280.jpg',
    },
    {
      bred_for: 'Ratting, guarding',
      breed_group: 'Working',
      height: {
        imperial: '17.5 - 19.5',
        metric: '44 - 50',
      },
      id: 154,
      life_span: '13 - 15 years',
      name: 'Standard-Schnauzer',
      temperament:
        'Trainable, Good-natured, Devoted, Lively, Playful, Intelligent',
      weight: {
        imperial: '30 - 50',
        metric: '14 - 23',
      },
      url: 'https://cdn2.thedogapi.com/images/GZeDDro7-.jpg',
    },
    {
      breed_group: 'Herding',
      height: {
        imperial: '11.5 - 13.5',
        metric: '29 - 34',
      },
      id: 155,
      life_span: '12 - 14 years',
      name: 'Swedish-Vallhund',
      temperament:
        'Fearless, Friendly, Energetic, Alert, Intelligent, Watchful',
      weight: {
        imperial: '20 - 30',
        metric: '9 - 14',
      },
      url: 'https://cdn2.thedogapi.com/images/HJ-Dix94Q_1280.jpg',
    },
    {
      breed_group: 'Hound',
      height: {
        imperial: '20 - 24',
        metric: '51 - 61',
      },
      id: 156,
      life_span: '10 - 12 years',
      name: 'Thai-Ridgeback',
      temperament:
        'Protective, Loyal, Independent, Intelligent, Loving, Familial',
      weight: {
        imperial: '35 - 55',
        metric: '16 - 25',
      },
      url: 'https://cdn2.thedogapi.com/images/0zRjpLfPg.jpg',
    },
    {
      breed_group: 'Working',
      height: {
        imperial: '24 - 26',
        metric: '61 - 66',
      },
      id: 157,
      life_span: '10 - 14 years',
      name: 'Tibetan-Mastiff',
      temperament:
        'Strong Willed, Tenacious, Aloof, Stubborn, Intelligent, Protective',
      weight: {
        imperial: '85 - 140',
        metric: '39 - 64',
      },
      url: 'https://cdn2.thedogapi.com/images/SkM9sec47_1280.jpg',
    },
    {
      breed_group: 'Non-Sporting',
      height: {
        imperial: '10',
        metric: '25',
      },
      id: 158,
      life_span: '12 - 15 years',
      name: 'Tibetan-Spaniel',
      temperament:
        'Willful, Aloof, Assertive, Independent, Playful, Intelligent, Happy',
      weight: {
        imperial: '9 - 15',
        metric: '4 - 7',
      },
    },
    {
      bred_for:
        'Good luck charms, mascots, watchdogs, herding dogs, and companions',
      breed_group: 'Non-Sporting',
      height: {
        imperial: '14 - 17',
        metric: '36 - 43',
      },
      id: 159,
      life_span: '12 - 15 years',
      name: 'Tibetan-Terrier',
      temperament:
        'Affectionate, Energetic, Amiable, Reserved, Gentle, Sensitive',
      weight: {
        imperial: '20 - 24',
        metric: '9 - 11',
      },
      url: 'https://cdn2.thedogapi.com/images/6f5n_42mB.jpg',
    },
    {
      breed_group: 'Toy',
      height: {
        imperial: '8 - 11',
        metric: '20 - 28',
      },
      id: 160,
      life_span: '12 - 15 years',
      name: 'Toy-Fox-Terrier',
      temperament: 'Friendly, Spirited, Alert, Loyal, Playful, Intelligent',
      weight: {
        imperial: '4 - 9',
        metric: '2 - 4',
      },
      url: 'https://cdn2.thedogapi.com/images/B17ase9V7_1280.jpg',
    },
    {
      breed_group: 'Hound',
      height: {
        imperial: '20 - 27',
        metric: '51 - 69',
      },
      id: 161,
      life_span: '10 - 13 years',
      name: 'Treeing-Walker-Coonhound',
      temperament:
        'Clever, Affectionate, Confident, Intelligent, Loving, Trainable',
      weight: {
        imperial: '45 - 80',
        metric: '20 - 36',
      },
      url: 'https://cdn2.thedogapi.com/images/SkRpsgc47_1280.jpg',
    },
    {
      bred_for: 'Pointing and trailing',
      breed_group: 'Sporting',
      height: {
        imperial: '21 - 24',
        metric: '53 - 61',
      },
      id: 162,
      life_span: '10 - 14 years',
      name: 'Vizsla',
      temperament: 'Affectionate, Energetic, Loyal, Gentle, Quiet',
      weight: {
        imperial: '50 - 65',
        metric: '23 - 29',
      },
      url: 'https://cdn2.thedogapi.com/images/r1o0jx9Em_1280.jpg',
    },
    {
      bred_for: 'Large game trailing and versatile gundog',
      breed_group: 'Sporting',
      height: {
        imperial: '23 - 27',
        metric: '58 - 69',
      },
      id: 163,
      life_span: '12 - 15 years',
      name: 'Weimaraner',
      temperament:
        'Steady, Aloof, Stubborn, Energetic, Alert, Intelligent, Powerful, Fast',
      weight: {
        imperial: '55 - 90',
        metric: '25 - 41',
      },
      url: 'https://cdn2.thedogapi.com/images/SyU12l9V7_1280.jpg',
    },
    {
      bred_for: 'Flushing and retrieving birds',
      breed_group: 'Sporting',
      height: {
        imperial: '17 - 19',
        metric: '43 - 48',
      },
      id: 164,
      life_span: '12 - 15 years',
      name: 'Welsh-Springer-Spaniel',
      temperament: 'Stubborn, Friendly, Affectionate, Loyal, Playful, Active',
      weight: {
        imperial: '35 - 55',
        metric: '16 - 25',
      },
      url: 'https://cdn2.thedogapi.com/images/BJ1gnx5Vm_1280.jpg',
    },
    {
      bred_for: 'Fox, badger, vermin hunting',
      breed_group: 'Terrier',
      height: {
        imperial: '10 - 11',
        metric: '25 - 28',
      },
      id: 165,
      life_span: '15 - 20 years',
      name: 'West-Highland-White-Terrier',
      temperament:
        'Hardy, Friendly, Alert, Independent, Gay, Active, Courageous',
      weight: {
        imperial: '15 - 22',
        metric: '7 - 10',
      },
      url: 'https://cdn2.thedogapi.com/images/Bkdx2g5Em_1280.jpg',
    },
    {
      bred_for: 'Coursing, racing',
      breed_group: 'Hound',
      height: {
        imperial: '18 - 22',
        metric: '46 - 56',
      },
      id: 166,
      life_span: '12 - 15 years',
      name: 'Whippet',
      temperament: 'Friendly, Affectionate, Lively, Gentle, Intelligent, Quiet',
      weight: {
        imperial: '25 - 35',
        metric: '11 - 16',
      },
      url: 'https://cdn2.thedogapi.com/images/Hyv-ne94m_1280.jpg',
    },
    {
      height: {
        imperial: '22 - 25',
        metric: '56 - 64',
      },
      id: 167,
      life_span: '12 – 14 years',
      name: 'White-Shepherd',
      temperament:
        'Self-confidence, Aloof, Fearless, Alert, Companionable, Eager',
      weight: {
        imperial: '60 - 85',
        metric: '27 - 39',
      },
      url: 'https://cdn2.thedogapi.com/images/r14M3e9E7_1280.jpg',
    },
    {
      bred_for: 'Vermin hunting, fox bolting',
      height: {
        imperial: '13 - 16',
        metric: '33 - 41',
      },
      history: ' England',
      id: 168,
      life_span: '13 – 14 years',
      name: 'Wire-Fox-Terrier',
      temperament: 'Fearless, Friendly, Bold, Keen, Alert, Quick',
      weight: {
        imperial: '15 - 19',
        metric: '7 - 9',
      },
      url: 'https://cdn2.thedogapi.com/images/SJ6f2g9EQ_1280.jpg',
    },
    {
      bred_for:
        'Gundog, "swamp-tromping", Flushing, pointing, and retrieving water fowl & game birds',
      breed_group: 'Sporting',
      height: {
        imperial: '20 - 24',
        metric: '51 - 61',
      },
      id: 169,
      life_span: '12 - 14 years',
      name: 'Wirehaired-Pointing-Griffon',
      temperament: 'Loyal, Gentle, Vigilant, Trainable, Proud',
      weight: {
        imperial: '45 - 70',
        metric: '20 - 32',
      },
      url: 'https://cdn2.thedogapi.com/images/Bkam2l9Vm_1280.jpg',
    },
    {
      breed_group: 'Sporting',
      height: {
        imperial: '21.5 - 25',
        metric: '55 - 64',
      },
      id: 170,
      life_span: '12 - 14 years',
      name: 'Wirehaired-Vizsla',
      weight: {
        imperial: '45 - 65',
        metric: '20 - 29',
      },
      url: 'https://cdn2.thedogapi.com/images/r1I4hl5Em_1280.jpg',
    },
    {
      breed_group: 'Non-Sporting',
      height: {
        imperial: '10 - 23',
        metric: '25 - 58',
      },
      id: 171,
      life_span: '12 - 14 years',
      name: 'Xoloitzcuintli',
      temperament:
        'Cheerful, Alert, Companionable, Intelligent, Protective, Calm',
      weight: {
        imperial: '9 - 31',
        metric: '4 - 14',
      },
      url: 'https://cdn2.thedogapi.com/images/HkNS3gqEm_1280.jpg',
    },
    {
      bred_for: 'Small vermin hunting',
      height: {
        imperial: '8 - 9',
        metric: '20 - 23',
      },
      id: 172,
      life_span: '12 - 16 years',
      name: 'Yorkshire-Terrier',
      temperament: 'Bold, Independent, Confident, Intelligent, Courageous',
      weight: {
        imperial: '4 - 7',
        metric: '2 - 3',
      },
      url: 'https://cdn2.thedogapi.com/images/FxLgZUpCp.jpg',
    },
  ];

  await sql`
	INSERT INTO fetchedDogs ${sql(
    fetchedDogs,
    'name',
    'bred_for',
    'life_span',
    'origin',
    'temperament',
    'height_imperial',
    'height_metric',
    'weight_imperial',
    'weight_metric',
    'breed_group',
    'url',
  )}`;
};

exports.down = async (sql) => {
  await sql`
	DELETE FROM fetchedDogs WHERE id = 264
	
	`;
};
