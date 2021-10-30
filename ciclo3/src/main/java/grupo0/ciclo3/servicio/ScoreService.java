package grupo0.ciclo3.servicio;


import grupo0.ciclo3.modelo.Score;
import grupo0.ciclo3.repositorio.ScoreRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScoreService {
    @Autowired
    private ScoreRepository scoreRepository;
    
    public List<Score> getAll(){
        return scoreRepository.getAll();
    }
    
    public Optional<Score> getScore(int scoreId){
        return scoreRepository.getScore(scoreId);
    }
    
    public Score save(Score score){
        if(score.getIdScore()==null){
            return scoreRepository.save(score);
        }else{
            Optional<Score> e= scoreRepository.getScore(score.getIdScore());
            if(e.isEmpty()){
                return scoreRepository.save(score);
            }else{
                return score;
            }
        }
    }
    
    public Score update(Score score){
        if(score.getIdScore()!=null){
            Optional<Score> e= scoreRepository.getScore(score.getIdScore());
            if(!e.isEmpty()){
                if(score.getMessageText()!=null){
                    e.get().setMessageText(score.getMessageText());
                }
                if(score.getStars()!=null){
                    e.get().setStars(score.getStars());
                }
                scoreRepository.save(e.get());
                return e.get();
            }
        }
        return score;
    }
    
    public boolean deleteScore(int scoreId){
        Boolean aBoolean = getScore(scoreId).map(score ->{
            scoreRepository.delete(score);
            return true;
        }).orElse(false);
        return aBoolean;
    }
    
}

