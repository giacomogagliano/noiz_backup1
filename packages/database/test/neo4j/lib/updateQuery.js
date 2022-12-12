export async function updateQuery(value, session) {
  const writeQuery = `MATCH (p:Person { name:$name })
                      SET p.name = $name
                      SET p.surname = $surname
                      RETURN p`;
  const writeResult = await session.writeTransaction((tx) =>
    tx.run(writeQuery, { ...value })
  );
  writeResult.records.forEach((record) => {
    const personResult = record.get("p");
    console.log(`Updated person ${personResult.properties}`);
  });
}
