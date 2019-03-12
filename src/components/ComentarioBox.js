import React, {Component} from 'react';
import HomeForm from './HomeForm';
import HomeList from './HomeList';
import { store } from '../store';
import { connect } from 'react-redux';
import { comentar } from '../actions/actionCreator';
import ComentarioController from '../controllers/ComentarioController';

const controller = new ComentarioController();

class ComentarioBox extends Component {
    render() {
        return (
            <div className="formListagem">
                <HomeForm comentar={this.props.comentar}/>
                <HomeList comentarios={this.props.comentarios}/>
            </div>
        );
    }

    componentDidMount() {
        this.props.listar();
    }
}

const mapStateToProps = state => {
    return {
        comentarios: state.comentarios
    };
};

const mapDispatchToProps = dispatch => {
    return {
      comentar: comentario => store.dispatch(comentar(comentario)),
      listar: () => store.dispatch(controller.listar())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ComentarioBox);