export default function hello(req, res) {
  console.log('Hello from SSR');
  res.statusCode = 200;
  res.setHeader = ('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      message: 'Hello from SSR',
    })
  );
}
