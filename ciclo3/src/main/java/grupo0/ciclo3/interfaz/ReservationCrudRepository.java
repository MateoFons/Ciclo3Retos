
package grupo0.ciclo3.interfaz;


import grupo0.ciclo3.modelo.Reservation;
import org.springframework.data.repository.CrudRepository;


public interface ReservationCrudRepository extends CrudRepository<Reservation, Integer>{
    
}
