import { getFetchedDogsById } from '../../db.js';

const fetchedDogs = getFetchedDogsById();
export default (req, res) => {
  res.status(200).json({ fetchedDogs });
};
