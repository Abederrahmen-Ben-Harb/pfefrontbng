import React, { Component } from 'react'
import DemandeDataService from "../../services/demande-service";

export default class UpdateDemande extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nom: '',
            cin: '',
            localisation: '',
            numTel: '',
            city: '',
            quantite: '',
            dateRetour: '',
            etat: ''
        }
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changeCinHandler = this.changeCinHandler.bind(this);
        this.changeLocalisationHandler = this.changeLocalisationHandler.bin(this);
        this.changeNumTelHandler = this.changeNumTelHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeQuantiteHandler = this.changeQuantiteHandler.bind(this);
        this.changeDateRetourHandler = this.changeDateRetourHandler.bind(this);
        this.changeEtatHandler = this.changeEtatHandler.bind(this);
        this.updateDemande = this.updateDemande.bind(this);
    }

    componentDidMount(){
        DemandeDataService.getDemandeById(this.state.id).then( (res) =>{
            let demande = res.data;
            this.setState({
              nom: demande.nom,
              cin: demande.cin,
              localisation: demande.localisation,
              numTel: demande.numTel,
              city: demande.city,
              quantite: demande.numTel,
              dateRetour: demande.dateRetour,
              etat : visite.etat
            });
        });
    }

    updateDemande = (e) => {
        e.preventDefault();
        let demande = {
            nom: this.state.nom,
            cin: this.state.cin,
            localisation: this.state.localisation,
            numTel: this.state.numTel,
            city: this.state.city,
            quantite: this.state.quantite,
            dateRetour: this.state.dateRetour, 
            etat: this.state.etat};
        console.log('demande => ' + JSON.stringify(demande));
        console.log('id => ' + JSON.stringify(this.state.id));
        DemandeDataService.updateDemande(demande, this.state.id).then( res => {
            this.props.history.push('/demandes');
        });
    }
    
    changeNomHandler= (event) => {
        this.setState({nom: event.target.value});
      }
      
      changeCinHandler= (event) => {
        this.setState({cin: event.target.value});
      }
      
      changeLocalisationHandler= (event) => {
        this.setState({etat: event.target.value});
      }
      
      changeNumTelHandler= (event) => {
        this.setState({numTel: event.target.value});
      }
      
      changeCityHandler= (event) => {
        this.setState({etat: event.target.value});
      }
      
      changeQuantiteHandler= (event) => {
        this.setState({etat: event.target.value});
      }
      
      changeDateRetourHandler= (event) => {
          this.setState({dateRetour: event.target.value});
      }
      
      changeEtatHandler= (event) => {
          this.setState({etat: event.target.value});
      }

    cancel(){
        this.props.history.push('/demandes');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Visites</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                                <label> Nom: </label>
                                                <input placeholder="Nom"  name="nom" className="form-control" 
                                                    value={this.state.nom} onChange={this.changeNomHandler}/>
                                            </div>
                                            <div className = "form-group">
                                                <label> C.I.N: </label>
                                                <input placeholder="Carte Identite Nationale" name="cin" className="form-control" 
                                                    value={this.state.cin} onChange={this.changeCinHandler}/>
                                            </div>
                                            <div className = "form-group">
                                                <label> Localisation: </label>
                                                <input placeholder="Localisation" name="localisation" className="form-control" 
                                                    value={this.state.localisation} onChange={this.changeLocalisationHandler}/>
                                            </div>
                                            <div className = "form-group">
                                                <label> Numero du Telephone: </label>
                                                <input placeholder=" Numero du Telephone"name="numTel" className="form-control" 
                                                    value={this.state.numTel} onChange={this.changeNumTelHandler}/>
                                            </div>
                                            <div className = "form-group">
                                                <label> City: </label>
                                                <input placeholder="City" name="city" className="form-control" 
                                                    value={this.state.city} onChange={this.changeCityHandler}/>
                                            </div>
                                            <div className = "form-group">
                                                <label> Quantite: </label>
                                                <input placeholder="Quantite" name="quantite" className="form-control" 
                                                    value={this.state.quantite} onChange={this.changeQuantiteHandler}/>
                                            </div>
                                            <div className = "form-group">
                                                <label> Date Retour: </label>
                                                <input placeholder="Date Retour" type="date" name="dateRetour" className="form-control" 
                                                    value={this.state.dateRetour} onChange={this.changeDateRetourHandler}/>
                                            </div>
                                            <div className = "form-group">
                                                <label> Etat: </label>
                                                <input placeholder="Etat" name="etat" className="form-control" 
                                                    value={this.state.etat} onChange={this.changeEtatHandler}/>
                                            </div>

                                        <button className="btn btn-success" onClick={this.updateDemande}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

