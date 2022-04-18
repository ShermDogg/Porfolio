import { gql } from "@apollo/client";


export const users = gql`

query usersQuery{
  users{
    username,
    email,
    phone,
    city,
    state,
    zipcode,
    message
  }
    
  
  }



`






