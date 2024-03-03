package com.henhacks.bazingaapp.service;

import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.SearchResult;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;

import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class YouTubeService {

    private static final String APPLICATION_NAME = "YouTube Search";
    private static final GsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
    private static final String API_KEY = "${YOUTUBE_API}"; // Use your actual API key

    public List<String> searchVideos(String query) throws Exception {
        YouTube youtube = new YouTube.Builder(GoogleNetHttpTransport.newTrustedTransport(), JSON_FACTORY, request -> {})
                .setApplicationName(APPLICATION_NAME)
                .build();

        YouTube.Search.List request = youtube.search().list("snippet");
        request.setKey(API_KEY);
        request.setMaxResults(1L);
        request.setQ(query);
        request.setType("video");
        request.setOrder("relevance");

        List<SearchResult> searchResults = request.execute().getItems();
        return searchResults.stream()
                .map(result -> "https://www.youtube.com/watch?v=" + result.getId().getVideoId())
                .collect(Collectors.toList());
    }
}
