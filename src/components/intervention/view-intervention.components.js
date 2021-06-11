import React, { Component } from "react";
import InterventionDataService from "../../services/intervention-service";

export default class ViewIntervention extends Component {
  constructor(props) {
    super(props)

    this.state = {
        id: this.props.match.params.id,
        intervention: {}
    }
}

componentDidMount(){
    InterventionDataService.getInterventionById(this.state.id).then( res => {
        this.setState({intervention: res.data});
    })
}

render() {
    return (
        <div>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View Intervention Details</h3>
                <div className = "card-body">
                    <div className = "row">
                        <label> Description Intervention: </label>
                        <div> { this.state.intervention.description }</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
}