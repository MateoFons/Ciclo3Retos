
package grupo0.ciclo3.servicio;


import grupo0.ciclo3.modelo.Category;
import grupo0.ciclo3.repositorio.CategoryRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    
    public List<Category> getAll(){
        return categoryRepository.getAll();
    }
    
    public Optional<Category> getCategory(int categoryId){
        return categoryRepository.getCategory(categoryId);
    }
    
    public Category save(Category category){
        if(category.getId()==null){
            return categoryRepository.save(category);
        }else{
            Optional<Category> e= categoryRepository.getCategory(category.getId());
            if(e.isEmpty()){
                return categoryRepository.save(category);
            }else{
                return category;
            }
        }
    }
    
    public Category update(Category category){
        if(category.getId()!=null){
            Optional<Category> e= categoryRepository.getCategory(category.getId());
            if(!e.isEmpty()){
                if(category.getName()!=null){
                    e.get().setName(category.getName());
                }
                if(category.getDescription()!=null){
                    e.get().setDescription(category.getDescription());
                }
                categoryRepository.save(e.get());
                return e.get();
            }
        }
        return category;
    }
    
    public boolean deleteCategory(int categoryId){
        Boolean aBoolean = getCategory(categoryId).map(category ->{
            categoryRepository.delete(category);
            return true;
        }).orElse(false);
        return aBoolean;
    }
    
}
