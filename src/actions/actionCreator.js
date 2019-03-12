import { COMENTAR, LISTAR } from "../constants/actionTypes";

export function comentar(comentario) {
    return {type: COMENTAR, comentario};
}

export function listarComentarios(comentarios) {
    return {type: LISTAR, comentarios}
}