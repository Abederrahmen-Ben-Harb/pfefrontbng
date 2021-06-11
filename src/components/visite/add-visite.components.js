import React, { Component } from "react";
import VisiteDataService from "../../services/visite-service";

export default class AddVisite extends Component {



  constructor(props) {
    super(props)

    this.state = {
        // step 2
        id: this.props.match.params.id,
        date: '',
        description: '',
        etat: ''
    }
    this.changeDateHandler = this.changeDateHandler.bind(this);
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    this.changeEtatHandler = this.changeEtatHandler.bind(this);
    this.saveOrUpdateVisite = this.saveOrUpdateVisite.bind(this);
}

// step 3
componentDidMount(){

    // step 4
    if(this.state.id === '_addV'){
        return
    }else{
        VisiteDataService.getVisiteById(this.state.id).then( (res) =>{
            let visite = res.data;
            this.setState({
              date: visite.date,
              description: visite.description,
              etat : visite.etat
            });
        });
    }        
}
saveOrUpdateVisite = (e) => {
    e.preventDefault();
    let visite = {date: this.state.date, description: this.state.description, etat: this.state.etat};
    console.log('visite => ' + JSON.stringify(visite));

    // step 5
    if(this.state.id === '_addV'){
        VisiteDataService.createVisite(visite).then(res =>{
            this.props.history.push('/visites');
        });
    }else{
        VisiteDataService.updateVisite(visite, this.state.id).then( res => {
            this.props.history.push('/visites');
        });
    }
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

getTitle(){
    if(this.state.id === '_addV'){
        return <h3 className="text-center">Add Visite</h3>
    }else{
        return <h3 className="text-center">Update Visite</h3>
    }
}
render() {
    return (
        <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Date: </label>
                                        <input placeholder="Date" type="date" name="date" className="form-control" 
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

                                    <button className="btn btn-success" onClick={this.saveOrUpdateVisite}>Save</button>
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


























  /*
  constructor(props) {
    super(props);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveVisite = this.saveVisite.bind(this);
    this.newVisite = this.newVisite.bind(this);

    this.state = {
      id: null,
      date: '',
      description: "",
      etat: false,

      submitted: false
    };
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveVisite() {
    var data = {
      date: this.state.date,
      description: this.state.description,
      etat: this.state.etat
    };

    VisiteDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          date: response.data.date,
          description: response.data.description,
          etat: response.data.etat,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newVisite() {
    this.setState({
      id: null,
      date: '',
      description: "",
      etat: false,

      submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newVisite}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  required
                  value={this.state.date}
                  onChange={this.onChangeDate}
                  name="date"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  name="description"
                />
              </div>
  
              <button onClick={this.saveVisite} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    }
}





// code 2






constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            date: '',
            description: '',
            etat: ''
        }
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeEtatHandler = this.changeEtatHandler.bind(this);
        this.saveOrUpdateVisite = this.saveOrUpdateVisite.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_addV'){
            return
        }else{
            VisiteDataService.getVisiteById(this.state.id).then( (res) =>{
                let visite = res.data;
                this.setState({
                  date: visite.date,
                  description: visite.description,
                  etat : visite.etat
                });
            });
        }        
    }
    saveOrUpdateVisite = (e) => {
        e.preventDefault();
        let visite = {date: this.state.date, description: this.state.description, etat: this.state.etat};
        console.log('visite => ' + JSON.stringify(visite));

        // step 5
        if(this.state.id === '_addV'){
            VisiteDataService.createVisite(visite).then(res =>{
                this.props.history.push('/visites');
            });
        }else{
            VisiteDataService.updateVisite(visite, this.state.id).then( res => {
                this.props.history.push('/visite');
            });
        }
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

    getTitle(){
        if(this.state.id === '_addV'){
            return <h3 className="text-center">Add Visite</h3>
        }else{
            return <h3 className="text-center">Update Visite</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input placeholder="Date" type="date" name="date" className="form-control" 
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

                                        <button className="btn btn-success" onClick={this.saveOrUpdateVisite}>Save</button>
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





*/