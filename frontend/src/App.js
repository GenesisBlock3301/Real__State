import Home from "./containers/Home";
import Layout from "./hocs/Layout";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './containers/About'
import Contact from './containers/Contact'
import Listing from './containers/Listings'
import ListingDetail from './containers/ListingDetail'
import Login from './containers/Login'
import SignUp from './containers/Signup'
import NotFound from "./components/NotFound";
import './sass/_main.scss'
import {Provider} from 'react-redux'
import store from "./store";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/listing" component={Listing}/>
                        <Route exact path="/listing/:id" component={ListingDetail}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={SignUp}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    );
}

export default App;
