/*
1. Retorne os IDs dos clientes que gastaram pelo menos US$ 110 com o membro da equipe com ID 2.*/

with questao1 as (
	select staff_id, customer_id, sum(amount) from payment 
	where staff_id = '2' 
	group by 1,2 having sum(amount) >=110
) select * from questao1;

-- 2. Quantos filmes começam com a letra J?

with questao2 as (
	select count(title) from film where title like 'J%'
) 
select * from questao2;

/* 3. Qual cliente tem o maior número de ID de cliente cujo nome começa com um 'E' e tem um ID de endereço menor que 500? Eddie Tomlin
*/

select first_name, last_name, address_id
from customer where first_name like 'E%' and address_id <500 
order by address_id desc
limit 1