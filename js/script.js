var files; // переменная. будет содержать данные файлов
var qwe;
var category = {
    1: "Еда",
    2: "Спорт",
    3: "Развлечение",
    4: "WoW"
};
var rating = {
    1: "0+",
    2: "6+",
    3: "12+",
    4: "18+",
    5: "21+"
};
$(document).ready(function() {
    $('body').css('margin', 0);
    $('.block_input__input.block_input__telephone').mask("+7 (999) 999-99-99");

    var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
    var email = $('.block_input__input.block_input__e-mail');

    email.on('input, keyup', function() {
        if(email.val() != ''){
            if(email.val().search(pattern) == 0){
                email.css('border', '1px solid #CDB1FB');
                email.removeClass('error');
            }else{
                email.css('border', '3px solid red');
                email.addClass('error');
            }
        }else{
            email.addClass('error');
        }
    })



    $('.block_input__input_category').empty();
    $.each(category, function(k,v){
        $('.block_input__input_category').append("<option value='"+k+"'>"+v+"</option>");
    });
    $('.block_input__input_rating').empty();
    $.each(rating, function(k,v){
        $('.block_input__input_rating').append("<option value='"+k+"'>"+v+"</option>");
    });
    $('.add_more_photo').on('click', function() {
        $(this).parent().before("<div class=\"upload_file_container__block\">\n" +
            "                        <div class=\"upload_file_container__img\">\n" +
            "                            <img src=\"#\" alt=\" \" class=\"add_photo__preview\">\n" +
            "                            <img src=\"/img/add_photo.svg\" class=\"add_photo__img\">\n" +
            "                            <input type=\"file\" name=\"pic[]\" class=\"add_photo__input\">\n" +
            "                            <div class=\"add_photo__delete\"><img src=\"/img/close.svg\"></div>\n" +
            "                        </div>\n" +
            "                    </div>");
        refreshEventsAddPhoto();
        if ($('.upload_file_container__block').length == 7) {
            $(this).parent().remove();
        }
    });
    refreshEventsAddPhoto();
    $('.data_block__input_data').on('input, keyup', function() {
        if (validateDate($(this).val())) {
            $(this).css('border', '1px solid #CDB1FB');
            $('.add_data_btn.white_btn.btn').addClass( "active" );
        } else {
            $(this).css('border', '3px solid red');
            $('.add_data_btn.white_btn.btn').removeClass( "active" );
        }
    });
    $('.data_block__input_time').on('input, keyup', function() {
        if (validateTime($(this).val())) {
            $(this).css('border', '1px solid #CDB1FB');
            $('.add_data_btn.white_btn.btn').addClass( "active" );
        } else {
            $(this).css('border', '3px solid red');
            $('.add_data_btn.white_btn.btn').removeClass( "active" );
        }
    });
    $('.add_data_btn').on('click', function(){
        if (!$(this).hasClass('active')) {
            return;
        }
        let emp = false;
        $.each($('.add_data_container input'), function(k,v){

            if (!$(v).val()) {
                emp = true;
            }
        });
        if (emp) {
            return;
        }
       $('.added_data_container').append("<div class='added_data_block'>" +
           $('.add_data_container').html() +
           "</div>");
       let block = $('.added_data_block')[$('.added_data_block').length-1];
       $(block).append("<div onclick='removeData(this)' class='added_data_block__remove_button'><img src='/img/close.svg'></div>");
        $.each($(block).find('input'), function(k,v) {
            $(v).val($($('.add_data_container input')[k]).val());
            $(v).prop( "disabled", true );
        });
        $('.add_data_container input').val('').css('border', '1px solid #CDB1FB');
    });
    $('.create_event_btn.purple_btn.btn').on('click', function(){
        let data = getEventData();
        renderStepTwo(data);
    });
    $('.gallery_block__arrow.gallery_block__arrow_left').on('click', function(){
        let tmp = $($('.gallery_block__img_container .img_block')[0]);
        $('.gallery_block__img_container').append(tmp);
    });
    $('.gallery_block__arrow.gallery_block__arrow_right').on('click', function(){
        let tmp = $($('.gallery_block__img_container .img_block')[$('.gallery_block__img_container .img_block').length - 1]);
        $('.gallery_block__img_container').prepend(tmp);
    });
    $('.popup_main').on('click', function(){
        $(this).hide();
        $('.popup_main__container').empty();
    });
    $('.check_event_btn.white_btn').on('click', function(){
        $('.body_create_event__step1').show();
        $('.body_create_event__step2').hide();
    });
    $('.create_event_btn.white_btn').on('click', function(){
        $('.create_event__blocks input').val('');
        $('.add_photo__delete').click();
        $('.added_data_block__remove_button').click();
    });
});
function renderStepTwo (data) {
    $('.body_create_event__step1').hide();
    $('.body_create_event__step2').show();
    if (data['address']) {
        $('.address_block__text').text(data['address']);
        $('.text_info__block.text_info__address_block').show();
    } else {
        $('.text_info__block.text_info__address_block').hide();
    }
    if (data['telephone']) {
        $('.phone_block__text').text(data['telephone']);
        $('.text_info__block.text_info__phone_block').show();
    } else {
        $('.text_info__block.text_info__phone_block').hide();
    }
    if (data['email']) {
        $('.email_block__text').text(data['email']);
        $('.text_info__block.text_info__email_block').show();
    } else {
        $('.text_info__block.text_info__email_block').hide();
    }

    if (data['dates'][0]) {
        $('.date_block__text').text(data['dates'][0]['date_start']);
        $('.time_block__text').text(data['dates'][0]['time_start']);
        $('.text_info__block.text_info__date_block').show();
        $('.text_info__block.text_info__time_block').show();
    } else {
        $('.text_info__block.text_info__date_block').hide();
        $('.text_info__block.text_info__time_block').hide();
    }
    if (data['dates'][1]) {
        $('.date_block__show_all').remove();
        $('.text_info__block.text_info__date_block').append("<div class='date_block__show_all' onclick='showHideAllDate()'><p>Показать всё</p><div class='show_all__container'></div></div>");
        $.each(data['dates'], function(k,v){
             $('.show_all__container').append("<div class='show_all__block'>" +
                    "<p class='show_all__start_date'>"+v['date_start']+"</p>" +
                    "<p class='show_all__start_time'>("+v['time_start']+")</p>" +
                    "<p class='show_all__hyphen'> - </p>" +
                    "<p class='show_all__end_date'>"+v['date_end']+"</p>" +
                    "<p class='show_all__end_time'>("+v['time_end']+")</p>" +
                 "</div>");
        });
    }
    if(data['rating']) {
        $('.text_rating__text').text(data['rating']);
    }

    if(data['event_name']) {
        $('.text_info__title').text(data['event_name']);
    }

    if(data['organizer_name']) {
        $('.organizer_block__text_organizer_name').text(data['organizer_name']);
    }

    if(data['full_description']) {
        $('.check_event_block__description_block').text(data['full_description']);
    }

    if(data['img'][0]) {
        $('.block_main_info__img img').attr('src', data['img'][0]);
    }
    $('.gallery_block__img_container').empty();
    if(data['video_link']) {
        let v_id =  data['video_link'].split('v=')[1].split('&')[0] ;
        $('.gallery_block__img_container').append('<div class="img_block">' +
            '<img src="https://img.youtube.com/vi/'+v_id+'/mqdefault.jpg">' +
            '<div class="img_container__play_video" onclick="playVideo(\''+v_id+'\')"><img src="/img/play_video.svg"></div> ' +
            '</div>');
    }
    if (data['img']) {
        $.each(data['img'], function(k,v){
            $('.gallery_block__img_container').append('<div class="img_block">' +
                '<img src="'+v+'">' +
                '</div>');
        });
    }

}
function showHideAllDate() {
    let dv = $('.show_all__container');
    if (dv.css('display') == 'block') {
        dv.hide();
    } else {
        dv.show();
    }

}
function playVideo (id) {
    $('.popup_main').css('display', 'flex');
    $('.popup_main__container').empty();
    $('.popup_main__container').append('<iframe width="1100" height="600" src="//www.youtube.com/embed/'+id+'?rel=0" frameborder="0" allowfullscreen=""></iframe>');
}
function getEventData () {
    let data = {};
    let organizer_name = $('.block_input__input.input__organizer_name').val();
    if (organizer_name) {
        data['organizer_name'] = organizer_name;
    }
    let telephone = $('.block_input__input.block_input__telephone').val();
    if (telephone) {
        data['telephone'] = telephone;
    }
    let email = $('.block_input__input.block_input__e-mail');
    if (email.val() && !email.hasClass('error')) {
        data['email'] = email.val();
    }
    let city = $('.block_input__input.block_input__city').val();
    if (city) {
        data['city'] = city;
    }
    let event_name = $('.block_input__input.block_input__event_name').val();
    if (event_name) {
        data['event_name'] = event_name;
    }
    data['img'] = {};
    let imgs = $('.add_photo__preview');
    $.each(imgs, function(k,img) {
        let src = $(img).attr('src');
        if (src != '#' && src) {
            data['img'][k] = src;
        }
    });
    let video_link = $('.block_input__input.block_input__video').val();
    if (video_link) {
        data['video_link'] = video_link;
    }

    let full_description = $('.block_input__input.block_input__full_description').val();
    if (full_description) {
        data['full_description'] = full_description;
    }
    data['dates'] = {};
    let added_date = $('.added_data_block');
    $.each(added_date, function(k, date) {
        data['dates'][k] = {};
        let inputs = $(date).find('input');
        data['dates'][k]['date_start'] = $(inputs[0]).val();
        data['dates'][k]['time_start'] = $(inputs[1]).val();
        data['dates'][k]['date_end'] = $(inputs[2]).val();
        data['dates'][k]['time_end'] = $(inputs[3]).val();
    });
    let rating = $('.block_input__input_rating option:selected').text();
    data['rating'] = rating;
    let address = $('.block_input__input.block_input__address').val();
    if (address) {
        data['address'] = address;
    }

    let address_comment = $('.block_input__input.block_input__address_comment').val();
    if (address_comment) {
        data['address_comment'] = address_comment;
    }
    console.log(data);
    return data;
}
function removeData(dv) {
    let data_block = $(dv).parent('.added_data_block').remove();
}
function validateTime(value) {
    var arrT = value.split(".");
    if ((arrT[0] <= 24) && (arrT[0] >= 0) && (arrT[1] >= 0) && (arrT[1] <= 59) && (typeof arrT[2] == 'undefined')) {
        return true;
    } else {
        return false;
    }
}
function validateDate(value) {

    var arrD = value.split(".");
    arrD[1] -= 1;
    var d = new Date(arrD[2], arrD[1], arrD[0]);
    if ((d.getFullYear() == arrD[2]) && (d.getMonth() == arrD[1]) && (d.getDate() == arrD[0]) && (typeof arrD[3] == 'undefined')) {
        return true;
    } else {

        return false;
    }
}
function refreshEventsAddPhoto() {
    $('input[type=file]').unbind('change');
    $('input[type=file]').on('change', function () {
        //files = this.files;
        readURL(this);

    });
    $('.add_photo__delete').unbind('click');
    $('.add_photo__delete').on('click', function() {
        let preview = $(this).siblings('.add_photo__preview');
        preview.css('opacity', 0);
        setTimeout(function(){
            preview.attr('src', "");
        },500);
        $(this).css('top', '0px');
        $(this).css('right', '0px');
        $(this).css('z-index', '-1');
    });
} 
function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            let preview = $(input).siblings('.add_photo__preview');
            let close = $(input).siblings('.add_photo__delete');
            preview.attr('src', e.target.result);
            preview.css('opacity', 1);
            close.css('top', '-17px');
            close.css('right', '-17px');
            close.css('z-index', '0');
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInput").change(function(){
    readURL(this);
});