package com.henhacks.bazingaapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BazingaAppApplication {

	public static void main(String[] args) {
		EnvLoader.loadDotenv();
		SpringApplication.run(BazingaAppApplication.class, args);
	}
}
