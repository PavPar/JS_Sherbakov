<?php
include "../php/db.php";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Простая страница html</title>
    <link rel="stylesheet" href="../index.css">
</head>

<body>
    <header class="header">
        <h1 class="header__title">Это тоже простая страница</h1>
        <p class="header__subtitle">Но здесь показывается карточка которую вы пытаетесь добавить</p>
    </header>
    <main class="content">

        <section class="notes">
            <h2>Данные новой карточки</h2>

            <div class="note">
                <h2 class="note__title"><?php echo(getData('title', true));?></h2>
                <p class="note__info"><?php echo(getData('info', true));?></p>
            </div>
        </section>

    </main>
    <footer class="footer">
        <p class="footer__name">Все это сделал Павел Парамонов</p>
    </footer>

    <template class="note-template">

    </template>
</body>
<script src="./index.js"></script>

</html>
