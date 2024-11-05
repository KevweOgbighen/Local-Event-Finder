package com.example.events;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import org.bson.types.ObjectId;
import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, ObjectId>{
    Optional<User> findByEmail(String email);
}
