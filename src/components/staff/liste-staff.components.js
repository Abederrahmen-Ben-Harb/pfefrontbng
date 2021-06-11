import React, { Component } from "react";
import VisiteDataService from "../services/visite-service";

export default class VisitesList extends Component {


  constructor(props) {
    super(props)

    this.state = {
            visites: []
    }
    this.addVisite = this.addVisite.bind(this);
    this.editVisite = this.editVisite.bind(this);
    this.deleteVisite = this.deleteVisite.bind(this);
}

deleteVisite(id){
    VisiteDataService.deleteVisite(id).then( res => {
        this.setState({visites: this.state.visites.filter(visite => visite.id !== id)});
    });
}
viewVisite(id){
    this.props.history.push(`/view-visite/${id}`);
}
editVisite(id){
    this.props.history.push(`/add-visite/${id}`);
}

componentDidMount(){
    VisiteDataService.getVisites().then((res) => {
        this.setState({ visites: res.data});
    });
}

addVisite(){
    this.props.history.push('/add-visite/_addV');
}

render() {
    return (
        <div>
             <h2 className="text-center">Visites List</h2>
             <div className = "row">
                <button className="btn btn-primary" onClick={this.addVisite}> Add Visite</button>
             </div>
             <br></br>
             <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Date Visite </th>
                                <th> Description Visite </th>
                                <th> Etat Visite </th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.visites.map(
                                    visite => 
                                    <tr key = {visite.id}>
                                         <td> { visite.date} </td>   
                                         <td> {visite.description}</td>
                                         <td> {visite.etat}</td>
                                         <td>
                                             <button onClick={ () => this.editVisite(visite.id)} className="btn btn-info">Update </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteVisite(visite.id)} className="btn btn-danger">Delete </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewVisite(visite.id)} className="btn btn-info">View </button>
                                         </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

             </div>

        </div>
    )
}
}




















  /*
  constructor(props) {
    super(props);
    this.onChangeSearchDate = this.onChangeSearchDate.bind(this);
    this.retrieveVisites = this.retrieveVisites.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveVisite = this.setActiveVisite.bind(this);
    this.removeAllVisites = this.removeAllVisites.bind(this);
    this.searchDate = this.searchDate.bind(this);

    this.state = {
      visites: [],
      currentVisite: null,
      currentIndex: -1,
      searchDate: ''
    };
  }

  componentDidMount() {
    this.retrieveVisites();
  }

  onChangeSearchDate(e) {
    const searchDate = e.target.value;

    this.setState({
      searchDate: searchDate
    });
  }

  retrieveVisites() {
    VisiteDataService.getAll()
      .then(response => {
        this.setState({
          visites: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveVisites();
    this.setState({
      currentVisite: null,
      currentIndex: -1
    });
  }

  setActiveVisite(visite, index) {
    this.setState({
      currentVisite: visite,
      currentIndex: index
    });
  }

  removeAllVisites() {
    VisiteDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchDate() {
    VisiteDataService.findByDate(this.state.searchDate)
      .then(response => {
        this.setState({
          visites: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchDate, visites, currentVisite, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by date"
              value={searchDate}
              onChange={this.onChangeSearchDate}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchDate}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Visites List</h4>

          <ul className="list-group">
            {visites &&
              visites.map((visite, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveVisite(visite, index)}
                  key={index}
                >
                  {visite.date}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllVisites}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentVisite ? (
            <div>
              <h4>Visite</h4>
              <div>
                <label>
                  <strong>Date:</strong>
                </label>{' '}
                {currentVisite.date}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentVisite.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentVisite.etat ? "Accepter" : "En-Attente" , "Refuser"}
              </div>

              <Link
                to={"/visites/" + currentVisite.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Visite...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}






// code 2






constructor(props) {
        super(props)

        this.state = {
                visites: []
        }
        this.addVisite = this.addVisite.bind(this);
        this.editVisite = this.editVisite.bind(this);
        this.deleteVisite = this.deleteVisite.bind(this);
    }

    deleteVisite(id){
        VisiteDataService.deleteVisite(id).then( res => {
            this.setState({visites: this.state.visites.filter(visite => visite.id !== id)});
        });
    }
    viewVisite(id){
        this.props.history.push(`/view-visite/${id}`);
    }
    editVisite(id){
        this.props.history.push(`/add-visite/${id}`);
    }

    componentDidMount(){
        VisiteDataService.getVisites().then((res) => {
            this.setState({ visites: res.data});
        });
    }

    addVisite(){
        this.props.history.push('/add-visite/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Visites List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addVisite}> Add Visite</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Date Visite </th>
                                    <th> Description Visite </th>
                                    <th> Etat Visite </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.visites.map(
                                        visite => 
                                        <tr key = {visite.id}>
                                             <td> { visite.date} </td>   
                                             <td> {visite.description}</td>
                                             <td> {visite.etat}</td>
                                             <td>
                                                 <button onClick={ () => this.editVisite(visite.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteVisite(visite.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewVisite(visite.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}





*/