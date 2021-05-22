import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Services.scss';
import CardGrid from '../CardGrid';

export default function Services() {
  
  // const [click, setClick] = useState(false);
  // const [isActive, setActive] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleClick = (ev) => {

    
    console.log(ev);
    console.log(ev.target.id);

    const divClicked = ev.target.id; //identificando que elemento fue clickeado
    expandir(divClicked); //se llama a la funcion expanir y por parametro el objeto clickeado
    
  }

  const expandir = (divClicked) =>{

  /*------ PRINT -------*/
  console.log(expanded); //Estado de expanded
  console.log("DivClicked: ",divClicked); //imprimir que fue clickeado 

    if (!expanded) {
      try {
        document.getElementById(`${divClicked}`).classList.add("strips__strip--expanded");
      setExpanded(true); //Cambio la propiedad para poder cerrarlo 
      } catch (error) {
        /*------ PRINT -------*/
        console.log("error ");
        console.log(error);
      }
     
    }

    if (expanded) {
      try {
        document.getElementById(`${divClicked}`).classList.remove("strips__strip--expanded");
        setExpanded(false);//Cambio la propiedad para poder abrirlo 
        
      } catch (error) {
         /*------ PRINT -------*/
        console.log("error ");
        console.log(error);
      }
    }
  }

  
  return (

<div>
  <h1>About Me</h1>
  <div className="me">
    Experienced Full Stack Developer with 10 years in the industry and high-level proficiency in multiple technologies, expertise with Front and back-end including DevOps seeks to establish a career as the Full Stack Developer. I am very familiar and experienced with Web Application Architecture. Furthermore, I have led several development teams with successful results.
    
      <p><b>Please Click the boxes to have more details.</b></p>
  </div>

  <div>
    <section className="strips">

  <article id="back" name="back" className="strips__strip" onClick={handleClick}>
    <div  id="back" className="strip__content" onClick={handleClick}>
      <h1 id="back" className="strip__title" data-name="Back" >Back-End</h1>
      <div id="back" className="strip__inner-text" onClick={handleClick}>
        <h2>Back-End</h2>
        <p>I have had the opportunity to be certified as an oracle database administrator, however my passion to go further has led me to know relational and non-relational databases.</p><br></br>
          <p>Here are some of them: </p>
          <CardGrid></CardGrid>
          
          <div>
      <p> Python</p>
      <p> Node.js</p>
      <p> Webservers</p>
      <p> RESTful APIs</p>
      <p> Docker</p>
    
    </div>

        <p>
          <Link href="https://twitter.com/khmmo" target="_blank"><i className="fa fa-twitter"></i></Link>
        </p>
    
      </div>
      
    </div>
  </article>

  <article id="front" className="strips__strip" onClick={handleClick}>
    <div id="front" className="strip__content">
      <h1 className="strip__title" data-name="Front">Front-End</h1>
      <div className="strip__inner-text">
        <h2>Front-End</h2>
        <p>Front-end is a fundamental part of my life, it has allowed me to explore my creativity and surprise my friends and co-workers. These are some of the languages and technologies I have used:</p>
        <div>
      <p> Core - HTML5-CSS3-JavaScript- webcomponents</p>
      <p> Frameworks - React</p>
      <p> UX/UI</p>
      <p> Adobe Suite - XD, Photoshop, Illustrator, Premier Pro</p>
      <p> UI Frameworks -> Bootstrap</p>
      <p> Version Control -> Git</p>

    </div>
        <p>
          <Link href="https://twitter.com/khmmo" target="_blank"><i className="fa fa-twitter"></i></Link>
        </p>
      </div>
    </div>
  </article>
  <article id="database" className="strips__strip" onClick={handleClick}>
        <div id="database" className="strip__content">
      <h1 className="strip__title" data-name="Data">Databases</h1>
      <div className="strip__inner-text">
        <h2>Databases</h2>
        <p>I have had the opportunity to be certified as an oracle database administrator, however my passion to go further has led me to know relational and non-relational databases.</p><br></br>
          <p>Here are some of them: </p>

          <div>
      <p> RDBMS - oracle</p>
      <p> NoSQL - Mongo</p>
      
    </div>

        <p>
          <Link href="https://twitter.com/khmmo" target="_blank"><i className="fa fa-twitter"></i></Link>
        </p>
      </div>
    </div>
  </article>
  <article id="devops" className="strips__strip" onClick={handleClick}>
        <div id="devops" className="strip__content">
      <h1 className="strip__title" data-name="Dev">DevOps</h1>
      <div className="strip__inner-text">
        <h2>DevOps</h2>
        <p>DevOps has allowed me to achieve customer satisfaction and deliver services in less time. Also to drive business innovation and to be the engine of continuous process improvements during the phases of Planning, Coding, Compiling, Testing, Deployment, Operation, Monitoring, and Oversight. </p>
<div>
      <p> Operation System -> Linux, unix</p>
      <p> Cloud - Azure & AWS Google Cloud</p>
      <p> Virtualization - Docker-Kubernetes - VMWARE</p>
    </div>

        <p>
          <Link href="https://twitter.com/khmmo" target="_blank"><i className="fa fa-twitter"></i></Link>
        </p>
      </div>
    </div>
  </article>
  <article id="mobile" className="strips__strip" onClick={handleClick}>
        <div id="mobile" className="strip__content">
      <h1 className="strip__title" data-name="Movile">MobileApps</h1>
      <div className="strip__inner-text">
        <h2>MobileApps</h2>
        <p>It is impossible to live in this century and not think about apps, they make our life so much easier, and now how not to think about apps on mobile devices that we use all the time.</p>
        
    <div>
      <li> Android</li>
      <li> IOS</li>
      <li> Cross Platform</li>
    </div>
  
        <p>
          <Link href="https://twitter.com/khmmo" target="_blank"><i className="fa fa-twitter"></i></Link>
        </p>
      </div>
    </div>
  </article>
  <i className="fa fa-close strip__close"></i>
</section>
  </div>

</div>

  );
}
