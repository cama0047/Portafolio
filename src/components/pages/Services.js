import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import '../../App.css';
import '../../Services.scss';

export default function Services() {
  
  const [click, setClick] = useState(false);
  const [isActive, setActive] = useState(false);
  const [expanded, setExpanded] = useState(true);
  
  const handleClick = (ev) => {
    
      /*------ PRINT -------*/
      //console.log("clicked");
      //console.log(ev.target);
      const divClicked=ev.target;

      setExpanded(true);
      open(divClicked);

  }

  var tile = document.getElementsByClassName('.strips__strip');
  var tileLink = document.getElementsByClassName('.strips__strip > .strip__content');
  var tileText = document.getElementsByClassName('.strip__inner-text');
  var stripClose = document.getElementsByClassName('.strip__close');
  
  var open = function(divClicked) {
      console.log("Entro a Open");
      console.log(expanded);

    // var tile = this.parent();

      if (expanded) {

        divClicked.addClass('strips__strip--expanded');
        // add delay to inner text
        tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
        stripClose.addClass('strip__close--show');
        stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
        // expanded = false;
      } 
    };
  
  var close = function() {
    if (!expanded) {
      tile.removeClassName('strips__strip--expanded');
      // remove delay from inner text
      tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
      stripClose.removeClassName('strip__close--show');
      stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)')
      expanded = false;
    }
  }


  return (

<div>
  <h1>About Me</h1>
  <p>
    Experienced Full Stack Developer with 10 years in the industry and high-level proficiency in multiple technologies, expertise with Front and back-end including DevOps seeks to establish a career as the Full Stack Developer. I am very familiar and experienced with Web Application Architecture. Furthermore, I have led several development teams with successful results.
  </p>

  <div>
    <section className="strips">
  <article className="strips__strip">
    <div className={`strip__content ${isActive ? "strips__strip--expanded":"true"}`} onClick={()=>setActive(!isActive)}>
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
  <article className="strips__strip">
    <div className={`strip__content ${isActive ? "strips__strip--expanded":"true"}`} onClick={()=>setActive(!isActive)}>
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
  <article className="strips__strip">
        <div className={`strip__content ${isActive ? "strips__strip--expanded":"true"}`} onClick={()=>setActive(!isActive)}>
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
  <article className="strips__strip">
        <div className={`strip__content ${isActive ? "strips__strip--expanded":"true"}`} onClick={()=>setActive(!isActive)}>
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
  <article className="strips__strip">
        <div className={`strip__content ${isActive ? "strips__strip--expanded":"true"}`} onClick={()=>setActive(!isActive)}>
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
