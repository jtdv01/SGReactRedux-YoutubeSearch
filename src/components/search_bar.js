import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {term: 'default value'};
  }
  onInputChange(event){
    console.log(event.target.value);
  }

  render(){
    // return
    return(
      <div>
        <input
          value={this.state.term}
          onChange={event =>{console.log(event.target.value)}}
        />
      </div>
    );
  }
}

export { SearchBar };
