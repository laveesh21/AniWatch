package com.aniwatch.controller;

import java.util.ArrayList;
import java.util.List;
import com.aniwatch.model.User;
import com.aniwatch.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("user")
	public User createUser(@RequestBody User user){
		User newUser = new User();
		newUser.setEmail(user.getEmail());
		newUser.setUserName(user.getUserName());
		newUser.setPassword(user.getPassword());
		
		User savedUser = userRepository.save(newUser);
		return savedUser;
	}
	
	@GetMapping("/print")
	public String printMethod(){
		return "User";
	}
	
	@GetMapping("/user")
	public List<User> addUser(){
		List<User> users = new ArrayList<>();
		User user1 = new User( "Laveesh", "lav@mail", "password");
		users.add(user1);		
		return users;
	}
}
