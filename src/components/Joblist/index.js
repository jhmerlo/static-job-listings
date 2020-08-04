import React, { Component } from 'react';
import data from '../../data/data.json';
import Card from '../Card';
import './Joblist.css';

export default class Joblist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data
        }
    }

    componentDidMount() {
        console.log(this.state.data);
    }

    render() {
        return (
            <main>
                <div className="container">
                    {
                        this.state.data.map(job => {
                            return (
                                <Card data={job} key={job.id} />
                            )
                        })
                    }
                </div>
            </main>
        );
    }

}