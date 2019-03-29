var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.get('/', function(req, res){
  var output = `
  <a>Welcome to Hamin's Home ^_^</a><br>
  <a>Write something interesting!!!</a>
  `;
  res.send(output);
});
app.get('/get_form', function(req, res){
  res.render('get_form');     //views/form
})
app.get('/form_receiver', function(req, res){
  // res.send('Hello, GET');
  var guest_name = req.query.guest_name;
  var guest_email = req.query.guest_email;
  var guest_review = req.query.guest_review;
  res.send('이름: '+guest_name+'<br>이메일: '+guest_email+'<br>내용: '+guest_review);
});
app.post('/form_receiver', function(req, res){
  var title = req.body.title;
  var description = req.body.description;
  res.send(title+','+description);
})
app.get('/topics/:id', function(req, res){
  var topics = [
    'Javascript is ...',
    'Nodejs is...',
    'Express is...'
  ];
  var output = `
    <a href="topic/0">JavaScript</a><br>    <!--누르면 id=0이 되어 JavaScript is ...가 출력된다-->
    <a href="topic/1">Nodejs</a><br>
    <a href="topic/2">Express</a><br><br>
    ${topics[req.params.id]}    <!-- 패스 방식, 시멘틱 url 사용, 여기의 id는 10줄 위의 id와 매칭됨.-->
    <!--${topics[req.query.id]}     //id값이 변함에 따라 topic에 저장되어 있는 값이 이 곳에 위치 / request의 query객체의 id프로퍼로 전달 받음. -->
  `;
  res.send(output);
})
app.get('/topic/:id/:mode', function(req, res){
  res.send(req.params.id+','+req.params.mode);
})

app.listen(4000, function(){
console.log('connected 4000 port!');
});
