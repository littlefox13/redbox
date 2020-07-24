<div class="create_event__blocks">
    <div class="create_event__block">
        <p class="create_event_block__title">Информация об организаторе</p>
        <div class="create_event_block__block_inputs">
            <div class="block_input">
                <p class="block_input__title">Организатор</p>
                <input class="block_input__input input__organizer_name">
            </div>
        </div>
    </div>
    <div class="create_event__block">
        <p class="create_event_block__title">Контактные данные</p>
        <div class="create_event_block__block_inputs block_inputs__column-3 block_inputs__columns">
            <div class="block_input">
                <p class="block_input__title">Телефон</p>
                <input class="block_input__input block_input__telephone">
            </div>
            <div class="block_input">
                <p class="block_input__title">E-mail</p>
                <input class="block_input__input block_input__e-mail">
            </div>
            <div class="block_input">
                <p class="block_input__title">Город организатора</p>
                <input class="block_input__input block_input__city">
            </div>
        </div>
    </div>
    <div class="create_event__block">
        <p class="create_event_block__title">Общая информация</p>
        <div class="create_event_block__block_inputs">
            <div class="block_input">
                <p class="block_input__title">Название</p>
                <input class="block_input__input block_input__event_name">
            </div>
            <div class="block_input">
                <p class="block_input__title">Фотографии</p>
                <!-- форма с фото -->
                <div class="upload_file_container">
                    <div class="upload_file_container__block">
                        <div class="upload_file_container__img">
                            <img src="#" alt=" " class="add_photo__preview">
                            <img src="/img/add_photo.svg" class="add_photo__img">
                            <input type="file" name="pic[]" class="add_photo__input">
                            <div class="add_photo__delete"><img src="/img/close.svg"></div>
                        </div>
                        <div class="upload_file_container__text_block">
                            <p class="upload_file_container__text">Главная фотография (обложка мероприятия)</p>
                        </div>
                    </div>
                    <div class="upload_file_container__block">
                        <div class="upload_file_container__img">
                            <img src="#" alt=" " class="add_photo__preview">
                            <img src="/img/add_photo.svg" class="add_photo__img">
                            <input type="file" name="pic[]" class="add_photo__input">
                            <div class="add_photo__delete"><img src="/img/close.svg"></div>
                        </div>
                        <div class="upload_file_container__text_block">
                            <p class="upload_file_container__text">Фотография для карточки мероприятия</p>
                        </div>
                    </div>
                    <div class="upload_file_container__block">
                        <div class="upload_file_container__img add_more_photo">
                            <img src="#" alt=" " class="add_photo__preview">
                            <img src="/img/add_photo.svg" class="add_photo__img">
                        </div>

                    </div>
                </div>
            </div>
            <div class="block_input">
                <p class="block_input__title">Видео (ссылка)</p>
                <div class="block_input__video_link_block">
                    <img src="/img/video_link.svg" class="block_input__video_link_svg">
                </div>
                <input class="block_input__input block_input__video">
            </div>
            <div class="block_input">
                <p class="block_input__title">Подробное описание</p>
                <textarea class="block_input__input block_input__full_description"></textarea>
            </div>
            <div class="block_input">
                <div class="added_data_container">

                </div>
                <div class="add_data_container">
                    <div class="add_data_block add_data__start_data_container">
                        <div class="add_data__data_block">
                            <p class="data_block__title">Дата начала</p>
                            <input class="block_input__input data_block__input_data">
                            <img src="/img/calendar.svg">
                        </div>
                        <div class="add_data__time_block">
                            <p class="data_block__title">Время начала</p>
                            <input class="block_input__input data_block__input_time">
                            <img src="/img/time.svg">
                        </div>
                    </div>
                    <div class="add_data__center_line"></div>
                    <div class="add_data_block add_data__end_data_container">
                        <div class="add_data__data_block">
                            <p class="data_block__title">Дата окончания</p>
                            <input class="block_input__input data_block__input_data">
                            <img src="/img/calendar.svg">
                        </div>
                        <div class="add_data__time_block">
                            <p class="data_block__title">Время окончания</p>
                            <input class="block_input__input data_block__input_time">
                            <img src="/img/time.svg">
                        </div>
                    </div>
                </div>
                <div class="add_data_btn white_btn btn active">
                    <p class="btn__text_black">+ Добавить дату</p>
                </div>

            </div>
            <div class="block_inputs__column-2 block_inputs__columns">
                <div class="block_input">
                    <p class="block_input__title">Категория</p>
                    <select class="block_input__input block_input__input_category">

                    </select>

                </div>
                <div class="block_input">
                    <p class="block_input__title">Рейтинг мероприятия</p>
                    <select class="block_input__input block_input__input_rating">

                    </select>
                </div>
            </div>
            <div class="block_inputs__column-2 block_inputs__columns">
                <div class="block_input">
                    <p class="block_input__title">Адрес мероприятия</p>
                    <input class="block_input__input block_input__address">
                </div>
                <div class="block_input">
                    <p class="block_input__title">Комментарий к адресу</p>
                    <input class="block_input__input block_input__address_comment">
                </div>
            </div>
        </div>
    </div>
    <div class="create_event__block create_event__block_buttons">
        <div class="create_event_btn white_btn btn">
            <p class="btn__text_black">Отменить</p>
        </div>
        <div class="create_event_btn purple_btn btn">
            <p class="btn__text_white">Далее</p>
        </div>
    </div>
</div>