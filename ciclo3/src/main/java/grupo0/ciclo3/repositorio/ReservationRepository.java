
package grupo0.ciclo3.repositorio;


import grupo0.ciclo3.interfaz.ReservationCrudRepository;
import grupo0.ciclo3.modelo.Client;
import grupo0.ciclo3.modelo.Reservation;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ReservationRepository {
    @Autowired
    private ReservationCrudRepository reservationCrudRepository;
    
    public List<Reservation> getAll(){
        return (List<Reservation>) reservationCrudRepository.findAll();
    }
    
    public Optional<Reservation> getReservation(int id){
        return reservationCrudRepository.findById(id);
    }
    
    public Reservation save(Reservation reservation){
        return reservationCrudRepository.save(reservation);
    }
    
    public void delete(Reservation reservation){
        reservationCrudRepository.delete(reservation);
    }

    public List<Reservation> ReservationStatusRepository (String status){
        return reservationCrudRepository.findAllByStatus(status);
    }

    public List<Reservation> ReservationTimeRepository (Date a, Date b){
        return reservationCrudRepository.findAllByStartDateAfterAndStartDateBefore(a, b);
    }

    public List<CounterClient> getClientRepository(){
        List<CounterClient> res = new ArrayList<>();
        List<Object[]> report = reservationCrudRepository.countTotalReservationsByClient();
        for(int i=0; i<report.size(); i++){
            res.add(new CounterClient((Long)report.get(i)[1],(Client) report.get(i)[0]));
        }
        return res;
    }
}
