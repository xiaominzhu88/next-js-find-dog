import { NextApiRequest, NextApiResponse } from 'next';
import { deleteFavo } from '../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const favoDogsToDelete = await deleteFavo();

  res.status(200).json(favoDogsToDelete);
};
