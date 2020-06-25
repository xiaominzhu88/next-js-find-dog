export async function getServerSideProps(context) {
  const { getFetchedDogsById } = await import('../../db.js');

  const fetchedDogs = await getFetchedDogsById(context.params.id);

  console.log('result: ', fetchedDogs);

  const fetchedId = fetchedDogs.map((item) => item.id);

  if (fetchedDogs.length === 0 || fetchedId > 172) {
    return { props: {} };
  }
  return {
    props: {
      fetchedDogs: fetchedDogs[0],
    },
  };
}
