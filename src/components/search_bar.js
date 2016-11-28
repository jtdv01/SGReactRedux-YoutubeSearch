import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {term: 'default value'};
  }

  render(){
    // return
    return(
      <div>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    console.log(term);
    this.props.searchTermFunc(term);
  }
}

export { SearchBar };
