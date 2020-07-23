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

// заполняем переменную данными, при изменении значения поля file
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
        } else {
            $(this).css('border', '3px solid red');
        }
    });
    $('.data_block__input_time').on('input, keyup', function() {
        if (validateTime($(this).val())) {
            $(this).css('border', '1px solid #CDB1FB');
        } else {
            $(this).css('border', '3px solid red');
        }
    });
});
function validateTime(value) {
    var arrT = value.split(".");
    if (arrT[0] <= 24 && arrT[0] >= 0 && arrT[1] >= 0 && arrT[1] <= 59) {
        return true;
    } else {
        return false;
    }
}
function validateDate(value) {

    var arrD = value.split(".");
    arrD[1] -= 1;
    var d = new Date(arrD[2], arrD[1], arrD[0]);
    if ((d.getFullYear() == arrD[2]) && (d.getMonth() == arrD[1]) && (d.getDate() == arrD[0])) {
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