package blog.ex.controller;

import java.time.LocalDate;
import java.util.List;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import blog.ex.model.dao.UserDao;
import blog.ex.model.entity.BlogEntity;
import blog.ex.model.entity.UserEntity;
import blog.ex.service.BlogService;
import jakarta.servlet.http.HttpSession;

/*Controller是Spring Framework中的一个注解，用于标识一个类是控制器“Controller”类，控制器类负责处理用户请求，
 * 协调业务逻辑并返回视图或数据给用户在Spring MVC框架中，可以使用@Controller注解来定义控制器类，控制器类通常会包含多个处理方法，每个方法负责处理特定的请求路径*/
@RequestMapping("/user/blog")
@Controller
public class BlogController {
	
	@Autowired
	private BlogService blogService;
	
	@Autowired
	private HttpSession session;
	/*@GetMapping 在javaSpring框架中，@GetMapping是一种注解，用于将HTTP GET请求映射到特定的方法
	 * 通过在方法上添加@GetMapping注释，可以指定接收到特定到HTTP GET请求时，应该调用哪个方法来处理请求*/
	@GetMapping("/list")
	public String getBlogListPage(Model model) {
		UserEntity userList = null;
		if(session.getAttribute("user") == null) {
			return "redirect:/user/login";
		}
		
		userList = (UserEntity)session.getAttribute("user");
		Long userId = userList.getUserId();
		String userName = userList.getUserName();
		model.addAttribute("userName",userName);	
		List<BlogEntity> blogList = this.blogService.findAllBlogPost(userId);
		model.addAttribute("blogList",blogList);
		return "blogView.html";
		
	}

	@GetMapping("/register")
	public String getBlogRegisterPage(Model model) {
		UserEntity userList = null;
		if(session.getAttribute("user") == null) {
			return "redirect:/user/login";
		}
		
		return "blogLogin.html";
		
	}
	/* 在java Spring框架中，@PostMapping是一种注解，用于将HTTP POST请求映射到特定的方法。
	 * 通过添加@PostMapping注解，你可以指定当接受到特定到HTTP POST请求时，应该调用哪个方法来处理请求。*/
	@PostMapping("/register/process")
	public String blogRegistProcess(@RequestParam String title,@RequestParam String image,@RequestParam String category,@RequestParam String content) {
		UserEntity userEntity = null;
		if(session.getAttribute("user") == null) {
			return "redirect:/user/login";
		}
		userEntity = (UserEntity)session.getAttribute("user");
		BlogEntity blogEntity = new BlogEntity();
		blogEntity.setUserId(userEntity.getUserId());
		blogEntity.setBlogDetail(content);
		blogEntity.setBlogTitle(title);
		blogEntity.setCategory(category);
		LocalDate localDate = LocalDate.now();
		blogEntity.setRegisterDate(localDate);
		blogEntity.setBlogImage(image);
		
		this.blogService.addBlog(blogEntity);
		return "redirect:/user/blog/list";
	}
	@Autowired
	private UserDao userdao;
	@GetMapping("/items")
	public String displayItems(Model model) {
		
		List<Item> items = itemRepository.findAll();
		model.addAttribute("items",items);
		return"blogView";
	}

	
}
