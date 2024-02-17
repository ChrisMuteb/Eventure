package com.example.server.service.user;

import com.example.server.exception.UserNotFoundException;
import com.example.server.model.User;
import com.example.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUser(String id) {
        Optional<User> user = userRepository.findById(id);
        // Check if user exists before returning
        if (user.isPresent()) {
            return user.get();
        } else {
            // Handle the case where user is not found (e.g., throw exception, return null, log error)
            throw new UserNotFoundException("User with id " + id + " not found");
        }
    }

    @Override
    public List<User> allUsers() {
        return userRepository.findAll();
    }
}
