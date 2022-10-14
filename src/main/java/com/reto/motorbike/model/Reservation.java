/**
*
*
* @author Sebas A.
*/

package com.reto.motorbike.model;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.*;

@Entity
@Table(name = "reservation")
@Getter //Se hace la anotación de Getter y Setter para hacer automaticamente
@Setter // los constructores de los atributos.
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer idReservation;
    private Date startDate;
    private Date devolutionDate;
    private String status = "created";

    /*Relaciones: Una motocicleta se relaciona con muchas reservaciones y una reservación
    sólo se relaciona con una motocicleta */
    @ManyToOne
    @JoinColumn(name = "motorbikeId")
    @JsonIgnoreProperties("reservations")
    private Motorbike motorbike;

    /*Relaciones: Un cliente se relaciona con muchas reservaciones y una reservación
    sólo se relaciona con un cliente */
    @ManyToOne
    @JoinColumn(name = "clientId")
    @JsonIgnoreProperties({ "reservations", "messages" })
    private Client client;

    /*Relaciones: Una calificación se relaciona sólo con una reservación y una reservación
    sólo se relaciona con una calificación */
    @OneToOne(cascade = { CascadeType.REMOVE }, mappedBy = "reservation")
    @JsonIgnoreProperties("reservation")
    private Score score;

}
