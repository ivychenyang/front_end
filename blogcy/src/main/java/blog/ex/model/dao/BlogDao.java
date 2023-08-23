package blog.ex.model.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import blog.ex.model.entity.BlogEntity;
import jakarta.transaction.Transactional;

//JpaRepository 是Spring Date JPA提供的一个接口，用于简化数据库操作和数据库访问的代码。
//它继承PagingAndSo
public interface BlogDao extends JpaRepository<BlogEntity, Long>{
	
	
	List<BlogEntity> findByUserId(Long userId);
	
	BlogEntity save(BlogEntity blogEntity);
	
	BlogEntity findByBlogTitleAndRegisterDate(String blogTitle,LocalDate registerDate);
	
	BlogEntity findByBlogId(Long blogId);
	
	@Transactional
	
    List<BlogEntity> deleteByBlogId(Long blogId);
}
