      // localStorage (localArmazenamento):permite obtermos os dados armazenados localmente.
      player1_name = localStorage.getItem("player1_name");
      player2_name = localStorage.getItem("player2_name");
          //Definiremos 2 variáveis para armazenar o placar dos dois jogadores. Devemos definir osvalores para 0.
      player1_score = 0;
      player2_score = 0;
          //. Atualizaremos o nome de player1 em seus elementos HTML respectivos utilizando sua id
  document.getElementById("player1_name").innerHTML = player1_name + " : ";
  document.getElementById("player2_name").innerHTML = player2_name + " : ";
          // Agora, atualizaremos o placar de player1 nos elementos HTML utilizando a id “player1_score”
  document.getElementById("player1_score").innerHTML = player1_score ;
  document.getElementById("player2_score").innerHTML = player2_score ;
          // Atualizaremos o elemento HTML utilizando a id criada na última aula com o nome do jogador responsável pelo turno de perguntas
  document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1_name ;
  document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name ;
          // Para programamos o botão Enviar:
  function send() {
      //Depois, obteremos a palavra inserida na caixa de entrada usando a sua id e a armazenaremos em uma variável.
      get_word = document.getElementById("word").value;
      // resolver esse problema, converteremos todas as entradas de palavras para letras minúsculas, evitando esse problema, e armazenaremos essa nova palavra
          //em outra variável
      word = get_word.toLowerCase();
      //Com esse trecho programado, imprimiremos essa palavra no console para verificar que ele funciona.
      console.log("palavra em letras minúsculas = " + word);
  
      charAt1 = word.charAt(1);//é a variável que armazena a palavra inserida pelo jogador, o indice da letra
      console.log(charAt1);
         //logica divida o compr po 2 armazena na var,é uma função JavaScript que arredonda um número decimal para o número inteiro MAIS BAIXO mais próximo.
      lenght_divide_2 = Math.floor(word.length/2);
      // Passaremos o valor de length_divide_2 para charAt()
      charAt2 = word.charAt(lenght_divide_2);
      console.log(charAt2);
  
      lenght_minus_1 = word.length - 1; //Diminuiremos o valor do comprimento total da palavra em 1 e armazenaremos isso
                                       // em uma variável, para depois passarmos para charAt().
      charAt3 = word.charAt(lenght_minus_1); 
      console.log(charAt3);
  
      remove_charAt1 = word.replace(charAt1, "_");//place() para substituir a letra que selecionamos no passo acima com 
      remove_charAt2 = remove_charAt1.replace(charAt2, "_");
      remove_charAt3 = remove_charAt2.replace(charAt3, "_");
      console.log(remove_charAt3);
  //Há uma maneira fácil de adicionarmos elementos HTML dinamicamente
  // Primeiro, criaremos uma tag h4 com uma id e armazenaremos a palavra dentro desta tag, armazenando tudo isso em uma variável
      question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";
  
      //uma tag br seguida do texto “Resposta: ” e uma caixa de entrada com uma id, armazenando tudo isso em uma variáve	
      input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
       //duas tags br, um botão com a class bootstrap “btn btn-info” e uma função onclick check(), armazenando tudo isso em uma variável. Definiremos
         //essa função na próxima aula.	
      check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
      // variáveis da palavra, da caixa de entrada e do botão Verificar em uma única variável.
      row =  question_word + input_box + check_button ; 
      //Atualizaremos a div com a id="output" com a nova variável, row (linha).
       document.getElementById("output").innerHTML = row;
          //atualizaremos o valor da caixa de entrada de respostas com um valor nulo
       document.getElementById("word").value = "";
  }
  
  //proxima aula 
  //1 defina 2 variaveis
  question_turn = "player1";
  answer_turn = "player2";


  
  // 2 programar o botão verificar (check)
  function check()
  {
      get_answer = document.getElementById("input_check_box").value;
      //3  converter a variavel em min
      answer = get_answer.toLowerCase();

     //4 imprimir no console 
      console.log("resposta em letras minúsculas -" + answer);
      // 5 condição if para comparar as duas palavras
      if( answer  == word  )	
      {    // if para  pontuação e atualizar
          if(answer_turn == "player1")
          {
              player1_score = player1_score +1;
              document.getElementById("player1_score").innerHTML = player1_score;


          }
          else // outra condição
          {
            player2_score = player2_score +1;
            document.getElementById("player1_score").innerHTML = player2_score;   


          }
      }// programar a troca dos turnos pergunta
      if(question_turn == "player1")
      {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "turno de perguntas - " +player2_name;


      }
      else 
      {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "turno de perguntas - " +player1_name;


      }
     // programar a troca do turno resposta
      if(answer_turn == "player1")
      {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "turno de respostas - " +player2_name;

      }
      else 
      {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "turno de respostas - " +player1_name;

      }
    // atualizar as informações  no elemento Html para vazio
     document.getElementById('output').innerHTML = "";
  }