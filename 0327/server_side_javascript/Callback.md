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
>
