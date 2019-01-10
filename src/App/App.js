import React from 'react';
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';
import authRequests from '../helpers/data/authRequests';
import connection from '../helpers/data/connection';

import MyNavbar from '../components/Navbar/MyNavbar';
import Auth from '../components/Pages/Auth/Auth';
import EditFriend from '../components/Pages/EditFriend/EditFriend';
import EditHoliday from '../components/Pages/EditHoliday/EditHoliday';
import Friends from '../components/Pages/Friends/Friends';
import HolidayDetail from '../components/Pages/HolidayDetail/HolidayDetail';
import HolidayFriends from '../components/Pages/HolidayFriends/HolidayFriends';
import Holidays from '../components/Pages/Holidays/Holidays';
import NewFriend from '../components/Pages/NewFriend/NewFriend';
import NewHoliday from '../components/Pages/NewHoliday/NewHoliday';



class App extends React.Component {
  state = {
    authed: false,
    pendingUser: true,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          pendingUser: false,
        });
      } else {
        this.setState({
          authed: false,
          pendingUser: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed, pendingUser } = this.state;
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (pendingUser) {
      return null;
    }
    return (
      <div className="App">
        <MyNavbar />
        <Auth />
        <EditFriend />
        <EditHoliday />
        <Friends />
        <HolidayDetail />
        <HolidayFriends />
        <Holidays />
        <NewFriend />
        <NewHoliday />


      </div>
    );
  }
}

export default App;
