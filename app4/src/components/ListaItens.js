import React, { Component } from 'react';
import {
    Text
} from 'react-native';

export default class ListaItens extends Component {

    constructor(props) {
        super(props);
        console.log('Construindo a aplicação');
    }

    componentWillMount() {
        console.log('Antes de Renderizar');
    }

    componentDidMount() {
        console.log('Depois da renderização');
    }

    render() {
        console.log('Objeto é renderizado');
        return (
            <Text>Importação de componente</Text>
        );
    }
}



