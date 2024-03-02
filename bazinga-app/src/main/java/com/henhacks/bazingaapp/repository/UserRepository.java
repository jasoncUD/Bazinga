package com.henhacks.bazingaapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.henhacks.bazingaapp.model.User;

public interface UserRepository extends MongoRepository<User, String> {


}