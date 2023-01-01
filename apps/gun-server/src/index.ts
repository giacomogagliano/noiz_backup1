import Gun from "gun";
import { createServer } from "http";
import {} from "dotenv";

const server = createServer().listen(8080);
Gun({ web: server });
process.stdout.write("listening on 8080\n");
