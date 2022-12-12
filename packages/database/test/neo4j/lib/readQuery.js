export async function readQuery(person, session) {
  const readQuery = `MATCH (p:Person)
                     WHERE p.name = $person
                     RETURN p AS name`;
  const readResult = await session.readTransaction((tx) =>
    tx.run(readQuery, { person })
  );
  readResult.records.forEach((record) => {
    console.log(`Found person: ${record.get("name")}`);
  });
}
