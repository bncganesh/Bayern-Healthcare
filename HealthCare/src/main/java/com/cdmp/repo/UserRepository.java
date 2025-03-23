package com.cdmp.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.cdmp.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
