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
        this.setState({data: result});
      })
  }


  render() {
    return (
      <div className="container">
        <div className={"row d-flex"}>
          {
            this.state.data.map((item, index) => {
              return <Card key={index} {...item}/>
            })
          }
        </div>
      </div>

    )
  }
}

export default Cars;