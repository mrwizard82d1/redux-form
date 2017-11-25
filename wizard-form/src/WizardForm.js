import React from 'react';
import PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';

class WizardForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.renderPage = this.renderPage.bind(this);
    
    this.state = {
      page: 1,
    };
  }
  
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }
  
  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }
  
  renderPage() {
    const { page }  = this.state;
    const { onSubmit } = this.props;
    
    switch(page) {
    case 1:
      return <WizardFormFirstPage onSubmit={this.nextPage} />;
    case 2:
      return <WizardFormSecondPage onSubmit={this.nextPage} previousPage={this.previousPage} />;
    case 3:
      return <WizardFormThirdPage onSubmit={onSubmit} previousPage={this.previousPage} />;
    default:
      throw new Error(`Unexpected page: ${page}`);
    }
  }
  
  render() {
    return (
      <div>
        {this.renderPage()}
      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;