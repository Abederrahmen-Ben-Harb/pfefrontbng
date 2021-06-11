import React, { Component } from 'react'
import PlanteDataService from "../../services/plante-service";

export default class UpdatePlante extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nomPlante: '',
            description: '',
            type: ''
        }
        this.changeNomPlanteHandler = this.changeNomPlanteHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.updatePlante = this.updatePlante.bind(this);
    }

    componentDidMount(){
        PlanteDataService.getPlanteById(this.state.id).then( (res) =>{
            let plante = res.data;
            this.setState({nomPlante: plante.nomPlante,
                description: plante.description,
                type : plante.type
            });
        });
    }

    updatePlante = (e) => {
        e.preventDefault();
        let plante = {nomPlante: this.state.nomPlante, description: this.state.description, type: this.state.type};
        console.log('plante => ' + JSON.stringify(plante));
        console.log('id => ' + JSON.stringify(this.state.id));
        PlanteDataService.updatePlante(plante, this.state.id).then( res => {
            this.props.history.push('/plantes');
        });
    }
    
    changeNomPlanteHandler= (event) => {
        this.setState({nomPlante: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeTypeHandler= (event) => {
        this.setState({type: event.target.value});
    }

    cancel(){
        this.props.history.push('/plantes');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Plantes</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nom du Plante: </label>
                                            <input placeholder="Nom du Plante" name="nomPlante" className="form-control" 
                                                value={this.state.nomPlante} onChange={this.changeNomPlanteHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Type du Plante: </label>
                                            <input placeholder="Type du Plante" name="type" className="form-control" 
                                                value={this.state.type} onChange={this.changeTypeHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updatePlante}>Save</button>
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

