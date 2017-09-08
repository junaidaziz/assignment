import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import _ from 'underscore'
import Planet from './planet.jsx'
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap/lib'
import {
  getUsers,
  getPlanetDetail
} from './actions'


class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allUsers: [],
      count: 0,
      isLoading: true,
      planetDetail: false
    }
    this.fetchUsers = this.fetchUsers.bind(this)
    this.userList = this.userList.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  fetchUsers(usersUrl){
    let self = this
    self.props.loadUser(usersUrl)
  }

  planetDetail(planetUrl){
    let self = this
    console.log(planetUrl);
    self.props.loadPlanetDetail(planetUrl)
    self.setState({showPlanetDetail: true})
  }

  hideModal(){
    let self = this
    self.setState({showPlanetDetail: false})
  }

  userList(){
    let self = this
    const {allUsers} = self.props
    return (
      <tbody>
        { _.map(allUsers.users.data.results, (user, index) => {
            return (
              <tr key={index.toString()}>
                <td>{user.name}</td>
                <td>{user.height}</td>
                <td>{user.mass}</td>
                <td>{user.created}</td>
                <td>{user.edited}</td>
                <td>
                  <Button className="btn btn-primary" onClick={self.planetDetail.bind(self, user.homeworld)}>Home Detail</Button>
                </td>
              </tr>
            )
          })
        }
      </tbody>

    )
  }

  render() {
    let self = this
    const {allUsers} = self.props
    return (
       <div className="main">
          <div className="wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-ms-12">
                        <Table striped bordered condensed hover id="asdasdas">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Height</th>
                              <th>Mass</th>
                              <th>Created</th>
                              <th>Edited</th>
                              <th>Planet</th>
                            </tr>
                          </thead>
                          {allUsers.isLoading ?
                            <div className="loader"></div>
                            :
                            self.userList()
                          }

                        </Table>
                        <div className="clearfix"></div>
                        {!allUsers.isLoading &&
                          <ul className="pagination">
                            {(allUsers.users.data.previous != null) &&
                              <li><a href="javascript:void(0)" onClick={self.fetchUsers.bind(self, allUsers.users.data.previous)}>Pervious Page</a></li>
                            }
                            <li><a href="javascript:void(0)" onClick={self.fetchUsers.bind(self, allUsers.users.data.next)} >Next Page</a></li>
                          </ul>
                        }
                        {self.state.showPlanetDetail &&
                          <Planet hideModal={self.hideModal} showModal={true} />
                        }
                    </div>
                </div>
            </div>
          </div>
       </div>
    );
  }
}

const mapStateToProps = function(state){
  return {
    allUsers: state.app
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: (nextUrl) => {
      dispatch(getUsers(nextUrl))
    },
    loadPlanetDetail: (nextUrl) => {
      dispatch(getPlanetDetail(nextUrl))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);
