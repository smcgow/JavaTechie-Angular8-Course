package com.javatechie.registrationservice.service;

import com.javatechie.registrationservice.model.User;
import com.javatechie.registrationservice.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationService {

    RegistrationRepository registrationRepository;

    @Autowired
    public RegistrationService(RegistrationRepository registrationRepository) {
        this.registrationRepository = registrationRepository;
    }

    public List<User> findAllUsers(){
        return registrationRepository.findAll();
    }

    public String register(User user){
        registrationRepository.save(user);
        return "Hi " + user.getName() + " you registration completed successfully";
    }

    public User findUser(String email){
        return registrationRepository.findByEmail(email);
    }

    public void cancelRegistration(Integer id){
      registrationRepository.deleteById(id);
    }

}
