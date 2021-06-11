import React, { Component } from "react";
import PlanteDataService from "../../services/plante-service";

export default class ViewPlante extends Component {
  constructor(props) {
    super(props)

    this.state = {
        id: this.props.match.params.id,
        plante: {}
    }
}

componentDidMount(){
    PlanteDataService.getPlanteById(this.state.id).then( res => {
        this.setState({plante: res.data});
    })
}

render() {
    return (
        <div>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View Plante Details</h3>
                <div className = "card-body">
                    <div className = "row">
                        <label> Nom du Plante: </label>
                        <div> { this.state.plante.nomPlante }</div>
                    </div>
                    <div className = "row">
                        <label> Description ddu Plante: </label>
                        <div> { this.state.plante.description }</div>
                    </div>
                    <div className = "row">
                        <label> Type du Plante: </label>
                        <div> { this.state.plante.type }</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
}