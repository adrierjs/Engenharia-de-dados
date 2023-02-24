with total as (
	
	select actor_id, first_name, last_name, last_update from actor 
	where actor_id 
	between '1' and '10'
	
	order by 1
	asc,
	2 desc)

		 
-- select count(actor_id) as quantidade from total;
select distinct * from total;


-- Exemplo de uso do where
-- select * from film 
-- where rental_duration <4 and replacement_cost >= '19.99' and rating = 'R';

-- select email from customer 
-- where first_name = 'Barbara';

-- Limitando o resultado para apenas 10 linhas

select * from payment limit 10;

-- Selecionando todos os valores(7.99, 1.99) na coluna amount

select * from payment where amount in(7.99,1.99);

-- Encontrando palavras que comecessem com o caracter

select first_name from actor where first_name like ('_h%')

select first_name from actor where first_name ILIKE('_h%');

	
	