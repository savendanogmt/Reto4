package com.reto.motorbike.repository.crud;

import java.util.*;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.reto.motorbike.model.Reservation;

public interface ReservationCrudRepositoryInterfaz extends CrudRepository<Reservation, Integer> {

    //Reservas completas vs canceladas
    public List<Reservation> findAllByStatus(String status);

    //Cantidad de reservas en un tiempo determinado
    public List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date fechaInicio, Date fechaFin);
                             

    //Top de los clientes le han dejado más dinero a la compañia
    @Query("SELECT c.client, COUNT(c.client) from Reservation  AS c group by c.client order by COUNT(c.client)DESC ")
    public List<Object[]> ReporteClientes(@Param("n")String estadoCompletado);


    
}
