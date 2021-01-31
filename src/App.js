import './App.css';
import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Web3 from 'web3';


class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const network = await web3.eth.net.getNetworkType()
    // Fetch Account
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0] })
  }

  constructor(props) {
    super(props);
    this.state = { account: '' };

  }

  render() {
    return (
      <Container>
        <Typography variant="h1">
          Hello World
        </Typography>
        <Typography variant="h5">
          Your account: {this.state.account}
        </Typography>
      </Container>
    )
  }
}



export default App;
