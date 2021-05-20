import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import '../../App.css';
import '../../Services.scss';

export default function Services() {
  
  const [click, setClick] = useState(false);
  const [isActive, setActive] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const id ="a";



  const handleClick = (ev) => {
   
    console.log(ev.target.id);

    const divClicked = ev.target.id; //identificando que elemento fue clickeado
    expandir(divClicked); //se llama a la funcion expanir y por parametro el objeto clickeado
    

  }

  const expandir = (divClicked) =>{

  var tile = document.getElementsByClassName('.strips__strip');
  var tileLink = document.getElementsByClassName('.strips__strip > .strip__content');
  //var tileText = tileLink.document.getElementsByClassName('.strip__inner-text');
  var stripClose = document.getElementsByClassName('.strip__close');

  /*------ PRINT -------*/
  console.log(expanded);
  console.log("DivClicked: ",divClicked); //imprimir que fue clickeado 

    if (!expanded) {
      document.getElementById(`${divClicked}`).classList.add("strips__strip--expanded");
      
      setExpanded(true);
    }

    if (expanded) {
      document.getElementById(`${divClicked}`).classList.remove("strips__strip--expanded");
      setExpanded(false);
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

  <article id="back" className="strips__strip" onClick={handleClick}>
    <div  id="back" className="strip__content">
      <h1 className="strip__title" data-name="Back">Back-End</h1>
      <div className="strip__inner-text">
        <h2>Back-End</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
        <p>
          <Link href="https://twitter.com/ettrics" target="_blank"><i className="fa fa-twitter"></i></Link>
        </p>
    
      </div>
      
    </div>
  </article>

  <article id="front" className="strips__strip" onClick={handleClick}>
    <div id="front" className="strip__content">
      <h1 className="strip__title" data-name="Front">Front-End</h1>
      <div className="strip__inner-text">
        <h2>Front-End</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
        <p>
          <Link href="https://twitter.com/ettrics" target="_blank"><i className="fa fa-twitter"></i></Link>
        </p>
      </div>
    </div>
  </article>
  <article id="database" className="strips__strip" onClick={handleClick}>
        <div id="database" className="strip__content">
      <h1 className="strip__title" data-name="Data">Databases</h1>
      <div className="strip__inner-text">
        <h2>Databases</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
        <p>
          <Link href="https://twitter.com/ettrics" target="_blank"><i className="fa fa-twitter"></i></Link>
        </p>
      </div>
    </div>
  </article>
  <article id="devops" className="strips__strip" onClick={handleClick}>
        <div id="devops" className="strip__content">
      <h1 className="strip__title" data-name="Dev">DevOps</h1>
      <div className="strip__inner-text">
        <h2>DevOps</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
        <p>
          <Link href="https://twitter.com/ettrics" target="_blank"><i className="fa fa-twitter"></i></Link>
        </p>
      </div>
    </div>
  </article>
  <article id="mobile" className="strips__strip" onClick={handleClick}>
        <div id="mobile" className="strip__content">
      <h1 className="strip__title" data-name="Movile">MobileApps</h1>
      <div className="strip__inner-text">
        <h2>MobileApps</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
        <p>
        
          <Link href="https://twitter.com/ettrics" target="_blank"><i className="fa fa-twitter"></i></Link>
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
