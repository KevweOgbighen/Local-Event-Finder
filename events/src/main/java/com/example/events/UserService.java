package com.example.events;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public String register(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "Email already in use.";
        }
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        userRepository.save(user);
        return "User registered successfully with ID: " + user.getId().toString();
    }

    public String login(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            boolean isPasswordMatch = passwordEncoder.matches(password, user.get().getPassword());
            if (isPasswordMatch) {
                return "Login successful! User ID: " + user.get().getId().toString();
            } else {
                return "Invalid email or password.";  // Password doesn't match
            }
        } else {
            return "Invalid email or password.";  // User not found
        }
    }

    public String logout() {
        
        return "User logged out.";
    }
}
