import React, { Component } from "react";
import Loadable from "react-loadable";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./header/components/Header";
import Footer from "./common/components/Footer";
import Landing from "./landing/Landing";
import history from "./common/components/history";
import LinearProgress from "@material-ui/core/LinearProgress";
import { LocalizeProvider } from "react-localize-redux";
import Login from "./header/components/LoginUser";

function Loading({ error }) {
  if (error) {
    return (<h2 style={{
      height: '40px',
      background: '#b3d9f7',
      color: 'white',
      textAlign: 'center',
      verticalAlign: 'middle',
      paddingTop: '5px',
      fontSize: '20px',
      fontWeight: '500'
      }}>
      Oh nooess! Something went wrong. Try re-loading!
      </h2>)
  } else {
    return <LinearProgress color="secondary" />;
  }
}

const GiftsListContainer = Loadable({
  // loader: () => import("./gifts/containers/GiftsListContainer"),
  loader: () => import("./gifts/containers/GiftListMasonryContainer"),
  loading: Loading
});

const ProfileContainers = Loadable({
  loader: () => import("./user/containers/profileContainers"),
  loading: Loading
});

const GiftShowContainer = Loadable({
  loader: () => import("./gifts/containers/GiftShowContainer"),
  loading: Loading
});

const GiftsSendContainer = Loadable({
  // loader: () => import("./user/containers/giftsSendContainer"),
  loader: () => import("./user/containers/GiftsSendTableContainer"),
  loading: Loading
});

const GiftsReceivedContainer = Loadable({
  loader: () => import("./user/containers/giftsReceivedContainer"),
  loading: Loading
});

// const GiftCreateContainer = Loadable({
//   loader: () => import("./gifts/containers/GiftCreateContainer"),
//   loading: Loading
// });

const AddUpdateForm = Loadable({
  // loader: () => import("./admin/components/addUpdateForm"),
  loader: () => import("./admin/components/AddUpdateFormikForm"),
  loading: Loading
});

const ErrorPage = Loadable({
  loader: () => import("./common/components/ErrorPage"),
  loading: Loading
});

class App extends Component {
    render() {
        return (
        <LocalizeProvider>
          <Header />
          <Router history={history}>
            <Switch>
              {/* <Route path="/giftCards/new" exact component={GiftCreateContainer} /> */}
              <Route exact path="/giftCards/:id" component={GiftShowContainer} />
              <Route exact path="/giftCards" component={GiftsListContainer} />
              <Route exact path="/Profile" component={ProfileContainers} />
              <Route exact path="/GiftsSend" component={GiftsSendContainer} />
              <Route
                exact
                path="/GiftsReceived"
                component={GiftsReceivedContainer}
              />
              <Route exact path="/AddUpdateForm" component={AddUpdateForm} />
              <Route exact path='/AddUpdateForm/:id' component={AddUpdateForm}/>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/404" component={ErrorPage} />
              <Redirect to="/404" />
            </Switch>
          </Router>
          <Footer />
        </LocalizeProvider>
        );
    }
}

export default App