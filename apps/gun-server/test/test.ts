import { testEnvironment } from "@zionstate/test";
import Gun from "gun";
const { expect, log } = testEnvironment();

const gun = new Gun("http://localhost:8080/gun");

async function testServer() {
  try {
    // Scrive un oggetto nel database
    gun.get("test").put({
      message: "Hello from the client!",
    });

    // Legge l'oggetto dal database
    const data = await gun.get("test");
    // @ts-expect-error
    process.stdout.write(data.message);
  } catch (error) {
    process.stderr;
  }
}

describe("first", () => {
  log("ciao");
  it("should", () => {
    const cond = true;
    expect(cond).to.be.true;
  });
});

await testServer();
