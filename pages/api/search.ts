import { getFetchedDogsByName } from '../../db.js';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const fetchedDogs = await getFetchedDogsByName(req.body.name);
  // pass fetchedDogs as ARRAY instead object
  res.status(200).json(fetchedDogs);
};
