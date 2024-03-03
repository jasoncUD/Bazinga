package com.henhacks.bazingaapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.henhacks.bazingaapp.model.Categories;
import com.henhacks.bazingaapp.model.User;
import com.henhacks.bazingaapp.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> login(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> updateIncompleteCourses(String userId, Categories[] incompleteCourses) {
        Optional<User> userOptional = userRepository.findById(userId);
        if(userOptional.isPresent()) {
            User user = userOptional.get();
            user.setIncompleteCourses(incompleteCourses);
            User updatedUser = userRepository.save(user);
            return Optional.of(updatedUser);
        }
        return Optional.empty();
    }
    
}
    

