package com.aniwatch.controller;

import java.util.List;

import com.aniwatch.model.User;
import com.aniwatch.repository.UserRepository;
import com.aniwatch.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {
  @Autowired
  UserRepository userRepository;
  @Autowired
  UserService userService;

  @GetMapping("/user")
  public List<User> findUser() {
    List<User> users = userRepository.findAll();
    return users;
  }

  @GetMapping("/user/id/{userId}")
  public User findUserById(@PathVariable("userId") Long userId) throws Exception {
    User user = userService.findUserById(userId);
    return user;
  }

  @GetMapping("/user/name/{username}")
  public User findUserByUsername(@PathVariable("username") String username) throws Exception {
    User resultUser = userService.findUserByUsername(username);
    return resultUser;
  }

  @GetMapping("/user/search")
  public List<User> searchUser(@RequestParam(name = "query") String query) {
    List<User> users = userService.searchUser(query);
    return users;
  }

  @PostMapping("/user/register")
  public User registerUser(@RequestBody User user) {
    return userService.registerUser(user);
  }

  
  @PutMapping("/user/{userId}")
  public User updateUserById(@RequestBody User user, @PathVariable Long userId) throws Exception {
    return userService.updateUser(user, userId);
  }

  @DeleteMapping("/user/{userId}")
  public String deleteUserById(@PathVariable Long userId) throws Exception {
    String result = userService.deleteUserById(userId);
    return result;
  }

}
