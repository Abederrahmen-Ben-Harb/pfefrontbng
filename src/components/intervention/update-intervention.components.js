import React, { Component } from 'react'
import InterventionDataService from "../../services/intervention-service";

export default class UpdateIntervention extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: ''
        }
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updateIntervention = this.updateIntervention.bind(this);
    }

    componentDidMount(){
        InterventionDataService.getInterventionById(this.state.id).then( (res) =>{
            let intervention = res.data;
            this.setState({
                description: visite.description
            });
        });
    }

    updateIntervention = (e) => {
        e.preventDefault();
        let intervention = {description: this.state.description};
        console.log('intervention => ' + JSON.stringify(intervention));
        console.log('id => ' + JSON.stringify(this.state.id));
        InterventionDataService.updateIntervention(intervention, this.state.id).then( res => {
            this.props.history.push('/visites');
        });
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    cancel(){
        this.props.history.push('/interventions');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Intervention</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateIntervention}>Save</button>
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

