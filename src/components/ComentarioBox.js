import React, {Component} from 'react';
import HomeForm from './HomeForm';
import HomeList from './HomeList';

class ComentarioBox extends Component {
    constructor() {
        super();
        this.state = {comentarios: []};
    }

    render() {
        return (
            <div className="formListagem">
                <HomeForm comentar={this.comentar.bind(this)}/>
                <HomeList comentarios={this.state.comentarios}/>
            </div>
        );
    }

    comentar(comentario) {
        const novosComentarios = this.state.comentarios;
        novosComentarios.push({comentario, nome: 'N/A'});
        this.setState({comentarios: novosComentarios});
    }
}

export default ComentarioBox;