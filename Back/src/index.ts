
import { PORT } from "./config/envs"
import server from "./server"
server.listen(3600, '0.0.0.0', () => { console.log(`Server listening on port ${PORT}`) })