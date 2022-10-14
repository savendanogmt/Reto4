package com.reto.motorbike.reports;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StatusReservas {
    private int completed;
    private int cancelled;
   
    public StatusReservas(int completed, int cancelled){
        this.completed= completed;
        this.cancelled = cancelled;
    }
}
