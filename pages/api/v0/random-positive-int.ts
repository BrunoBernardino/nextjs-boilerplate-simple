import { NextApiRequest, NextApiResponse } from 'next';

import { generateRandomPositiveInt } from 'lib/utils';

// @ts-ignore
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const number = generateRandomPositiveInt();

  res.status(200).json({ number });
};
