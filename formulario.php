<?php

// Verifica se foi enviado um formulário com método POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Recebe os dados do formulário
    $nome = $_POST['nome'];
    $data_nascimento = $_POST['data-nascimento'];
    $sexo = $_POST['sexo'];
    $profissao = $_POST['profissao'];
    $sedentario = $_POST['sedentario'];
    $objetivo_treino = $_POST['objetivo-treino'];
    $email = $_POST['email'];
    $celular = $_POST['celular'];
    
    // Configura as variáveis para envio de e-mail
    $para = 'jasoncorreia87@gmail.com'; // Endereço de e-mail para onde será enviado o formulário
    $assunto = 'Formulário de contato'; // Assunto do e-mail
    
    // Monta a mensagem do e-mail com os dados do formulário
    $mensagem = "Nome: $nome\n";
    $mensagem .= "Data de Nascimento: $data_nascimento\n";
    $mensagem .= "Sexo: $sexo\n";
    $mensagem .= "Profissão: $profissao\n";
    $mensagem .= "Sedentário: $sedentario\n";
    $mensagem .= "Objetivo do treino: $objetivo_treino\n";
    $mensagem .= "E-mail: $email\n";
    $mensagem .= "Celular: $celular\n";
    
    // Envia o e-mail
    mail($para, $assunto, $mensagem);
    
    // Exibe uma mensagem de confirmação para o usuário
    echo "O formulário foi enviado com sucesso.";
    
}
