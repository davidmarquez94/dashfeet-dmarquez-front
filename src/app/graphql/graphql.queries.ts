import { gql } from 'apollo-angular';

const GET_SHIPMENT = gql`
query shipment($id: ID!) {
    shipment(id: $id) {
        id
        delivery_address
        delivery_date
        status
        products {
          id
          quantity
          active {
            name
            description
            price
          }
        }
        client {
          name
        }
      }
    }
`;


export { GET_SHIPMENT };