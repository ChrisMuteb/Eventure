package com.example.server.controller;

import com.example.server.model.User;
import com.example.server.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> allUsers(){
        return userService.allUsers();
    }

    @PostMapping
    public User createdUser(@RequestBody User user){
        return userService.save(user);
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable("id") String id){
        return userService.getUser(id);
    }
}
