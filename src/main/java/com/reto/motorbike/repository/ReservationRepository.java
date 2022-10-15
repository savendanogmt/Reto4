package com.reto.motorbike.repository;

import java.util.List;
import java.util.Optional;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.reto.motorbike.model.Reservation;
import com.reto.motorbike.repository.crud.ReservationCrudRepositoryInterfaz;

@Repository
public class ReservationRepository {

    @Autowired
    private ReservationCrudRepositoryInterfaz reservationCrudRepositoryInterfaz;

    public List<Reservation> obtenerReservationCompleta() {
        return (List<Reservation>) reservationCrudRepositoryInterfaz.findAll();
    }

    public Optional<Reservation> obtenerReservationId(Integer id) {
        return reservationCrudRepositoryInterfaz.findById(id);
    }

    public Reservation salvarReservation(Reservation reservation) {
        return reservationCrudRepositoryInterfaz.save(reservation);
    }

    public void delete(Reservation reservation) {
        reservationCrudRepositoryInterfaz.delete(reservation);
    }

    public List<Reservation> ReservacionStatus(String status){
        return reservationCrudRepositoryInterfaz.findAllByStatus(status);
    }

    public List<Reservation> ReservacionTiempo(Date fechaInicial, Date fechaFinal){
        return reservationCrudRepositoryInterfaz.findAllByStartDateAfterAndStartDateBefore(fechaInicial, fechaFinal);
    }

    public List<Object[]> ReporteClientes() {
        return reservationCrudRepositoryInterfaz.ReporteClientes();

    }

}
