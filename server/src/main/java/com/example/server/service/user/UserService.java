package com.example.server.service.user;

import com.example.server.model.User;

public interface UserService {
    User save(User user);
    User getUser(String id);
}
