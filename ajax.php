<?php


$method = $_SERVER['REQUEST_METHOD'];
//if ($method === "POST") {
    $phone = trim($_POST['phone']);
    $name = trim($_POST['name']);
    $message = trim($_POST['message']);
    $nameInputPattern = "/^[а-яА-ЯёЁa-zA-Z+\s]/";
    $letterToMe = "Имя: $name \nТелефон: $phone\nСообщение: $message";
    if (empty($name) || empty($phone)) {
        echo "Fields Are Empty";
    } elseif (!preg_match($nameInputPattern, $name)) {
        echo "Invalid Fields";
    }
//} else {
    require_once "SendMailSmtpClass.php"; // подключаем класс
    $mailSMTP = new SendMailSmtpClass('max.target.agency@gmail.com', 'MaxTargetIsShashlyk1', 'ssl://smtp.gmail.com', 'Max-Target', 465);
    // $mailSMTP = new SendMailSmtpClass('логин', 'пароль', 'хост', 'имя отправителя');

    // заголовок письма
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
    $headers .= "From: max-target.top <max.target.agency@gmail.com>\r\n"; // от кого письмо
    $result = $mailSMTP->send('max.target.agency@gmail.com', 'Заявка с сайта', $letterToMe, $headers); // отправляем письмо
    // $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Заголовки письма');
    if ($result === true) {
        echo "success";
    } else {
        echo "Ошибка отправки $result";
    }
//}

?>
