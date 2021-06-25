import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"

import { UsersRepositories } from "../repositories/UsersRepositories";
import { JsonWebTokenError } from "jsonwebtoken";


interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    //Verificar se email Existe
    const user = await usersRepositories.findOne({
      email
    });

    if (!user) {
      throw new Error("Email/Password incorrect")
    }

    /*Verificar se senha esta correta

    12345 / fgsd65g9dfh8-df8hshd32t#TG@#T#FG3(Comparando as duas senhas)*/

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect")
    }


    //Gerar o token

    const token = sign({
      email: user.email
    }, "214314bbf98dccb76f79b038ada1eba0", {
      subject: user.id,
      expiresIn: "1d"
    }
    );
  }
}


export { AuthenticateUserService };