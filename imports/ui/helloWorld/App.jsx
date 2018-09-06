import React, { Component } from 'react';
import { I18n, Trans } from 'react-i18next';

export default class HelloMeteor extends React.Component {
  constructor() {
    super();
    this.state = {
      example: true
    }
  }
  changeState() {
    const example = this.state.example
    this.setState({example: !example})
  }
  render() {
    return (
      <I18n ns="translations">
        {
          (t, { i18n }) =>
            <div className="App">
              <div className="App-header">
                <button onClick={() => i18n.changeLanguage('en')}>en</button>
                <button onClick={() => i18n.changeLanguage('es')}>es</button>
              </div>
              <div className="App-intro">
                <button onClick={this.changeState.bind(this)}>Click me!</button>              
                {this.state.example == true ? <h1>{t('Browser_requirements')}</h1> : null}
              </div>
            </div>
        }
      </I18n>
    );
  }
};
