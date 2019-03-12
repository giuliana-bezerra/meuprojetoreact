import { listarComentarios } from "../actions/actionCreator";

class ComentarioController {
    listar() {
        return dispatch => {
            fetch('https://my-json-server.typicode.com/giuliana-bezerra/demo/posts')
            .then(res => res.json())
            .then(res => dispatch(listarComentarios(res)));
        }
    }
}

export default ComentarioController;