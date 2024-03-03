package com.henhacks.bazingaapp.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateIncompleteCoursesRequest {

    private String id;
    private Categories[] topics;

    // Constructors, Getters, and Setters
}
