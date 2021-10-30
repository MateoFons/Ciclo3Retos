package grupo0.ciclo3.repositorio;


import grupo0.ciclo3.interfaz.ScoreCrudRepository;
import grupo0.ciclo3.modelo.Score;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ScoreRepository {
    @Autowired
    private ScoreCrudRepository scoreCrudRepository;
    
    public List<Score> getAll(){
        return (List<Score>) scoreCrudRepository.findAll();
    }
    
    public Optional<Score> getScore(int id){
        return scoreCrudRepository.findById(id);
    }
    
    public Score save(Score score){
        return scoreCrudRepository.save(score);
    }
    
    public void delete(Score score){
        scoreCrudRepository.delete(score);
    }
    
}

