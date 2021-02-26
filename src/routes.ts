import { Router } from 'express';
import { SurveysControle } from './controles/SurveysControle';
import { UserControle } from './controles/UserControle';

const router = Router();

const userControle = new UserControle();
const surveysControle = new SurveysControle();


router.post("/users", userControle.create);
router.post("/servico", surveysControle.create);

export { router };