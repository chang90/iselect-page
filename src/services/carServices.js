import {dummyData} from './dummyData';

const getCars = () => {
  const url = `https://s3-ap-southeast-2.amazonaws.com/iselect-front-end-test/car-results`;

  return fetch(url)
    .then(
      res => {
        if (res.ok) {
          return res.json()
        } else {
          return dummyData;
        }
      },
      rej => {
        return dummyData;
      }
    )
    .catch(
      error => {
        console.log(error);
      }    
    )
}

export const carServices = {
  getCars
}

