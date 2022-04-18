
import React, {useState} from 'react'
import {  useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import {  ADD_USER } from '../graphQL/mutations';


function Nav() {
    const [addUser, { err }] = useMutation(ADD_USER);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [personNeedingCare, setPersonNeedingCare] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top"><h1>216-520-0309</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
       
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading text-danger">
                <img src="assets/img/Shalons4.png" height={350} width={400} alt="..." />
                </div>
                
                <br/>
                <div className="masthead-heading text-uppercase  ">“The highest form of knowledge is empathy.” – Bill Bullard</div>
                <a className="btn btn-danger btn-xl text-uppercase" href="#services">Tell Me More</a>
            </div>
        </header>
   
        <section className="page-section "  id="services" >
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-info"></i>
                            <i className="fa-solid fa-hand-holding-heart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Compassion</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-info"></i>
                            <i className="fa-solid fa-house-medical fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3"> Comprehensive CarePlans</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-info"></i>
                            <i className="fa-solid fa-shield-heart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Caregiver Screening</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section>
   
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                   
                   
                    <div className="col-lg-4 col-sm-6 mb-4">
        
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://media.istockphoto.com/photos/home-caregiver-helping-a-senior-man-standing-up-at-home-picture-id1313001485?k=20&m=1313001485&s=612x612&w=0&h=wls4VWSBEWmOwwz73x4PGrP2yHUYd9cuVOn5loMAAKQ=" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Explore</div>
                                <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://media.istockphoto.com/photos/senior-couple-hugging-in-a-nursing-home-a-happy-senior-couple-next-picture-id1358965099?k=20&m=1358965099&s=612x612&w=0&h=fxNjugOYetYD5GDl5lePGbBrM9NOLyM2LoGXfUUtCzo=" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Finish</div>
                                <div className="portfolio-caption-subheading text-muted">Identity</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://media.istockphoto.com/photos/nurse-supporting-senior-patient-walking-or-moving-up-the-stairs-at-picture-id1322494434?k=20&m=1322494434&s=612x612&w=0&h=hSX-haNXSGQXQP3WuVdsSuCnquX8BroFkaZQ6KIcKW4=" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Lines</div>
                                <div className="portfolio-caption-subheading text-muted">Branding</div>
                            </div>
                        </div>
                    </div>
                    <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2009-2011</h4>
                                <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2015</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>July 2020</h4>
                                <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
                   
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
               
               
                <form id="contactForm" data-sb-form-api-token="3aba0046-6329-4876-973b-39e127919e34" onSubmit={ e =>{
             e.preventDefault();
             e.target.reset();

             const response = fetch("http://localhost:4000/send", {
                method: "POST",
               headers: {
              "Content-type": "application/json",
           },
           body: JSON.stringify({ email, message }),
        
      })
        .then((res) => res.json())
        .then(async (res) => {
          const resData = await res;
          console.log(resData);
          if (resData.status === "success") {
            alert("Message Sent");
          } else if (resData.status === "fail") {
            alert("Message failed to send");
            console.log(response)
            
          }
        });
        
             
     addUser({variables:{username: username,
      email: email, phone:phone, password:password, city:city, state:state, zipcode:zipcode, personNeedingCare: personNeedingCare, message:message }}).then(({data}) => {
        localStorage.setItem('token', data.addUser)   
      
        
        
    });
    
}}>
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                        
                                <input className="form-control" id={username} type="text" placeholder="Your Name *" data-sb-validations="required"  onChange={(e) => setUsername(e.target.value)}  />
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div className="form-group">
                                
                                <input className="form-control" id="email" type={email} placeholder="Your Email *" data-sb-validations="required,email" onChange={(e) => setEmail(e.target.value)} />
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>

                            <div className="form-group ">
                                
                                <input className="form-control" id="phone" type={phone} placeholder="Your Phone *" data-sb-validations="required"onChange={(e) => setPhone(e.target.value)} />
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                        </div>

                        <div className="form-group">
                                
                                <input className="form-control" id="password" type= {password} placeholder="Your Password *" data-sb-validations="required,password"onChange={(e) => setPassword(e.target.value)} />
                                <div className="invalid-feedback" data-sb-feedback="password:required">A password is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="password:password">password is not valid.</div>
                            </div>

                            <div className="form-group">
                                
                                <input className="form-control" id="city" type= {city} placeholder="Your City *" data-sb-validations="required,city" onChange={(e) => setCity(e.target.value)}/>
                                <div className="invalid-feedback" data-sb-feedback="city:required">A City is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="city:city">City is not valid.</div>
                            </div>

                            <div className="form-group">
                                
                                <input className="form-control" id="state" type={state} placeholder="Your State *" data-sb-validations="required,state" onChange={(e) => setState(e.target.value)}/>
                                <div className="invalid-feedback" data-sb-feedback="state:required">A state is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="state:state">State is not valid.</div>
                            </div>

                            <div className="form-group">
                                
                                <input className="form-control" id="zipcode" type={zipcode} placeholder="Your Zip Code *" data-sb-validations="required,zip" onChange={(e) => setZipcode(e.target.value)}/>
                                <div className="invalid-feedback" data-sb-feedback="zip:required">A zip is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="zipcode:zipcode">Zipcode is not valid.</div>
                            </div>

                            <div className="form-group">
                                
                                <input className="form-control" id="personNeedingCare" type={personNeedingCare} placeholder="Your Loved One *" data-sb-validations="required,email" onChange={(e) => setPersonNeedingCare(e.target.value)}/>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>

                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                            
                                <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required" type={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                    </div>
                   
                   
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase " id="submitButton" type="submit">Send Message</button></div>
                </form>
            </div>
        </section>
                   
                        
                    
                </div>
            </div>
        </section>
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
                            <h4>Parveen Anand</h4>
                            <p className="text-muted">Lead Designer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
                            <h4>Diana Petersen</h4>
                            <p className="text-muted">Lead Marketer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                            <h4>Larry Parker</h4>
                            <p className="text-muted">Lead Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>

       
       
    
        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="https://media.istockphoto.com/photos/home-caregiver-helping-a-senior-man-standing-up-at-home-picture-id1313001485?k=20&m=1313001485&s=612x612&w=0&h=wls4VWSBEWmOwwz73x4PGrP2yHUYd9cuVOn5loMAAKQ=" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Explore
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Graphic Design
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Finish
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Identity
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Client:</strong>
                                            Lines
                                        </li>
                                        <li>
                                            <strong>Category:</strong>
                                            Branding
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
       
       
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2022</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
   
    </>
  )
}

export default Nav