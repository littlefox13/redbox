<?php

?>
<html>
    <head>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/script.js"></script>
        <script src="/js/jquery.maskedinput.min.js"></script>
        <link href="/css/style.css" rel="stylesheet">
    </head>
    <body>

        <?php include "header.php"; ?>

        <main>
            <div class="main_create_event container">
                <div class="main_create_event__head">
                    <p class="head_create_event__title_text">
                        Создать мероприятие
                    </p>
                </div>
                <div class="main_create_event__body">
                    <div class="body_create_event__step1">
                        <?php include "step1.php"; ?>
                    </div>
                    <div class="body_create_event__step2">
                        <?php include "step2.php"; ?>
                    </div>
                </div>
            </div>
        </main>

        <?php include "footer.php"; ?>

    </body>
</html>
