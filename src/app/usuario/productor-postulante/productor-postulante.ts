import {Usuario} from '../usuario';

export class ProductorPostulante extends Usuario {
  id: number;
  nombreFinca: string;
  nombre: string;
  correo: string;
  celular: number;
  telefono: number;
  productos: string;
  cultivos: string;
  procesos: string;
  vereda: string;
  municipio: string;
}
