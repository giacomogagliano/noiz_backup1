function logRecords(record) {
  const personResult1 = record.get("p1");
  const personResult2 = record.get("p2");
  console.log(
    `Created relation between ${personResult1.properties.name} and ${personResult2.properties.name}`
  );
}

const parentRelation = `MATCH (p1:Person { name: $person1.name })
                        MATCH (p2:Person { name: $person2.name })
                        MERGE (p1)-[:IS_PARENT]->(p2)
                        RETURN p1, p2`;

export async function createParentReleationQuery(person1, person2, session) {
  const writeResult = await session.writeTransaction((tx) =>
    tx.run(parentRelation, { person1, person2 })
  );
  writeResult.records.forEach(logRecords);
}
const brotherRelation = `MATCH (p1:Person { name: $person1.name })
                         MATCH (p2:Person { name: $person2.name })
                         MERGE (p1)-[:IS_BROTHER_OR_SISTER]->(p2)
                         RETURN p1, p2`;

export async function createBrotherReleationQuery(person1, person2, session) {
  const writeResult = await session.writeTransaction((tx) =>
    tx.run(brotherRelation, { person1, person2 })
  );
  writeResult.records.forEach(logRecords);
}
