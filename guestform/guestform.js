var express = require('express');
var bodyParser = require('body-parser');      // bodyParser라는 모듈을 가져옴.
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}))
// 기본적으로 포스트 방식으로 전달 된 데이터는 정의되어 있지 않다. 그걸 사용 하고 싶다면 bodyParser라는 미들웨어를 써라.
// bodyParser는 포스트 방식으로 전송한 데이터를 우리의 애플리케이션에서 사용할 수 있도록 해주는 일종의 플러그인.
app.get('/', function(req, res){
  var output = `
  <a>
    <h1 align="center">Welcome to Hamin's Home ^_^</h1><br>
    <h2 align="center">Write something interesting!!!</h2><br>
    <h3 align="center"><input type="button" value="get방식 방명록" onClick="self.location='http://localhost:4000/get_form';">
    <input type="button" value="post방식 방명록" onClick="self.location='http://localhost:4000/post_form'"></h3>
  </a>
  `;
  res.send(output);
});
app.get('/get_form', function(req, res){
  res.render('get_form');     //views/get_form
})
app.get('/post_form', function(req, res){
  res.render('post_form');     //views/post_form
})
app.get('/form_receiver', function(req, res){
  // res.send('Hello, GET');
  var guest_name = req.query.guest_name;
  var guest_email = req.query.guest_email;
  var guest_review = req.query.guest_review;
  var output = `
  <input type="button" value="홈으로" onClick="self.location='http://localhost:4000/'">`
  res.send(
    '이름: '+guest_name+'<br>이메일: '+guest_email+'<br>내용: '+guest_review+'<br>'+output
  )
  //get방식으로 전송하는 데이터는 이 function 익명함수가 실행 될 때 첫번째 인자로 전달되는 req에 들어있는 request 객체에 query라고 하는 객체의 guest_name등의 사용자가 요청한 데이터를 받을 수 있다.
  //get방식은 url규격상 전송 데이터 길이 한계가 있습니다.
});
app.post('/form_receiver', function(req, res){
  var guest_name = req.body.guest_name;
  var guest_email = req.body.guest_email;
  var guest_review = req.body.guest_review;
  var output = `
  <input type="button" value="홈으로" onClick="self.location='http://localhost:4000/'">`
  res.send('이름: '+guest_name+'<br>이메일: '+guest_email+'<br>내용: '+guest_review+'<br>'+output)
})
// post방식은 풀필요한 정보가 노출되지 않습니다. 하지만 보안적으로 안전한건 아닙니다.

app.listen(4000, function(){
console.log('connected 4000 port!');
});
