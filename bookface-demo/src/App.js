import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'
import './App.css'
import axios from 'axios'

class Sessions extends React.Component {
    state = {
       sessions: []
    };

    componentDidMount() {
       this.getSessions();
    }

    getSessions = async () => {
        const instance = axios.create({
            baseURL: 'https://fitness.googleapis.com/',
            timeout: 1000,
            headers: {'Authorization': `Bearer ${this.props.accessToken}`}
          });

        let sessions = await instance.get('/fitness/v1/users/me/sessions')

        this.setState({ sessions: sessions.data.session });
    };

    render() {
       return (
           <div>
               {this.state.sessions.length === 0 ? (
                   <div>Loading...</div>
               ) : (
                   this.state.sessions.map(s => {

                    // id                 : com.evgeniysharafan.tabatatimer1604490624628
                    // name               : 00:30 + 00:30
                    // startTimeMillis    : 1604490624628
                    // endTimeMillis      : 1604494434005
                    // modifiedTimeMillis : 1604516300020
                    // application        : @{packageName=com.evgeniysharafan.tabatatimer}
                    // activityType       : 45

                       return <div key={s.id}>{`${s.id} - ${s.name} - ${s.application.packageName} - ${s.activityType}`}</div>;
                    })
               )}
           </div>
       );
     }
}

const Dashboard = () => {
    const authInstance = window.gapi.auth2.getAuthInstance()
    const user = authInstance.currentUser.get()
    const profile = user.getBasicProfile()
    const email = profile.getEmail()
    const imageUrl = profile.getImageUrl()

    return (
        <>
            <nav>
                <div>BookFace</div>
                <img className="push" src={imageUrl}/>
                <Dropdown>
                    <Dropdown.Toggle as="a">
                        {email}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={authInstance.signOut}>Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
            <div className="container">
                <p>All sessions...</p>
                <Sessions accessToken={user.wc.access_token} />
            </div>
        </>
    )
}

class LoginPage extends React.Component {
    componentDidMount() {
        window.gapi.load('signin2', () => {
            window.gapi.signin2.render('login-button')
        })
    }

    render() {
        return (
            <div className="container">
                <div id="login-button">Sign in with Google</div>
            </div>
        )
    }
}

const LandingPage = () => {
    return (
        <div className="container">
            <h1>BookFace</h1>
            <p>Leading provider of bookfaces</p>
            <Link to="/dashboard">Go to Dashboard</Link>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isSignedIn: null
        }
    }

    initializeGoogleSignIn() {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: '?.apps.googleusercontent.com',
          scope: "openid email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/fitness.activity.read",
        }).then(() => {
          const authInstance =  window.gapi.auth2.getAuthInstance()
          const isSignedIn = authInstance.isSignedIn.get()
          this.setState({isSignedIn})

          authInstance.isSignedIn.listen(isSignedIn => {
            this.setState({isSignedIn})
          })
        })
      })
    }

    componentDidMount() {
      const script = document.createElement('script')
      script.src = 'https://apis.google.com/js/platform.js'
      script.onload = () => this.initializeGoogleSignIn()
      document.body.appendChild(script)
    }

    ifUserSignedIn(Component) {
        if (this.state.isSignedIn === null) {
            return (
                <h1>Checking if you're signed in...</h1>
            )
        }
        return this.state.isSignedIn ?
            <Component/> :
            <LoginPage/>
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <LandingPage/>
                    </Route>
                    <Route path="/dashboard" render={() => this.ifUserSignedIn(Dashboard)}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
