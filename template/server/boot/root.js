export default function(server) {
  // Install a `/api` route that returns server status
  const router = server.loopback.Router();
  router.get('/api', server.loopback.status());
  server.use(router);
}
