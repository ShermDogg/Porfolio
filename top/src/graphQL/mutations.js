import { gql } from "@apollo/client";


export const ADD_USER = gql`


   mutation addUser($username:String!, $email:String!, $phone:String!, $password:String!, $city:String!, $state:String!, $zipcode:String!, $personNeedingCare:String!, $message:String!) {
     addUser(username: $username email: $email phone: $phone password: $password city: $city state: $state zipcode: $zipcode personNeedingCare: $personNeedingCare message:$message ) 
      
     

    }
   
    
    
  


`


 export const LOG_IN = gql `
 

 mutation login($email:String!, $password:String!) {
   login(email: $email password:$password) 
     
   



 }
 
 
 
 
 
 
 
 
 
 `