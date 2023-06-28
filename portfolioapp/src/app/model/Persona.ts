import { Habilidad } from "./Habilidad";
import { Experiencia } from "./Experiencia";
import { Proyecto } from "./Proyecto";
import { Estudio } from "./Estudio";
import { RedSocial } from "./RedSocial";



export interface Persona {
    id: number;
    nombre?: string;
    apellido?: string;
    direccion?: string;
    fechaNacimiento?: string;
    email?: string;
    telefono?: string;
    estudios?: Estudio[];
    habilidades?: Habilidad[];
    proyectos?: Proyecto[];
    experiencias?: Experiencia[];
    redesSociales?: RedSocial[];	
    
} 