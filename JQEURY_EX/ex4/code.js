$(function(){
    $(".sample_btn").click(function(){
        $.ajax({
        url:'test.html',
        type:'GET',
        dataType:'html'
        }).done(function(data){
            //通信成功
            $(".result").html(data);
        }).fail(function(){
            //通信失败してしまった時
            console.log("通信失败してしました");
        })
    })

});