import React, { Component } from 'react';
import data from '../../data/data.json';
import Card from '../Card';
import Filter from '../Filter';
import './Joblist.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
export default class Joblist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            filtros: []
        }
    }

    componentDidMount() {
        this.addAttr();
    }

    addAttr() {
        const data2 = this.state.data;
        data2.forEach(data => {
            data.show = true;
        });
        this.setState({ data: data2 });
    }

    getFiltros(e, filtro) {
        e.preventDefault();
        var repeat = false;
        this.state.filtros.forEach(filter => {
            if (filter === filtro) {
                repeat = true;
            }
        })
        if (!repeat) {
            this.setState({ filtros: [...this.state.filtros, filtro] }, () => {
                this.filtrar();
            });
        }

    }

    removeFiltros(e, filtro) {
        e.preventDefault();
        console.log(filtro);
        var filtros = this.state.filtros.slice();
        this.state.filtros.forEach((filter, i) => {
            if (filter == filtro) {
                filtros.splice(i, 1);
            }
        })

        this.setState({ filtros: filtros }, () => {
            this.filtrar();
        })
    }

    clear(e){
        e.preventDefault();
        this.setState({filtros: []}, () => {
            this.filtrar();
        });
    }

    filtrar() {
        const data2 = this.state.data;
        data2.forEach(data => {
            let parametros = [data.role, data.level];
            let count = 0;
            data.languages.forEach(lang => {
                parametros.push(lang);
            });
            data.tools.forEach(tool => {
                parametros.push(tool);
            })
            parametros.forEach(param => {
                this.state.filtros.forEach(filtro => {
                    if (param === filtro) {
                        count++;
                    }
                })
            })

            if (count != this.state.filtros.length) {
                data.show = false;
            }
            else {
                data.show = true;
            }
        })

        this.setState({ data: data2 });
    }

    render() {
        return (
            <main>
                <Filter filtros={this.state.filtros} onRemove={(e, filtro) => this.removeFiltros(e, filtro)} onClear = {(e)=>this.clear(e)} />
                <div className="container" id="containerCards">
                    {
                        this.state.data.map(job => {
                            if (job.show) {
                                return (
                                    <CSSTransitionGroup
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={500}
                                        transitionEnter={false}
                                        transitionLeave={false}>
                                        <Card data={job} key={job.id} onFilter={(e, filtro) => this.getFiltros(e, filtro)} />
                                    </CSSTransitionGroup>

                                )
                            }
                        })
                    }
                </div>
            </main>
        );
    }

}