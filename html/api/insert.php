<?php
require_once('../config.php');

$method = strtolower( $_SERVER['REQUEST_METHOD']);

if($method === 'post'){
    $title = filter_input(INPUT_POST, 'title');
    $descricao = filter_input(INPUT_POST, 'descricao');

    if($title && $descricao){
        $sql = $conn->prepare("INSERT INTO descricao (title, descricao) VALUES(:title, :descricao)");
        $sql->bindValue(':tile', $title);
        $sql->bindValue(':descricao', $descricao);
        $sql->execute();

        $id = $conn->lastInsertId();

        $array['result'] = [
            'id' => $id,
            'title' => $title,
            'descricao' => $descricao
        ];
    } else {
        $array['error'] = 'campos nao enviados';
    }
    
} else {
    $array['error'] = 'Metodo nao reconhecido somente POST';
}
require_once('../return.php');
