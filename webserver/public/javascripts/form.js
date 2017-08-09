// $(function() {
//     // 提交表单
//     $('.btn').click(function(event) {
//         alert()
//         $('form').submit();
//     });
//     $('.btn').click(function(event) {
//         $.ajax({
//                 url: '/path/to/file',
//                 type: 'GET',
//                 dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
//                 data: {
//                     userName: '',
//                 },
//             })
//             .done(function() {
//                 console.log("success");
//             })
//             .fail(function() {
//                 console.log("error");
//             })
//             .always(function() {
//                 console.log("complete");
//             });
//     });
//     // 验证表单


// })
$(function() {
    //2.如果是必填的，则加红星标识.
    $("form :input.required").each(function() {
        var $required = $("<strong class='high'> *</strong>"); //创建元素
        $(this).parent().append($required); //然后将它追加到文档中
    });

    //3.文本框失去焦点后开始验证
    $('form :input').blur(function() {
        var $parent = $(this).parent();
        $parent.find(".formtips").remove();


        //3.1验证用户名
        if ($(this).is('#username')) {
            if (this.value == "" || this.value.length < 6) {
                var errorMsg = '请输入至少6位的用户名.';
                $parent.append('<span class="formtips onError">' + errorMsg + '</span>');
            } else {
                var okMsg = '输入正确.';
                $parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
            }
        }

        //3.2验证邮件
        if ($(this).is('#email')) {
            if (this.value == "" || (this.value != "" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))) {
                var errorMsg = '请输入正确的E-Mail地址.';
                $parent.append('<span class="formtips onError">' + errorMsg + '</span>');
            } else {
                var okMsg = '输入正确.';
                $parent.append('<span class="formtips onSuccess">' + okMsg + '</span>');
            }
        }

        //3.3实现一边输入一边验证
    }).keyup(function() {
        $(this).triggerHandler("blur");
    }).focus(function() {
        $(this).triggerHandler("blur");
    }); //end blur


    //3.4提交，最终验证。
    $('#send').click(function() {
        $("form :input.required").trigger('blur');
        var numError = $('form .onError').length;
        if (numError) {
                return false;
            }
        $.ajax({
            url: '/users/d2',
            type: 'GET',
            dataType: 'html',
            data: {
                userName: $('[name=username]').val(),
                Email:$('[name=email]').val(),
            },
        })
        .done(function() {            
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })       
    });

    //4.重置
    $('#res').click(function() {
        $(".formtips").remove();
    });

    //1.选中输入的时候输入框变色
    $(":input").focus(function() {
        $(this).addClass("focus");
    }).blur(function() {
        $(this).removeClass("focus");
    });


})