import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Toast from './components/Toast';

function App() {


  const [list, setList] = useState([]);
  let toastProperties = null;

  const showToast = (type, message) => {

    var color;
    switch (type) {

      case "Succès":
        color = '#270';
        break;
      case "Failure":
        color = "red";
        break;
      case "Information":
        color = '#7686EE'
        break;
    }

    toastProperties = {
      id: list.length + 1,
      title: type,
      description: message,
      backgroundColor: 'white',
      textColor: color
    }
    setList([...list, toastProperties]);




  };

  const display_menu = () => {
    const menu = document.getElementById('menu_color_bar')
    if (menu.style.display == "none") {
      menu.style.display = "flex"

    } else {
      menu.style.display = "none"
    }
  }

  const scroll_down = () => {

    var windowHeight = window.innerHeight;
    var percentage = window.innerHeight * (5 / 100)

    window.scrollTo({
      top: windowHeight + percentage,
      left: 0,
      behavior: 'smooth',
    });
  }


  const change_color_theme = (event) => {

    const color = event.target.id
    const insta = document.getElementById('insta');
    const twitter = document.getElementById('twitter');
    const git = document.getElementById('git');
    const mail = document.getElementById('mail');
    const arrow = document.getElementById('arrow_down');
    const dev = document.getElementById('dev');
    const media = document.getElementById('media');
    const design = document.getElementById('desi');

    const animation = document.getElementById('transition_circle');

    if (color.indexOf('blue') > -1) {
      animation.style.backgroundColor = '#0003C7'
    } else if (color.indexOf('red') > -1) {
      animation.style.backgroundColor = '#C70000'
    } else {
      animation.style.backgroundColor = '#147144'
    }

    animation.classList.add('transition')
    setTimeout(() => {
      
      animation.classList.remove('transition')
      console.log(design.complete)
    }, 1000)

    setTimeout(() => {

      if (color.indexOf('blue') > -1) {

        document.body.className = ''
        insta.src = "instagram.png"
        twitter.src = "twitter-sign.png"
        git.src = "github-sign.png"
        mail.src = "mail.png"
        arrow.src = "arrow.png"
        dev.src = "dev.png"
        media.src = "social.png"
        design.src = "designer.png"


      } else if (color.indexOf('red') > -1) {

        document.body.className = 'red_mode'
        insta.src = "instagram_red.png"
        twitter.src = "twitter-sign_red.png"
        git.src = "github-sign_red.png"
        mail.src = "mail_red.png"
        arrow.src = "arrow_red.png"
        dev.src = "dev_red.png"
        media.src = "media_red.png"
        design.src = "designer_red.png"


      } else {

        document.body.className = 'green_mode'
        insta.src = "instagram_green.png"
        twitter.src = "twitter-sign_green.png"
        git.src = "github-sign_green.png"
        mail.src = "mail_green.png"
        arrow.src = "arrow_green.png"
        dev.src = "dev_green.png"
        media.src = "media_green.png"
        design.src = "designer_green.png"




      }

    }, 200)



    console.log(animation.classList)
  }

  const hidde_form = () => {
    const animation = document.getElementById('transition_circle2');
    const form = document.getElementById('form');
    const arr = document.getElementsByClassName('arrow')[0];


    form.style.visibility = 'hidden'


    animation.classList.remove('form_transition')

    animation.classList.add('form_transition_out')
    arr.style.visibility = 'hidden'

    setTimeout(() => {
      animation.classList.remove('form_transition_out')

    }, 200)



  }

  const show_form = () => {

    const animation = document.getElementById('transition_circle2');
    const form = document.getElementById('form');
    const arr = document.getElementsByClassName('arrow')[0];

    animation.classList.add('form_transition')
    form.style.visibility = 'visible'
    arr.style.visibility = 'visible'
  }

  const send_mail = (event) => {
    event.preventDefault();

    var email = document.getElementById('email').innerHTML
    var intro = document.getElementById('intro').innerHTML
    var project = document.getElementById('project').innerHTML

    if (email.length > 5 && intro.length > 2 && project.length > 2) {
      var body = "User mail : " + email;
      body += " Intro : " + intro;
      body += " Project : " + project;

      window.open('mailto:valentin.merault@gmail.com?subject=Contact Form Valentin&body=' + body);
    } else {
      showToast('Failure', "The fields are too short or empty...")
    }



  }

  return (


    <div className="App">

      <Toast toastlist={list} position="buttom-right" setList={setList} />


      <div id="transition_circle"></div>
      <div id="transition_circle2">

        <form id="form" enctype="text/plain" >

          <h2>Contact form</h2>

          <div>
            <h4>Your email address :</h4>
            <input type="mail" name="email" id="email" ></input>
          </div>

          <div>
            <h4>Introduce yourself in a few words :</h4>
            <input type="text" name="intro" id="intro"></input>
          </div>

          <div>
            <h4>Explain your project :</h4>
            <textarea type="text" name="project" id="project"></textarea>
          </div>

          <div id="send">
            <button onClick={send_mail}>Send</button>
          </div>

        </form>

        <div onClick={hidde_form} className="arrow">
          <span></span>
          <span></span>
          <span></span>

        </div>

      </div>

      <div className='first_part'>

        <div id="left_part">

          <div id="menu" >
            <div id="menu_color" onClick={display_menu}>

              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>

            </div>

            <div id='menu_color_bar'>

              <div id="blue_theme" className='cercle_color' onClick={change_color_theme}></div>
              <div id="red_theme" className='cercle_color' onClick={change_color_theme}></div>
              <div id="green_theme" className='cercle_color' onClick={change_color_theme}></div>

            </div>

          </div>



          <h1 id="hey">Hey, I'm Valentin !</h1>
          <h1 id="welc">Welcome to my portfolio. Scroll down to learn more about me !</h1>

          <img onClick={scroll_down} className="arrow_down" id="arrow_down" src="arrow.png">

          </img>
        </div>


        <div className="right_part">

          <div id="outer-circle" className='circle'>

            <div className="inner-circle circle">

            </div>

            <div className="inner-circle1 circle">

            </div>

            <div className="inner-circle2 circle">

            </div>



            <img className="inner-circle3 circle" src="avatar.png">

            </img>

          </div>


          <div className="icon_media">
            <div className="border"></div>

            <a className="media_icon" href='https://www.instagram.com/vlt_dev/' target='_blank'>
              <img id="insta" src="instagram.png"></img>
            </a>

            <a className="media_icon" href='https://twitter.com/Mrltvalentin' target='_blank'>
              <img id="twitter" src="twitter-sign.png"></img>
            </a>
            <a className="media_icon" href='https://github.com/Valwars' target='_blank'>
              <img id="git" src="github-sign.png"></img>
            </a>

            <a className="media_icon" onClick={() => window.open('mailto:valentin.merault@gmail.com?subject=Contact Form Valentin&body=')
            } target='_blank'>
              <img id="mail" src="mail.png"></img>
            </a>

            <div className="border"></div>
          </div>

        </div>

      </div>

      <div className='second_part'>

        <div id="background_tab">

          <div id="skills_table">

            <div className="column" id="designer">
              <img src="designer.png" id="desi">
              </img>
              <h1>Designer</h1>
              <h3>I create simple and intuitive interfaces for my projects.</h3>

              <h2>I enjoy:</h2>
              <h3>UX, UI, Web, Mobile, Apps.</h3>

            </div>

            <div className="column" id="developer">
              <img src="dev.png" id="dev">
              </img>
              <h1>Developer</h1>
              <h3>I love creating projects from scratch and constantly challenging myself.</h3>

              <h2>Languages I speak:</h2>
              <h3>Java, Python, Javascript, HTML, CSS, React, NodeJS, Bash.</h3>
            </div>

            <div className="column" id="creator">
              <img src="social.png" id="media">
              </img>
              <h1>Content creator</h1>
              <h3>I create content related to development, programming on Instagram.</h3>

              <h2>Including:</h2>
              <h3>Web, java, algorithms tutorials.</h3>
            </div>

          </div>

        </div>
      </div>


      <div className='third_part'>
        <h1>Some of my projects</h1>
        <h2>If you want to know more about my projects, <br></br><span>email me .</span></h2>

        <div className='grid_projects'>

          <div className='projet'>

            <video className="vid" autoplay="autoplay" loop muted  playsinline>
              <source src="projets/TopCoin.mp4" type="video/mp4">
              </source>
            </video>
            <h3 className='description'>TopCoin is a website dedicated to the world of cryptocurrencies. It contains educational articles, games, tools and crypto wallet tracker. <br></br>(NodeJS, ReactJS, MongoDB)</h3>

          </div>

          <div className='projet'>
            <video className="vid" autoplay="autoplay" loop muted  playsinline>
              <source src="projets/dc.mp4" type="video/mp4">
              </source>
            </video>

            <h3 className='description'>Website made for a french physics researcher. It lists all his different activities, projects, prose, cv...  <br></br>(HTML, CSS, PHP, MySQL)</h3>


          </div>
          <div className='projet'>
            <video className="vid" autoplay="autoplay" loop muted  playsinline>
              <source src="projets/lego.mp4" type="video/mp4">
              </source>
            </video>

            <h3 className='description'>Software for creating 3D lego structures.
              Made for an end of year project.<br></br>
              (Java, JavaFX, CSS, XML)
            </h3>

          </div>

          <div className='projet'>
            <video className="vid" autoplay="autoplay" loop muted  playsinline>
              <source src="projets/android_app.mp4" type="video/mp4">
              </source>
            </video>
            <h3 className='description'>An application prototype of what could be the native application version of the TopCoin website. <br></br>(Java, Android Studio, XML)</h3>
          </div>

          <div className='projet'>
            <video className="vid" autoplay="autoplay" loop muted  playsinline>
              <source src="projets/ios_app.mp4" type="video/mp4">
              </source>
            </video>
            <h3 className='description'>An introductory application for iOS application development. Allows the user to store locations with a rank, notes and view them on the map.<br></br>(Swift, Xcode)</h3>
          </div>

          <div className='projet'>
            <video className="vid" autoplay="autoplay" loop muted  playsinline >
              <source src="projets/insta.mp4" type="video/mp4">
              </source>
            </video>
            <h3 className='description'>Design work of posts on social networks.<br></br> (@vlt_dev)</h3>
          </div>



        </div>

      </div>

      <div className='last_part'>



        <div className='container_last' >
          <h1>Want to work with me ?</h1>


          <div id="formulaire_show" className='button' onClick={show_form}>
            <h3>Click here</h3>

          </div>

        </div>

      </div>



    </div >
  );
}

export default App;
