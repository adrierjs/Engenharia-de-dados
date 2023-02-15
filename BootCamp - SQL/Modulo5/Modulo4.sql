with users as(
select * from actor 

inner join film_actor
on actor.actor_id = film_actor.actor_id)

select x.actor_id, x.first_name, x.last_name, y.actor_id, y.film_id 
from actor x, film_actor y
order by first_name asc