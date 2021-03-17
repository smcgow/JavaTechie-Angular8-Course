package com.javatechie.registrationservice.repository;

import com.javatechie.registrationservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<User,Integer> {

    public User findByEmail(String email);
}
