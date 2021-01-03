
var skills = ["HTML", "CSS", "Flexbox", "JavaScript", "React", "Redux", "Sass", "MondoDB", "Mongoose", "RegEx", "Git", "Linux", "Bootstrap", "REST API", "D3", "Figma", "jQuery", "node.js", "Express"].sort();

// var btn = document.createElement("button");
// document.getElementById('skills-card').appendChild(btn).innerHTML = "HI";

skills.forEach((i) => {
  var btn = document.createElement("button");

  document.getElementById('card-skills').appendChild(btn).innerHTML = i;
  btn.setAttribute('id', 'button');
});
// document.getElementsByClassName('')
