package com.aniwatch.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.aniwatch.model.User;

public interface UserRepository extends JpaRepository< User , Integer>  {

}