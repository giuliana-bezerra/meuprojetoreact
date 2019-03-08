import React, { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {Menubar} from 'primereact/menubar';
import {withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    const menuitems = [
      {
         label:'Home',
         icon:'pi pi-fw pi-home',
         command:() => this.props.history.push('/')
      },
      {
         label:'Sobre',
         icon:'pi pi-fw pi-user',
         command:() => this.props.history.push('/sobre')
      },
      {
         label:'Contato',
         icon:'pi pi-fw pi-comment',
         command:() => this.props.history.push('/contato')
      }
   ];
    return (
      <div className="App">
        <Menubar model={menuitems}/>
        <Header/>
        <Footer/>
        <div id="main">
            <main>
                <div className="content" id="content">
                    {this.props.children}
                </div>
            </main>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
