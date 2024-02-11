function renderHeader() {
    document.getElementById('header').innerHTML = `
    <h1>Chris Wilson &#10022; Charismatic Wendigo &#10022; WEB215</h1>
    <nav>
    <a href="https://carpeomnia777.github.io/web215/">Home</a> |
    <a href="projects/intro.html">Intro</a> |
    <a href="projects/contract.html">Contract</a> |
    <a href="projects/brand.html">Brand</a> |
    <a href="projects/introForm.html">Intro Form</a>
   </nav> 
   <hr>`;
}

function renderFooter() {
    document.getElementById('footer').innerHTML = 
    `<hr>
    <nav>
      <a href="https://github.com/carpeomnia777">GitHub</a> |
      <a href="http://carpeomnia777.github.io">GitHub.io</a> |
      <a href="https://carpeomnia777.github.io/web215/">WEB215.io</a> |
      <a href="https://www.freecodecamp.org/fccb5bf1aed-e1a7-4698-98e4-c75adb890990">freeCodeCamp</a> |
      <a href="https://www.codecademy.com/profiles/CarpeOmnia777">Codecademy</a> |
      <a href="https://jsfiddle.net/user/carpeomnia777/fiddles/">JSFiddle</a> |
      <a href="https://www.linkedin.com/learning/?u=76141674/">LinkedIn Learning</a> |
     </nav> 
    <a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fcarpeomnia777.github.io%2Fweb215%2Fprojects%2Fbrand" style="text-decoration:none;"><img src="../images/valid-html-blue.png"></a>
    <a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcarpeomnia777.github.io%2Fweb215%2Fprojects%2Fbrand&amp;profile=css3svg&amp;usermedium=all&amp;warning=1&amp;vextwarning=&amp;lang=en" style="text-decoration:none;"><img src="../images/valid-css-blue.png"></a>`;
}


window.onload = function () {
    renderHeader();
    renderFooter();
};