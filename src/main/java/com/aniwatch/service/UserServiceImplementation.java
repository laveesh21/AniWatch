package com.aniwatch.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.aniwatch.model.User;
import com.aniwatch.repository.UserRepository;


@Service
public class UserServiceImplementation implements UserService{

	@Autowired
	UserRepository userRepository;
	
// METHOD:1 | NEW USER REGISTRATION SERCIVE 
	@Override
	public User registerUser(User user) {
		User newUser = new User();
		newUser.setEmail(user.getEmail());
		newUser.setUsername(user.getUsername());
		newUser.setPassword(user.getPassword());
		User savedUser = userRepository.save(newUser);
		return savedUser;
	}

	
	
// METHOD:2 | SEARCHING FOR USER BY ID 
	@Override
	public User findUserById(Long userId ) throws Exception{
		
		Optional<User> result = userRepository.findById(userId);
		
		if(result.isPresent()) {
			return result.get();			
		}
		throw new Exception("User Not Found By ID");
		
	}
	
	
	@Override
	public User findUserByUsername(String username) {
		User user = userRepository.findByUsername(username);
		return user;
	}
	

	@Override
	public User updateUser(User user, Long userId) throws Exception {
		
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

	

	@Override
	public String deleteUserById(@PathVariable Long userId) throws Exception{
		
		Optional<User> user = userRepository.findById(userId);
		
		if(user.isEmpty()) {
			throw new Exception("User not exist.");
		}
		
		userRepository.delete(user.get());
		
		return "User deleted successfully.";
	}
	
	
	@Override
	public List<User> searchUser(String query) {
		// TODO Auto-generated method stub
		return null;
	}
	
//	@Override
//	public User findUserByEmail(User email) {
//		// TODO Auto-generated method stub
//		return null;
//	}
	
}
