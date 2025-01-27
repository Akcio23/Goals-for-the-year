import { getUsers, createUser} from '../../controllers/usersController';

export async function GET() {

  return await getUsers();
  
}

export async function POST(req: Request) {

  return await createUser(req)

}