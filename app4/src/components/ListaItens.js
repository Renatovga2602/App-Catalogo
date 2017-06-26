import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import Itens from './Itens';

export default class ListaItens extends Component {
    render() {
        return (
            <View>
                <Itens />
                <Itens />
                <Itens />
            </View>
        );
    }
}



