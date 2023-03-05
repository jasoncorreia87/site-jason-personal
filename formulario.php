<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $data_nascimento = $_POST["data-nascimento"];
    $sexo = $_POST["sexo"];
    $profissao = $_POST["profissao"];
    $sedentario = $_POST["sedentario"];
    $objetivo_treino = $_POST["objetivo-treino"];
    $email = $_POST["email"];
    $celular = $_POST["celular"];

    $dados = array(
        "nome" => $nome,
        "data_nascimento" => $data_nascimento,
        "sexo" => $sexo,
        "profissao" => $profissao,
        "sedentario" => $sedentario,
        "objetivo_treino" => $objetivo_treino,
        "email" => $email,
        "celular" => $celular
    );

    $dados_json = json_encode($dados);
    file_put_contents("dados.txt", $dados_json . "\n", FILE_APPEND);

    echo "Os dados foram salvos com sucesso.";
}
?>