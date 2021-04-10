import {Usuario} from "../cliente/usuario";
import {Oferta} from "../../catalogo/oferta/oferta";

export class Productor extends Usuario {
  id: number;
  direccion: string;
  fotoProveedor: string;
  activado: boolean;
  numeroTelefono: string;
  descripcion: string;
  ofertasProductor: Oferta[];
}
