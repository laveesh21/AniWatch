package com.aniwatch.service;

import java.util.List;

import com.aniwatch.model.User;

public interface UserService {
	
	public User registerUser(User user);
	public User findUserById(Long userId) throws Exception;
	public User findUserByUsername(String username) ;
	public List<User> searchUser(String query);
	public User updateUser(User user, Long userId) throws Exception;
	public String deleteUserById(Long userId) throws Exception;
	//	public User findUserByEmail(User email);
	
}
