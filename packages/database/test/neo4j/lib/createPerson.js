export async function createPerson(person, session) {
  const query = `MERGE (p:Person { name: $name })
                 RETURN p`;
  const writeResult = await session.writeTransaction((tx) =>
    tx.run(query, person)
  );
  writeResult.records.forEach((record) => {
    const personResult = record.get("p");
    console.log(`Created person ${personResult.properties.name}`);
  });
}
