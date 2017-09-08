import React, { Component } from 'react';
import { render } from 'react-dom';
import Dropzone from 'react-dropzone'
import Users from './users.jsx'
import {Modal, Button, Panel} from 'react-bootstrap/lib'
import { connect } from 'react-redux'
import axios from 'axios'

class Planet extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: true}
    this.hideModal = this.hideModal.bind(this)
  }

  hideModal(){
    let self = this
    self.setState({showModal: false})
    self.props.hideModal()
  }


  render() {
    let self = this
    const {planet} = self.props
    return (
      <Modal
        show={self.state.showModal}
        onHide={self.hideModal}
        dialogClassName="data-modal"
        className="journal-popup"
      >
        <Modal.Header className="bb-0" closeButton>
          <Modal.Title id="contained-modal-title-lg">{ planet.planetDetailLoaded ? planet.planetDetail.name : ""} Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body className="discovery-performance">
          {planet.planetDetailLoaded ?
            <div className="row">
              <div className="col-sm-4">
                <Panel header={'diameter'} bsStyle="success" >
                {planet.planetDetail.diameter}
                </Panel>
              </div>
              <div className="col-sm-4">
                <Panel header={'climate'} bsStyle="success" >
                {planet.planetDetail.climate}
                </Panel>
              </div>
              <div className="col-sm-4">
                <Panel header={'population'} bsStyle="success" >
                  {planet.planetDetail.population}
                </Panel>
              </div>
            </div>
            :
            <h2>Loading ...</h2>
          }
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    )
  }
}

const mapStateToProps = function(state){
  return {
    planet: state.planet
  }
}

export default connect(mapStateToProps)(Planet);
