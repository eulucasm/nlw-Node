import { EntityRepository, Repository } from "typeorm";
import { compliment } from "../entities/Compliment";


@EntityRepository(compliment)
class ComplimentsRepositories extends Repository<compliment>{

}

export { ComplimentsRepositories }