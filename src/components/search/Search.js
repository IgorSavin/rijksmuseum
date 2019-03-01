import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import axios from 'axios'
import ImageResults from '../image_results/ImageResults'

class Search extends Component {
  state = {
    searchText: '',
    amount: 10,
    apiUrl: 'https://www.rijksmuseum.nl/api/en',
    apiKey: 'ZPctIexz',
    results: []
  }

  onTextChange = (e) =>{
    const val = e.target.value;

    this.setState({[e.target.name]: val}, () =>{
      if(val === ''){
        this.setState({results:[]});
      }else{
        axios.get(`${this.state.apiUrl}/collection?q=${this.state.searchText}&key=${this.state.apiKey}&ps=${this.state.amount}&imgonly=true&format=json`)
      .then(res => this.setState({results: res.data.artObjects}))
      .catch(err => console.log(err));
      }
      
    });
  }

  onAmountChange = (e, index, value) => this.setState({amount: value});

  render() {
    console.log(this.state.results);

    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search For Images"
          fullWidth={true}
        />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={50} primaryText="50" />
          <MenuItem value={100} primaryText="100" />
        </SelectField>
        {this.state.results.length > 0 ? (<ImageResults results={this.state.results} />): <p>What art object would you like to find?</p>}
      </div>
    )
  }
}

export default Search


