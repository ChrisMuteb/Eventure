package com.example.server.service.user;

import com.example.server.model.User;

import java.util.List;

public interface UserService {
    User save(User user);
    User getUser(String id);
    List<User> allUsers();
}
