import App from "./components/global-configuration";
import { Server } from "http";
import { PORT } from "config";
const server = Server(App);

server.listen(PORT, () => {
  console.log(`listening on *: ${server.address().port}`);
});
