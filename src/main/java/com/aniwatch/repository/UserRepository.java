package com.aniwatch.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.aniwatch.model.User;

public interface UserRepository extends JpaRepository< User , Long>  {
	
	public User findByUsername(String username) ;

	@Query("select u from User u where u.username LIKE ac%:query% OR u.email LIKE %:query%")
	public List<User> searchUser(String query);
	
}

