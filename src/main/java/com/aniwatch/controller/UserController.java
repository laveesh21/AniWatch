package com.aniwatch.controller;

// import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.aniwatch.model.User;
import com.aniwatch.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("user")
	public User createUser(@RequestBody User user){
		User newUser = new User();
		newUser.setEmail(user.getEmail());
		newUser.setUsername(user.getUsername());
		newUser.setPassword(user.getPassword());
		
		User savedUser = userRepository.save(newUser);
		return savedUser;
	}
	
	@GetMapping("/user")
	public List<User> addUser(){
		List<User> users = userRepository.findAll();
		return users;
	}

	@GetMapping("/user/{userId}")
	public User getUserById( @PathVariable("userId") Long userId ) throws Exception {
		Optional<User> result = userRepository.findById(userId);
		
		if(result.isPresent()) {
			return result.get();			
		}
		throw new Exception("User Not Found By ID");
		
	}

	@PutMapping("/user/{userId}")
	public User getMethodName(@RequestBody User user, @PathVariable Long userId) throws Exception{
		
		Optional<User> resultUser = userRepository.findById(userId);
		
		if(resultUser.isEmpty()) {
			throw new Exception("User Not Found By ID to update request");
		}
		
		User existingUser = resultUser.get();
		if(user.getUsername()!=null) {
			existingUser.setUsername(user.getUsername());
		}
		if(user.getPassword()!=null) {
			existingUser.setPassword(user.getPassword());
		}
		if(user.getEmail()!=null) {
			existingUser.setEmail(user.getEmail());
		}
		User updatedUser = userRepository.save(existingUser);
		
		return updatedUser;
		
	}
	
	@DeleteMapping("/user/{userId}")
	public String deleteUserById(@PathVariable Long userId) throws Exception{
		
		Optional<User> user = userRepository.findById(userId);
		
		if(user.isEmpty()) {
			throw new Exception("User not exist.");
		}
		
		userRepository.delete(user.get());
		
		return "User deleted successfully.";
	}
	
	
}
