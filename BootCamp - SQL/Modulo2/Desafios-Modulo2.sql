--Primeiro desafio: Seu primeiro desafio e tarefa comercial que quero que você responda é isso, quantas transações de pagamentoforam maiores que US $ 5?

SELECT COUNT(*) FROM payment WHERE amount >5;

-- Quantos atores tem um primeiro nome que começa com a letra P?

SELECt count(*) FROM actor WHERE first_name LIKE('P%');


--  seu próximo desafio é de quantos distritos únicos são nossos clientes?

SELECT COUNT(DISTINCT(district)) from address;

-- Eu quero que você recupere a lista de nomes para esses distritos distintos da questão anterior.

SELECT DISTINCT(district) FROM address;

-- Outro desafio aqui é quantos filmes têm uma classificação de R e um custo de substituição entre US $ 5 e US $ 15?

SELECT COUNT(*) FROM film WHERE rating = 'R' AND replacement_cost BETWEEN '5' and '10'; 

-- Quantos filmes tem a palavra Truman em algum lugar no título?
SELECT COUNT(*) FROM film WHERE title LIKE ('%Truman%');


