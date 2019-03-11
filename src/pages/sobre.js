import React, {Component} from 'react';
import {Card} from 'primereact/card';

let profile = {nome: '', username: '', email: '', endereco: '', telefone: '', website: '', empresa: ''};

class Sobre extends Component {
    constructor() {
        super();
        this.state = {profile: profile};
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/giuliana-bezerra/demo/profile/1')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState({profile: res});
        });
    }

    render() {
        return (
            <div>
                <div className="title">
                    <h4>Sobre</h4>
                    <p>Aqui estão as informações sobre mim:</p>
                </div>
                <Card>
                    <p><strong>Nome: </strong>{this.state.profile.nome}</p>
                    <p><strong>Username: </strong>{this.state.profile.username}</p>
                    <p><strong>Email: </strong>{this.state.profile.email}</p>
                    <p><strong>Endereço: </strong>{this.state.profile.endereco}</p>
                    <p><strong>Telefone: </strong>{this.state.profile.telefone}</p>
                    <p><strong>Website: </strong>{this.state.profile.website}</p>
                    <p><strong>Empresa: </strong>{this.state.profile.empresa}</p>
                </Card>
            </div>
        );
    }
}

export default Sobre;