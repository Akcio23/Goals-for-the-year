// import { getUsers } from "../../../controllers/userController";


const db = []

// Função para o método GET
export async function GET() {
  // Chama a função do controller para obter os usuários
  console.log('GET Request Received');
  try {
    // const users = await getUsers(req);
    console.log('----------------->')

    return new Response(JSON.stringify(db));
  } catch (error) {
    return new Response(error)
}}

export async function POST(req: Request) {
  console.log('POST AQUIII')

  try{
    
    console.log('XXXXXXXXXXXXXXXXXXXXXXXX')
    const {name, lastName} = await req.json()
    const data = {
      name,
      lastName
    }
    db.push(data) 
    console.log(data)

    return new Response.status(200)

  }catch(error){
    return new Response(error)
  }
}