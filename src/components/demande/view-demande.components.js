import React, { Component } from "react";
import DemandeDataService from "../../services/demande-service";

export default class ViewDemande extends Component {
  constructor(props) {
    super(props)

    this.state = {
        id: this.props.match.params.id,
        visite: {}
    }
}

componentDidMount(){
    DemandeDataService.getDemandeById(this.state.id).then( res => {
        this.setState({demande: res.data});
    })
}

render() {
    return (
        <div>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View Demande Details</h3>
                <div className = "card-body">
                    <div className = "row">
                        <label> Nom Personne: </label>
                        <div> { this.state.demande.nom }</div>
                    </div>
                    <div className = "row">
                        <label> Carte Identite Nationale: </label>
                        <div> { this.state.demande.cin }</div>
                    </div>
                    <div className = "row">
                        <label> Localisation: </label>
                        <div> { this.state.demande.localisation }</div>
                    </div>
                    <div className = "row">
                        <label> Numero du Telephone: </label>
                        <div> { this.state.demande.numTel }</div>
                    </div>
                    <div className = "row">
                        <label> City: </label>
                        <div> { this.state.demande.city }</div>
                    </div>
                    <div className = "row">
                        <label> Quantite Demandee: </label>
                        <div> { this.state.demande.quantite }</div>
                    </div>
                    <div className = "row">
                        <label> Date Retour: </label>
                        <div> { this.state.demande.dateRetour }</div>
                    </div>
                    <div className = "row">
                        <label> Etat Demande: </label>
                        <div> { this.state.demande.etat }</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
}