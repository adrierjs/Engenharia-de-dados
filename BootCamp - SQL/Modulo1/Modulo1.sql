with total as (
	
	select actor_id, first_name, last_name, last_update from actor 
	where actor_id 
	between '1' and '10'
	
	order by 1
	asc)

		 
-- select count(actor_id) as quantidade from total;
select distinct * from total;
	
	
	
	
	