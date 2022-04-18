import React,{useEffect} from 'react'
import Gravatar from 'react-gravatar';
import {  useQuery } from '@apollo/client';
import { users} from "../graphQL/Query";
import { useNavigate } from 'react-router-dom';

function Dash() {
    const navigate = useNavigate()
   
    useEffect(()=>{
      if (!localStorage.getItem('token')) {
        navigate("/")
      }
  
    }, [])
      const { loading, error, data } = useQuery(users);
      if (loading) return "Loading..."
      if (error) return "Error..."
  return (
    <div className='container'>
    {data.users.map((data) => (
    <section className="page-section bg-info " id="team" key={data.id} style={{backgroundImage: "url('https://media.istockphoto.com/vectors/nurse-and-elderly-patient-vector-id1205779050?k=20&m=1205779050&s=612x612&w=0&h=FwFsW7tZCWAupZxGI75AJysOIpdkrur9YygHUfssFjo=')", backgroundRepeat:'no-repeat' }}>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Messages:</h2>
                    <h3 className="section-subheading ">{data.message}</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                        <Gravatar email = {data.email} default="monsterid" size={200} />
                            <h4>{data.username}</h4>
                            <p className="text-muted">Lead Designer</p>
                            <p className="text-muted">{data.email}</p>
                            <p className="text-muted">{data.phone}</p>
                            <p className="text-muted">{data.city}{" "}{data.state}</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                   
                   
                    
                    
                    
                    
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">{data.message}</p></div>
                </div>
            </div>
        </section>

    
    
    
))}
    </div>
  )
}

export default Dash