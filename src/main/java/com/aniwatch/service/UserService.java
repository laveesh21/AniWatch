package com.aniwatch.service;

import java.util.List;

import com.aniwatch.model.User;

public interface UserService {
	
	public User registerUser(User user);
	public User findUserById(Long userId) throws Exception;
	public User updateUser(User user, Long userId) throws Exception;
	public List<User> searchUser(String query);
	public String deleteUserById(Long userId) throws Exception;
	public User findUserByUsername(String username) ;
	//	public User findUserByEmail(User email);
	
}
