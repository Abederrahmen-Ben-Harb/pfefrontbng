import React, { Component } from "react";
import VisiteDataService from "../services/visite";

export default class ViewVisite extends Component {
  constructor(props) {
    super(props)

    this.state = {
        id: this.props.match.params.id,
        visite: {}
    }
}

componentDidMount(){
  VisiteDataService.getVisiteById(this.state.id).then( res => {
        this.setState({visite: res.data});
    })
}

render() {
    return (
        <div>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View Visite Details</h3>
                <div className = "card-body">
                    <div className = "row">
                        <label> Date Visite: </label>
                        <div> { this.state.visite.date }</div>
                    </div>
                    <div className = "row">
                        <label> Description Visite: </label>
                        <div> { this.state.visite.description }</div>
                    </div>
                    <div className = "row">
                        <label> Etat Visite: </label>
                        <div> { this.state.visite.etat }</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
}