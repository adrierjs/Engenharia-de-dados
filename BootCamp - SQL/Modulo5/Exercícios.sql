/* 1) Busque todos o e-mail de todos os clientes que moram na california*/
-- select email from customer

inner join address 
on customer.address_id  = address.address_id
where address.district = 'California'

/*Um cliente entra na loja e é um grande fã desse ator Nick Walberg e quer saber em quais filmes Nick Wahlberg esteve. 
Portanto, a sua tarefa é obter basicamente uma lista de todos os filmes que Nick Wahlberg participou.*/


with actor_tb as (select 
			   * from actor
			   inner join film_actor 
			   on film_actor.actor_id = actor.actor_id
			   where actor.first_name = 'Nick' and last_name = 'Wahlberg')
			   

select title, first_name, last_name 
from actor_tb
inner join film 
on actor_tb.film_id = film.film_id
			   





			  

