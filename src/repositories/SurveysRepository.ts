import { EntityRepository, Repository } from "typeorm";
import { servico } from "../models/Servico";

@EntityRepository(servico)
class SurveysRepository extends Repository<servico> {}



export { SurveysRepository };