import React, { Component } from 'react';
import './Filter.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
export default class Filter extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        if (this.props.filtros.length > 0) {
            return (
                <CSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={true}
                    transitionLeaveTimeout={300}>
                    <div class="container" id="filterContainer">
                        <div className="filter">
                            <ul className="tags2">
                                {
                                    this.props.filtros.map(filtro => {
                                        return (
                                            <CSSTransitionGroup
                                                transitionName="example"
                                                transitionAppear={true}
                                                transitionAppearTimeout={500}
                                                transitionLeaveTimeout={300}>
                                                <div className="tagsDiv" key={filtro}>
                                                    <li>{filtro}</li><a href="#" onClick={(e) => this.props.onRemove(e, filtro)}>X</a>
                                                </div>
                                            </CSSTransitionGroup>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </CSSTransitionGroup>
            )
        }
        return (
            <div></div>
        )

    }
}