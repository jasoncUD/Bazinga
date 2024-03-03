package com.henhacks.bazingaapp.service;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.henhacks.bazingaapp.model.ApiPrompt;

@Service
public class OpenAIService {
    
    private final String openAIUrl = "https://api.openai.com/v1/chat/completions";

    @Value("${openai.api.key}")
    private String apiKey;

    public String getResponseFromOpenAI(ApiPrompt apiPrompt) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

        String content = "Make a syllabus for a " + apiPrompt.getAge() + " year old student, who wants to learn the subject: " + apiPrompt.getSubject() + " for grade level: " + apiPrompt.getGradeLevel() + ". Return 5 topics. We need 5 questions per topic. Make this a multiple choice questions-quiz with 4 options per each question. Additionally, attach the explanation of why the answer is right in an additional field. Moreover, return a 1 if it is the right answer, and a 0 if not. Return all of this in json format";

        // Create the request body
        String requestBody = "{\"model\": \"gpt-3.5-turbo\", \"messages\": [{\"role\": \"user\", \"content\": \"" + content + "\"}], \"response_format\":{\"type\": \"json_object\"} }";
        System.out.println(requestBody);
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

        ResponseEntity<String> response = restTemplate.exchange(openAIUrl, HttpMethod.POST, entity, String.class);

        return response.getBody();
    }
}

