import Gun from "gun";

const gun = new Gun("http://localhost:8080/gun");

async function testServer() {
  try {
    // Scrive un oggetto nel database
    gun.get("test").put({
      message: "Hello from the client!",
    });

    // Legge l'oggetto dal database
    const data = await gun.get("test");
    console.log(data.message);
  } catch (error) {
    console.error(error);
  }
}

await testServer();
process.exit();
