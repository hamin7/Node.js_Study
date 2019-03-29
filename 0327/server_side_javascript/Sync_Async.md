Last login: Wed Mar  6 19:00:22 on ttys000
hamins-MacBook-Pro:~ hamin$ node
> console.log(1+1)
2
undefined
> a = [3,1,2]; console.log(a);
[ 3, 1, 2 ]
undefined
> a = [3,1,2]; a.sort(); console.log(a);
[ 1, 2, 3 ]
undefined
> a = [3,1,2]; function b(v1, v2){return v2-v1};  a.sort(b); console.log(a);
[ 3, 2, 1 ]
undefined
> a = [3,1,2]; function b(v1, v2){return v1-v2};  a.sort(b); console.log(a);
[ 1, 2, 3 ]
undefined
> a = [3,1,2]; function b(v1, v2){return 0};  a.sort(b); console.log(a);
[ 3, 1, 2 ]
undefined
> a = [3,1,2]; function b(v1, v2){console.log('c', v1, v2); return 0};  a.sort(b); console.log(a);
c 3 1
c 1 2
[ 3, 1, 2 ]
undefined
> a = [3,1,2]; a.sort(function(v1, v2){return v2-v1;}); console.log(a);
[ 3, 2, 1 ]
undefined
> function sort(callback){callback();};
undefined
> sort();
TypeError: callback is not a function
    at sort (repl:1:25)
> sort(function(){console.log('Hello Callback')});
Hello Callback
undefined
> Always awake
Always awake
       ^^^^^

SyntaxError: Unexpected identifier

> quit
ReferenceError: quit is not defined
> exit
ReferenceError: exit is not defined
> c
>
(To exit, press ^C again or type .exit)
>
hamins-MacBook-Pro:~ hamin$
hamins-MacBook-Pro:~ hamin$ ls
2018_4_16.circ					Music
ALU_Control.circ				MyProject
Adlm						Parallels
AndroidStudioProjects				Pictures
Applications					Public
Applications (Parallels)			PycharmProjects
Boat						Samsung
BoatTest					Zombie
CarTest						becker.robots.ini
Cat						c:\project\result.txt
Computer Architecture 1 Final Exam_2016.circ	dev
Control.circ					eclipse
Desktop						eclipse-workspace
Documents					half_adder.circ
Downloads					netstat
Election					pymel.log
Library						xgen
Lion						시각사각
Mac						시각사각 (2)
MacKeeper Backups				시각사각 (3)
Movies
hamins-MacBook-Pro:~ hamin$ cd desktop
hamins-MacBook-Pro:desktop hamin$ ls
$RECYCLE.BIN
18_12_04_Backup
1월 근무시간.docx
2학년 2학기
3학년 1학기
BackGround
ConeLab
EyeNeuroProject
Forif
JSP 입문 부록 CD(4th Edition)
Java Resource
Logisim.app
Maya
Mint 18
Processing.app
Season4
Season5
Shopping_Mall
Sublime
Terminal
Thumbs.db
Unity Asset
Windows 10
desktop.ini
naver
~$udon_mis12_tif_09.doc
겨울 계절학기
리눅스
수혀니🐿
프린트 할 것
조직론
한이음
쇼핑몰 프로젝트
데스크탑 - hamin’s MacBook Pro
스크린샷 2019-01-29 20.46.47.png
스크린샷 2019-02-26 15.57.01.png
스크린샷 2019-03-03 20.31.28.png
스크린샷 2019-03-03 20.35.13.png
스크린샷 2019-03-03 20.50.17.png
스크린샷 2019-03-07 17.19.16.png
스크린샷 2019-03-07 17.27.26.png
스크린샷 2019-03-07 17.28.27.png
스크린샷 2019-03-08 16.37.15.png
스크린샷 2019-03-08 16.53.33.png
스크린샷 2019-03-09 20.42.19.png
대만여행.docx
백암재단 주거지원
hamins-MacBook-Pro:desktop hamin$ ls
$RECYCLE.BIN
18_12_04_Backup
1월 근무시간.docx
2학년 2학기
3학년 1학기
BackGround
ConeLab
EyeNeuroProject
Forif
JSP 입문 부록 CD(4th Edition)
Java Resource
Logisim.app
Maya
Mint 18
Processing.app
Season4
Season5
Shopping_Mall
Sublime
Terminal
Thumbs.db
Unity Asset
Windows 10
desktop.ini
naver
~$udon_mis12_tif_09.doc
겨울 계절학기
리눅스
수혀니🐿
프린트 할 것
조직론
한이음
쇼핑몰 프로젝트
데스크탑 - hamin’s MacBook Pro
스크린샷 2019-01-29 20.46.47.png
스크린샷 2019-02-26 15.57.01.png
스크린샷 2019-03-03 20.31.28.png
스크린샷 2019-03-03 20.35.13.png
스크린샷 2019-03-03 20.50.17.png
스크린샷 2019-03-07 17.19.16.png
스크린샷 2019-03-07 17.27.26.png
스크린샷 2019-03-07 17.28.27.png
스크린샷 2019-03-08 16.37.15.png
스크린샷 2019-03-08 16.53.33.png
스크린샷 2019-03-09 20.42.19.png
대만여행.docx
백암재단 주거지원
hamins-MacBook-Pro:desktop hamin$ cat 수혀니
cat: 수혀니: No such file or directory
hamins-MacBook-Pro:desktop hamin$ cd .
hamins-MacBook-Pro:desktop hamin$ cd ..
hamins-MacBook-Pro:~ hamin$ ls
2018_4_16.circ					Music
ALU_Control.circ				MyProject
Adlm						Parallels
AndroidStudioProjects				Pictures
Applications					Public
Applications (Parallels)			PycharmProjects
Boat						Samsung
BoatTest					Zombie
CarTest						becker.robots.ini
Cat						c:\project\result.txt
Computer Architecture 1 Final Exam_2016.circ	dev
Control.circ					eclipse
Desktop						eclipse-workspace
Documents					half_adder.circ
Downloads					netstat
Election					pymel.log
Library						xgen
Lion						시각사각
Mac						시각사각 (2)
MacKeeper Backups				시각사각 (3)
Movies
hamins-MacBook-Pro:~ hamin$ cd dev
hamins-MacBook-Pro:dev hamin$ ls
js
hamins-MacBook-Pro:dev hamin$ cd js
hamins-MacBook-Pro:js hamin$ ls
server_side_javascript
hamins-MacBook-Pro:js hamin$ cd server_side_javascript/
hamins-MacBook-Pro:server_side_javascript hamin$ ls
Callback.md		npm.js			pretty.js
data.txt		package-lock.json	sync_async.js
node_modules		package.json		underscore.js
hamins-MacBook-Pro:server_side_javascript hamin$ node sync_async.js
/Users/hamin/dev/js/server_side_javascript/sync_async.js:2
var data fs.readFileSync('data.txt', {encoding:'utf8'});
         ^^

SyntaxError: Unexpected identifier
    at new Script (vm.js:79:7)
    at createScript (vm.js:251:10)
    at Object.runInThisContext (vm.js:303:10)
    at Module._compile (internal/modules/cjs/loader.js:657:28)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
    at startup (internal/bootstrap/node.js:283:19)
hamins-MacBook-Pro:server_side_javascript hamin$ node sync_async.js
/Users/hamin/dev/js/server_side_javascript/sync_async.js:5
var data fs.readFileSync('data.txt', {encoding:'utf8'});
         ^^

SyntaxError: Unexpected identifier
    at new Script (vm.js:79:7)
    at createScript (vm.js:251:10)
    at Object.runInThisContext (vm.js:303:10)
    at Module._compile (internal/modules/cjs/loader.js:657:28)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
    at startup (internal/bootstrap/node.js:283:19)
hamins-MacBook-Pro:server_side_javascript hamin$ node sync_async.js
/Users/hamin/dev/js/server_side_javascript/sync_async.js:5
var data fs.readFileSync('data.txt', {encoding:'utf8'});
         ^^

SyntaxError: Unexpected identifier
    at new Script (vm.js:79:7)
    at createScript (vm.js:251:10)
    at Object.runInThisContext (vm.js:303:10)
    at Module._compile (internal/modules/cjs/loader.js:657:28)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
    at startup (internal/bootstrap/node.js:283:19)
hamins-MacBook-Pro:server_side_javascript hamin$ node sync_async.js
/Users/hamin/dev/js/server_side_javascript/sync_async.js:5
var data fs.readFileSync('data.txt', {encoding:'utf8'});
         ^^

SyntaxError: Unexpected identifier
    at new Script (vm.js:79:7)
    at createScript (vm.js:251:10)
    at Object.runInThisContext (vm.js:303:10)
    at Module._compile (internal/modules/cjs/loader.js:657:28)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
    at startup (internal/bootstrap/node.js:283:19)
hamins-MacBook-Pro:server_side_javascript hamin$ node sync_async.js
1
hello Sync and Async

2
4
3
hello Sync and Async

hamins-MacBook-Pro:server_side_javascript hamin$ node sync_async.js
1
hello Sync and Async

2
4
3
hello Sync and Async

hamins-MacBook-Pro:server_side_javascript hamin$ node sync_async.js
1
hello Sync and Async

2
4
3
hello Sync and Async

hamins-MacBook-Pro:server_side_javascript hamin$ node webserver2.js
/Users/hamin/dev/js/server_side_javascript/webserver2.js:6
var server = http.createServer(function(req, res){
             ^

ReferenceError: http is not defined
    at Object.<anonymous> (/Users/hamin/dev/js/server_side_javascript/webserver2.js:6:14)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:743:3)
hamins-MacBook-Pro:server_side_javascript hamin$ node webserver2.js
Server running at http://127.0.0.1:1337/
^C
hamins-MacBook-Pro:server_side_javascript hamin$ cd ..
hamins-MacBook-Pro:js hamin$ mkdir temp
hamins-MacBook-Pro:js hamin$ cd temp
hamins-MacBook-Pro:temp hamin$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (temp)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/hamin/dev/js/temp/package.json:

{
  "name": "temp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes
hamins-MacBook-Pro:temp hamin$ ls -al
total 8
drwxr-xr-x  3 hamin  staff   96  3 13 20:13 .
drwxr-xr-x  5 hamin  staff  160  3 13 20:13 ..
-rw-r--r--  1 hamin  staff  200  3 13 20:13 package.json
hamins-MacBook-Pro:temp hamin$ --save express
-bash: --save: command not found
hamins-MacBook-Pro:temp hamin$ npm install --save express
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN temp@1.0.0 No description
npm WARN temp@1.0.0 No repository field.

+ express@4.16.4
added 48 packages from 36 contributors and audited 121 packages in 2.749s
found 0 vulnerabilities



   ╭───────────────────────────────────────────────────────────────╮
   │                                                               │
   │       New minor version of npm available! 6.4.1 → 6.9.0       │
   │   Changelog: https://github.com/npm/cli/releases/tag/v6.9.0   │
   │               Run npm install -g npm to update!               │
   │                                                               │
   ╰───────────────────────────────────────────────────────────────╯

hamins-MacBook-Pro:temp hamin$ cd temp
-bash: cd: temp: No such file or directory
hamins-MacBook-Pro:temp hamin$ ls -al
total 40
drwxr-xr-x   5 hamin  staff    160  3 13 20:14 .
drwxr-xr-x   5 hamin  staff    160  3 13 20:13 ..
drwxr-xr-x  51 hamin  staff   1632  3 13 20:14 node_modules
-rw-r--r--   1 hamin  staff  13092  3 13 20:14 package-lock.json
-rw-r--r--   1 hamin  staff    250  3 13 20:14 package.json
hamins-MacBook-Pro:temp hamin$ vi package.json
hamins-MacBook-Pro:temp hamin$ cd ..
hamins-MacBook-Pro:js hamin$ cd dev
-bash: cd: dev: No such file or directory
hamins-MacBook-Pro:js hamin$ ls
server_side_javascript	temp
hamins-MacBook-Pro:js hamin$ cd ..
hamins-MacBook-Pro:dev hamin$ ls
js
hamins-MacBook-Pro:dev hamin$ cd ..
hamins-MacBook-Pro:~ hamin$ ls
2018_4_16.circ					Music
ALU_Control.circ				MyProject
Adlm						Parallels
AndroidStudioProjects				Pictures
Applications					Public
Applications (Parallels)			PycharmProjects
Boat						Samsung
BoatTest					Zombie
CarTest						becker.robots.ini
Cat						c:\project\result.txt
Computer Architecture 1 Final Exam_2016.circ	dev
Control.circ					eclipse
Desktop						eclipse-workspace
Documents					half_adder.circ
Downloads					netstat
Election					pymel.log
Library						xgen
Lion						시각사각
Mac						시각사각 (2)
MacKeeper Backups				시각사각 (3)
Movies
hamins-MacBook-Pro:~ hamin$ cd dev
hamins-MacBook-Pro:dev hamin$ ls
js
hamins-MacBook-Pro:dev hamin$ cd js
hamins-MacBook-Pro:js hamin$ ls
server_side_javascript	temp
hamins-MacBook-Pro:js hamin$ cd server_side_javascript/
hamins-MacBook-Pro:server_side_javascript hamin$ ls -al
total 72
drwxr-xr-x  12 hamin  staff  384  3 13 19:55 .
drwxr-xr-x   5 hamin  staff  160  3 13 20:13 ..
-rw-r--r--@  1 hamin  staff  943  3 13 19:20 Callback.md
-rw-r--r--@  1 hamin  staff   21  3 13 19:31 data.txt
drwxr-xr-x   3 hamin  staff   96  3  6 19:23 node_modules
-rw-r--r--@  1 hamin  staff    2  3  6 19:03 npm.js
-rw-r--r--   1 hamin  staff  381  3  6 19:22 package-lock.json
-rw-r--r--   1 hamin  staff  300  3  6 19:22 package.json
-rw-r--r--   1 hamin  staff   71  3  6 19:31 pretty.js
-rw-r--r--@  1 hamin  staff  274  3 13 19:55 sync_async.js
-rw-r--r--@  1 hamin  staff  108  3  7 15:25 underscore.js
-rw-r--r--@  1 hamin  staff  331  3 13 20:06 webserver2.js
hamins-MacBook-Pro:server_side_javascript hamin$ npm install -save express
npm WARN server_side_javascript@1.0.0 No repository field.

+ express@4.16.4
added 48 packages from 36 contributors and audited 122 packages in 1.894s
found 0 vulnerabilities

hamins-MacBook-Pro:server_side_javascript hamin$
