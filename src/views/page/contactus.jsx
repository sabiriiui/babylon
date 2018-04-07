import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import {DataStore} from '../../stores/DataStore';
import {getLocale} from '../../Utils/commonUtilities.react';

import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: -8.791072,
  lng: 115.2113233
};

const params = {
  v: '3.exp',
  key: 'AIzaSyCG8mbqdhbHdJ7PKg5p-gWoFsrqc2NbvrQ'
};

export default class ContactusPage extends React.Component {

  constructor() {

    super();

  }

  onMapCreated(map) {
    map.setOptions({disableDefaultUI: true});
  }

  render() {

    let languageLocale = getLocale(DataStore.getLocale());

    return <div className="contactus_div">
      <div className="imageConatiner contactus">
        <div className="bannerText">
          <span className="discover">{languageLocale["CONTACTUS"]}</span>
        </div>
        <div>
          <Gmaps width={'100%'} height={'60vh'} lat={coords.lat} lng={coords.lng} zoom={17} loadingMessage={'loading...'} params={params} onMapCreated={this.onMapCreated}>
            <Marker lat={coords.lat} lng={coords.lng} draggable={true} onDragEnd={this.onDragEnd}/>
          </Gmaps>
        </div>
      </div>
      <div class="pages_content container">
        <legend>CONTACT INFORMATION</legend>
        <div class="contact_infor">
          <ul>
            <li>
              <label>
                <i class="fa fa-map-marker"></i>ADDRESS</label>
              <div class="des">Jalan bypass Ngurah rai no.77xx benoa</div>
            </li>
            <li>
              <label>
                <i class="fa fa-phone"></i>TEL NO</label>
              <div class="des">+62287877976991 (tour) | +6287877976992 (ticketing)</div>
            </li>
            <li>
              <label>
                <i class="fa fa-print"></i>FAX NO</label>
              <div class="des">+62287877976991 (tour) | +62287877976991 (ticketing)</div>
            </li>
            <li>
              <label>
                <i class="fa fa-envelope"></i>EMAIL</label>
              <div class="des">info@babylonholidays.com</div>
            </li>
            <li>
              <label>
                <i class="fa fa-clock-o"></i>WORKING HOURS</label>
              <div class="des">Mon – Fri 9:00 am – 5:30 pm, Sat 9:00 am – 1:00 pm
                <br/>
                  We are closed on 1st &amp; 3rd Sat of every month, Sundays &amp; public holidays</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="formContainer">
          <Form action="https://formspree.io/info@babylonholidays.com" method="POST">
            <FormGroup tag="fieldset">
              <legend>Have a question?</legend>
              <FormGroup>
                <Label for="nameField">{languageLocale["FORMNAME"]}</Label>
                <Input type="text" name="name" id="nameField" placeholder=""/>
              </FormGroup>
              <FormGroup>
                <Label for="emailField">{languageLocale["FORMEMAIL"]}</Label>
                <Input type="email" name="email" id="emailField" placeholder=""/>
              </FormGroup>

              <FormGroup>
                <Label for="subjectField">{languageLocale["FORMSUBJECT"]}</Label>
                <Input type="text" name="subject" id="subjectField" placeholder=""/>
              </FormGroup>

              <FormGroup>
                <Label for="messageField">{languageLocale["FORMMESSAGE"]}</Label>
                <Input type="textarea" name="message" id="messageField" placeholder=""/>
              </FormGroup>

            </FormGroup>
            <input type="Submit" className="btn btn-lg product-button" value={languageLocale["FORMSUBMIT"]}></input>

          </Form>
        </div>

      </div>
      }


}
