export async function GET() {
  // For example, fetch data from your DB here
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  const responseOK = {
    status: 200,
    message: "OK",
    data: users,
  };
  return new Response(JSON.stringify(responseOK), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();
  const { name } = body;

  // e.g. Insert new user into your DB
  const newUser = { id: Date.now(), name };

  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
