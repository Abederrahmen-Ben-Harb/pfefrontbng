import React, { Component , useState} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";


import StaffDataService from "../../services/staff-service";


const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const [roleState, setRoleState] = useState("Select Role");

export default class AddStaff extends Component {




  constructor(props) {
    super(props)

    this.state = {
        // step 2
        id: this.props.match.params.id,
        username: "",
        email: "",
        matricule: "",
        password: "",
        role: "",
        successful: false,
        message: ""
    }
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeMatricule = this.onChangeMatricule.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.saveOrUpdateVisite = this.saveOrUpdateVisite.bind(this);
}

/*
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
*/

onChangeUsername(e) {
  this.setState({
    username: e.target.value
  });
}

onChangeEmail(e) {
  this.setState({
    email: e.target.value
  });
}

onChangeMatricule(e) {
  this.setState({
    matricule: e.target.value
  });
}

onChangePassword(e) {
  this.setState({
    password: e.target.value
  });
}

onChangeRole(e) {
  this.setState({
    role: e.target.value
  });
}

handleRegister(e) {
  e.preventDefault();

  this.setState({
    message: "",
    successful: false
  });

  this.form.validateAll();

  if (this.checkBtn.context._errors.length === 0) {
    StaffDataService.register(
      this.state.username,
      this.state.email,
      this.state.matricule,
      this.state.password,
      this.state.role
    ).then(
      response => {
        this.setState({
          message: response.data.message,
          successful: true
        });
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage
        });
      }
    );
  }
}

cancel(){
    this.props.history.push('/staffs');
}

getTitle(){
    if(this.state.id === '_addV'){
        return <h3 className="text-center">Add Staff</h3>
    }else{
        return <h3 className="text-center">Update Staff</h3>
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
                            <img
                              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                              alt="profile-img"
                              className="profile-img-card"
                            />
                                <Form 
                                  onSubmit={this.handleRegister}
                                  ref={c => {
                                    this.form = c;
                                  }}
                                >
                                    {!this.state.successful && (
                                      <div>
                                        <div className="form-group">
                                          <label htmlFor="username">Username</label>
                                          <Input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            value={this.state.username}
                                            onChange={this.onChangeUsername}
                                            validations={[required, vusername]}
                                          />
                                        </div>

                                        <div className="form-group">
                                          <label htmlFor="matricule">Matricule</label>
                                          <Input
                                            type="text"
                                            className="form-control"
                                            name="matricule"
                                            value={this.state.matricule}
                                            onChange={this.onChangeMatricule}
                                            validations={[required, vusername]}
                                          />
                                        </div>

                                        <div className="form-group">
                                          <label htmlFor="email">Email</label>
                                          <Input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChangeEmail}
                                            validations={[required, email]}
                                          />
                                        </div>

                                        <div className="form-group">
                                          <label htmlFor="password">Password</label>
                                          <Input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChangePassword}
                                            validations={[required, vpassword]}
                                          />
                                        </div>


                                        <div className="form-group">
                                          <label htmlFor="role">Role</label>
                                          <select className="custom-select"
                                            value={roleState}
                                            onChange={(e) => {
                                              const selectedRole = e.target.value;
                                              setRoleState(selectedRole);
                                          }} >
                                            <option value="Select Role" selected>Select Role</option>
                                            <option value="ROLE_ADMINMET">Admin Metier</option>
                                            <option value="ROLE_CHERCHEUR">Chercheur</option>
                                            <option value="ROLE_ADMIN">Admin</option>
                                          </select>
                                          {roleState}
                                        </div>



                                        <div className="form-group">
                                          <button className="btn btn-primary btn-block">Sign Up</button>
                                        </div>
                                      </div>
                                    )}

                                    {this.state.message && (
                                      <div className="form-group">
                                        <div
                                          className={
                                            this.state.successful
                                              ? "alert alert-success"
                                              : "alert alert-danger"
                                          }
                                          role="alert"
                                        >
                                          {this.state.message}
                                        </div>
                                      </div>
                                    )}
                                    <CheckButton
                                      style={{ display: "none" }}
                                      ref={c => {
                                        this.checkBtn = c;
                                      }}
                                    />
                              </Form>
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