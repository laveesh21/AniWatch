package com.aniwatch.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.aniwatch.models.User;

@RestController
public class UserController {

    @GetMapping("/users")
    public List<User> getUser(){
        
        List<User> users = new ArrayList<>();
        User u1 = new User(12, "super", "supermail", "123");
        User u2 = new User(11, "knox", "knoxmail", "123");
        users.add(u1);
        users.add(u2);
        return users;
        
    }

    @GetMapping("/users/{userId}")
    public User getUserById (@PathVariable("userId")Integer id){

        User u1 = new User(11, "knox", "knoxmail", "123");
        u1.setId(id);
        return u1;
    
    }
}