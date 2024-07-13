package com.aniwatch.aniwatch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;


@SpringBootApplication
@ComponentScan(basePackages = {"com.aniwatch.controller"})
@RestController
public class AniwatchApplication {

	public static void main(String[] args) {
		SpringApplication.run(AniwatchApplication.class, args);
	}


	@GetMapping("/")	
	public String hello(){
		return "Hello World";
	}

}
