import React, { Component } from 'react'
import VisiteDataService from "../services/visite-service";

export default class UpdateVisite extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            date: '',
            description: '',
            etat: ''
        }
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeEtatHandler = this.changeEtatHandler.bind(this);
        this.updateVisite = this.updateVisite.bind(this);
    }

    componentDidMount(){
        VisiteDataService.getVisiteById(this.state.id).then( (res) =>{
            let visite = res.data;
            this.setState({date: visite.date,
                description: visite.description,
                etat : visite.etat
            });
        });
    }

    updateVisite = (e) => {
        e.preventDefault();
        let visite = {date: this.state.date, description: this.state.description, etat: this.state.etat};
        console.log('visite => ' + JSON.stringify(visite));
        console.log('id => ' + JSON.stringify(this.state.id));
        VisiteDataService.updateVisite(visite, this.state.id).then( res => {
            this.props.history.push('/visites');
        });
    }
    
    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeEtatHandler= (event) => {
        this.setState({etat: event.target.value});
    }

    cancel(){
        this.props.history.push('/visites');
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
                                            <label> Date: </label>
                                            <input placeholder="Date" type="date" name="deta" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Etat: </label>
                                            <input placeholder="Etat" name="etat" className="form-control" 
                                                value={this.state.etat} onChange={this.changeEtatHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateVisite}>Save</button>
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

