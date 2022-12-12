export async function deleteQuery(value, session) {
  const query = `MATCH (p:Person { name:$name })
                      DETACH DELETE p`;
  const deleteResult = await session.writeTransaction((tx) =>
    tx.run(query, { ...value })
  );
  console.log(
    `Deleted person ${value} and all its relationships`,
    `\nDelete retuls: ${deleteResult}`
  );
}
