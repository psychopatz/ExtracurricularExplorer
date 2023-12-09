package com.csit321.ExtracurricularExplorer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExtracurricularExplorerApplication {

	public static void main(String[] args) {

		SpringApplication.run(ExtracurricularExplorerApplication.class, args);
		System.out.println("Server Started on 127.0.0.1:8080");
		System.out.println(System.getProperty("user.dir")+"\\src\\main\\resources\\images");
	}

}
