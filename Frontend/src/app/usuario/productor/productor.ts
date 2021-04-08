import {Usuario} from "../cliente/usuario";
import {OfertaProductor} from "../../catalogo/oferta/oferta-productor";

export class Productor extends Usuario{
  direccion:string;
  fotoProveedot:string;
  activado:boolean;
  numeroTelefono:string;
  descripcion:string;
  ofertasProductor: OfertaProductor[];
}
