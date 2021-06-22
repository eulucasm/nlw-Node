import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean
}

class CreateUserService {

  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = new UsersRepositories();

    const userAlreadyExists = await usersRepository.findOne({
      email
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }
  }
}

export { CreateUserService }