package com.henhacks.bazingaapp.controller;

import org.springframework.web.bind.annotation.*;

import com.henhacks.bazingaapp.model.ChatRequest;
import com.henhacks.bazingaapp.service.OpenAIService;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api/chatgpt")
public class ChatController {

    @Autowired
    private OpenAIService openAIService;

    @PostMapping("/ask")
    public String askChatGPT(@RequestBody ChatRequest request) {
        return openAIService.getResponseFromOpenAI(request.getPrompt());
    }
}