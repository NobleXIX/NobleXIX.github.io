number = 0;
var animations = ['https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3YwNzRwaHh0NmNxanppNzdhZmdneGExeTUydmNoMHEzbXE4bzV1NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BhW85yDQ1TA3u/giphy.gif'
];


 var refreshIntervalId = setInterval(function() {
  image = document.getElementById('hiddenimageid');
  image.src = animations[number];
},1)


function character() {
clearInterval(refreshIntervalId);
  image = document.getElementById('hiddenimageid');
  image.src = animations[number];

  console.log(number);
  number++;


}