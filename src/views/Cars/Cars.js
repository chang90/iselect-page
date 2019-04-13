import React from 'react';

import Card from '../../components/Card';
import {carServices} from '../../services/carServices';

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    carServices.getCars()
      .then(result => {
        // console.log(result);
        this.setState({data: result});
      })
  }

  render() {
    return (
      <div>
        {
          this.state.data.map(item => {
            return <Card {...item}/>
          })
        }
      </div>
    )
  }
}

export default Cars;