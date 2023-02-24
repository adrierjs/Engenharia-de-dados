/**
Sua primeira tarefa é responder ao seguinte durante os meses em que

os pagamentos ocorrem e também formatar sua resposta para retornar o nome completo do mês.*/

select (to_char (payment_date, 'DAY')) 
			  as dia_s from payment 
			  
			  
select count(*) from payment where extract(dow from payment_date) = 1




