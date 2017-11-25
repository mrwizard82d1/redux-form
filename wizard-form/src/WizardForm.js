import React from 'react';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';

class WizardForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.renderPage = this.renderPage.bind(this);
    
    this.state = {
      page: 1,
    };
  }
  
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }
  
  prevPage() {
    this.setState({ page: this.state.page - 1 });
  }
  
  renderPage() {
    const { page }  = this.state;
    switch(page) {
    case 1:
      return <WizardFormFirstPage onSubmit={this.nextPage} />;
    case 2:
      return <WizardFormSecondPage onSubmit={this.nextPage} previousPage={this.prevPage} />;
    case 3:
      return 'Saruman the White';
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

export default WizardForm;