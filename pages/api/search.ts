import { getFetchedDogsByName } from '../../db.js';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const fetchedDogs = await getFetchedDogsByName(req.body.name);
  res.status(200).json({ fetchedDogs });
};
