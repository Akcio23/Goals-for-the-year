// import { getUsers } from "../../../controllers/userController";


const db: { name: string; lastName: string }[] = [];

// Função para o método GET
export async function GET() {
  // Chama a função do controller para obter os usuários
  console.log('GET Request Received');
  try {
    return new Response(JSON.stringify(db), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in GET:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function POST(req: Request) {
  console.log('POST AQUIII')

  try {
    const { name, lastName } = await req.json();

    // Validação básica
    if (!name || !lastName) {
      return new Response(
        JSON.stringify({ message: "Name and LastName are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = { name, lastName };
    db.push(data);
    console.log("User added:", data);

    return new Response(
      JSON.stringify({ message: "User added successfully." }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in POST:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}