package blog.ex.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import blog.ex.model.dao.BlogDao;
import blog.ex.model.entity.BlogEntity;

@Service
public class BlogService {
	@Autowired
	private BlogDao blogDao;
	
	public List<BlogEntity> findAllBlogPost(Long userId){
		if(userId==null) {
			return null;
			
		}else {
			return blogDao.findByUserId(userId);
		}
		
	}
	
	public int addBlog(BlogEntity entity) {
		int result = 0 ;
		if(this.blogDao.save(entity) != null) {
			result = 1;
		}
		return result;
	}
}
