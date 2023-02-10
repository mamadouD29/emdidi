
:root {
  --header-bg: rgb(235, 225, 225);
  --brd1: 2px solid black;
  --nav-alink-co: rgb(243, 235, 235);
  --home-co: rgb(241, 241, 241);
}

* {
  margin: 0;
  box-sizing: border-box;
}

.container-fluid {
  margin: 0;
  padding: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: stretch;
  background: rgb(148, 147, 147);
  gap: 2em;
  padding: 0 1em;

}

.site-title {
  font-size: 2em;
}

nav ul {
  display: flex;
  gap: 1em;
  padding: 0;
  margin: 0;
  list-style: none;


}


nav a {
  color: var(--nav-alink-co);
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 .5em;
}

nav li.active {
  background: rgb(196, 190, 190);
}

nav a:hover {
  color: var(--nav-alink-co);
  background: rgb(96, 95, 95);
}

nav .nav-link {
  display: none;
}

nav .dropdown {
  height: 100%;
  display: flex;
  align-items: center;
}

.dropdown button:hover {
  color: var(--nav-alink-co);
  background: rgb(96, 95, 95);
}

/* not found section */
.not-found {
  text-align: center;
}


.not-found hgroup h2 {
  font-size: 3em;
}
/* home Component */

.home {
  background: url(../public/img/hero-bg.jpg) top/cover;
  min-height: calc(100vh - 3em);
  padding-top: 3em;
  width: 100%;
  text-align: center;
  overflow-x: hidden;
}

.my-name p {
  font-size: 1.5em;
}

.my-name hgroup {
  position: relative;
}
.my-name hgroup h2 {
  font-size: 3em;
  animation: 3s linear 1s infinite alternate slidein;
  position: relative; 
  color: ;
  
} 

@media (min-width: 800px) {
  nav .nav-link {
    display: block;
  }

  nav .dropdown {
    display: none;
  }

  .home {
    background-position: center;

  }
  
.my-name hgroup h2,
.not-found hgroup h2 {
  font-size: 4em;
  
}

.my-name p {
  font-size: 2em;
}

}


/* @keyframes slidein {
  0% {left: -25%;}
  25% {bottom: 50%;}
  50% {left: 0%;}
  75% {top: 50%;}
  100% {left: 25%;}

} */