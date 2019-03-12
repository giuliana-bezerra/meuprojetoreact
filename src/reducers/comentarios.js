import { COMENTAR, LISTAR } from "../constants/actionTypes";

export default function comentarios(state = {comentarios: []}, action) {
    switch (action.type) {
        case COMENTAR:
            return {
                ...state,
                comentarios: state.comentarios.concat({comentario: action.comentario, nome: 'N/A'})
            }
        case LISTAR:
            return {
                ...state,
                comentarios: action.comentarios
            }
        default:
            return state;
    }
}