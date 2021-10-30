
package grupo0.ciclo3.repositorio;

import grupo0.ciclo3.interfaz.OrtopedicCrudRepository;
import grupo0.ciclo3.modelo.Ortopedic;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class OrtopedicRepository {
    @Autowired
    private OrtopedicCrudRepository ortopedicCrudRepository;
    
    public List<Ortopedic> getAll(){
        return (List<Ortopedic>) ortopedicCrudRepository.findAll();
    }
    
    public Optional<Ortopedic> getOrtopedic(int id){
        return ortopedicCrudRepository.findById(id);
    }
    
    public Ortopedic save(Ortopedic ortopedic){
        return ortopedicCrudRepository.save(ortopedic);
    }
    
    public void delete(Ortopedic ortopedic){
        ortopedicCrudRepository.delete(ortopedic);
    }
}
