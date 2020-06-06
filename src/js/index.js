! function ($) {
    // let array_default = []; //排序前的li数组
    // let array = []; //排序中的数组
    // let prev = null;
    // let next = null;
    // //商品数据渲染
    // const $pingpai_goods = $('.pingpai-goods');
    // $.ajax({
    //     url: 'http://localhost/WPH/php/pinpai.php',
    //     dataType: 'json'
    // }).done(
    //     function (data) {
    //         let $strhtml = '';
    //         $.each(data, function (index, value) {
    //             $strhtml += `
    //             <div class="brand-item">
    //             <img src=${value.url} alt="" class=".brand-img">
    //             <div class="brand-info">
    //             <span class="brand-name">${value.title}</span>
    //             <div class="brand-discount-pms">
    //                 <span class="brand-discount">
    //                     <span class="salebg2">${value.price}</span>元
    //                 </span>
    //             </div>
    //         </div>
    //         </div>
    //         `;
    //         });
    //         $strhtml += $strhtml
    //         $pingpai_goods.html($strhtml);

    //         //添加懒加载
    //         $(function () {
    //             $("img.lazy").lazyload({
    //                 effect: "fadeIn"
    //             });
    //         });

    //         array_default = []; //排序前的li数组
    //         array = []; //排序中的数组
    //         prev = null;
    //         next = null;
    //         //将页面的li元素加载到两个数组中
    //         $('.pingpai-goods div').each(function (index, element) {
    //             array[index] = $(this);
    //             array_default[index] = $(this);
    //         });

    //     }

    // )



}(jQuery);