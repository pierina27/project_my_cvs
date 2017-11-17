import { tipoSkill } from './tipo-skill.model';

export interface skill{
	id:number;
	nombre:string;
	descripcion:string;
	tipo: tipoSkill;
}