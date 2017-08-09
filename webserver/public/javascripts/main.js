// function addScriptTag(src) {
//     var script = document.createElement('script');
//     script.setAttribute("type", "text/javascript");
//     script.src = src;
//     document.body.appendChild(script);
// }

// function foo(json) {
//     console.log(json);
//     var nameHtml='';
//     for (var i = 0; i < json.data.length; i++) {
//         current = '<p>'+'Your public IP address is: ' + json.data[i].name +'</p>';
//         nameHtml += current;
//     }
//     $('.name').html(nameHtml)
// }
// // 原始jsonp 解决跨域问题
// $(function() {
//     //3.4提交，最终验证。
//     // $('#box').click(function() {
//     //     addScriptTag('https://travel.qunar.com/space/login/getUser?callback=foo')
//     // })
// });


//  // jq 用ajax方式 
// $(function() {
//     $('#box').click(function() {
//         $.ajax({
//                 url: 'http://localhost:3000/getNotes',
//             })
//             .done(function(json) {
//                 for (var i = 0; i < json.data.length; i++) {
//                     var name = json.data[i].name
//                     console.log(name)
//                 }
//             })
//             .fail(function() {
//                 console.log("error");
//             })
//     });
// })

function ajaxF(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if(xhr.readyState ===4){
            if(xhr.status === 200){
                console.log(xhr.responseText);
            }else{
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function(){
        console.error(xhr.statusText);
    };
    xhr.open('get','/getNotes2',true);
    xhr.send(null);
}

$('#box').click(function(event) {
    ajaxF();
});





