import React, {Component} from 'react';
import {InputTextarea} from 'primereact/inputtextarea';
import {Button} from 'primereact/button';

class HomeForm extends Component {
    constructor() {
        super();
        this._comentario = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.comentar(event)}>
                    <InputTextarea placeholder="Adicione o comentário..." rows={5} cols={30}
                    onChange={e => this._comentario = e.target.value}/>
                    <br/>
                    <Button label="Enviar"/>
                </form>
            </div>
        );
    }

    comentar(event) {
        event.preventDefault();
        this.props.comentar(this._comentario);
    }
}

export default HomeForm;