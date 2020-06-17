// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function (req, res) {
  console.log({ req, res });
  res.json({
    dogs: [
      { dog_breed: 'b', age: 1 },
      { dog_breed: 'a', age: 5 },
      { dog_breed: 'c', age: 10 },
    ],
  });
}
