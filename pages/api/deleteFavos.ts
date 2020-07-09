import { NextApiRequest, NextApiResponse } from 'next';
import { deleteFavo } from '../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const favoDogsToDelete = await deleteFavo();
  //console.log(req.query);
  // pass fetchedDogs as ARRAY instead object
  res.status(200).json(favoDogsToDelete);
};
