package com.aniwatch.controller;

// import java.util.ArrayList;
import java.util.List;

import com.aniwatch.model.User;
import com.aniwatch.repository.UserRepository;
import com.aniwatch.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	@Autowired
	UserRepository userRepository;
	@Autowired
	UserService userService;
	
	@PostMapping("/user")
	public User registerUser(@RequestBody User user){
		User savedUser = userService.registerUser(user);
		return savedUser;
	}
	
	@GetMapping("/user")
	public List<User> findUser(){
		List<User> users = userRepository.findAll();
		return users;
	}

	@GetMapping("/user/id/{userId}")
	public User findUserById( @PathVariable("userId") Long userId ) throws Exception {
		User user = userService.findUserById(userId);
		return user;	
	}
	@GetMapping("/user/{username}")
	public User findUserByUsername(@PathVariable("username") String username) throws Exception {
		User user = userService.findUserByUsername(username);
		return user;
	}

	@PutMapping("/user/{userId}")
	public User updateUserById(@RequestBody User user, @PathVariable Long userId) throws Exception{
		User updatedUser = userService.updateUser(user, userId);
		return updatedUser;
	}
	
	@DeleteMapping("/user/{userId}")
	public String deleteUserById(@PathVariable Long userId) throws Exception{
		String result = userService.deleteUserById(userId);
		return result;
	}
	
}
