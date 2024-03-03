package com.henhacks.bazingaapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.henhacks.bazingaapp.service.YouTubeService;

import java.util.List;

@RestController
@RequestMapping("/api/youtube")
@CrossOrigin(origins = {"http://localhost:3000"})
public class YouTubeController {

    @Autowired
    private YouTubeService youTubeService;

    @PostMapping("/search")
    public ResponseEntity<?> searchVideos(@RequestBody String query) {
        try {
            List<String> videoUrls = youTubeService.searchVideos(query);
            return ResponseEntity.ok(videoUrls);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Failed to search videos: " + e.getMessage());
        }
    }
}
