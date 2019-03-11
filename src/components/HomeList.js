import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

class HomeList extends Component {
    render() {
        return (
            <div>
                <DataTable header="Comentários" value={this.props.comentarios}>
                    <Column field="comentario" header="Comentário"/>
                    <Column field="nome" header="Nome" style={{width:'20%'}}/>
                </DataTable>
            </div>
        );
    }
}

export default HomeList;