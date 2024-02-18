package com.example.server.controller;

import com.example.server.model.Event;
import com.example.server.model.User;
import com.example.server.service.DatePrs.DateParser;
import com.example.server.service.event.EventService;
import com.example.server.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/event")
public class EventController {
    @Autowired
    private EventService eventService;
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<String> createEvent(@RequestBody Map<String, Object> requestPayload) {
        try {
            // Extract data from the request payload
            String title = (String) requestPayload.get("title");
            String date = (String) requestPayload.get("date");
            String location = (String) requestPayload.get("location");
            String description = (String) requestPayload.get("description");
            String createdBy = (String) requestPayload.get("createdBy");
            List<String> participants = (List<String>) requestPayload.get("participants");

            eventService.save(new Event( title, description, DateParser.parseDate(date.concat("T18:00:00.000Z")), location, userService.getUser(createdBy), Arrays.asList(""), participants ));

            return new ResponseEntity<>("Event created successfully", HttpStatus.OK);
        } catch (Exception e) {
            // Handle exceptions appropriately
            return new ResponseEntity<>("Error creating event: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public List<Event> getAllEvents(){
        return eventService.findAllEvents();
    }
    @GetMapping("/{id}")
    public Event getEvent(@PathVariable("id") String id){
        return eventService.getEvent(id);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEvent(@PathVariable("id") String id){
        String result = eventService.deleteEvent(id);
        HttpStatus status = result.equals("Event successfully deleted") ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return new ResponseEntity<>(result, status);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateEvent(@PathVariable("id") String id, @RequestBody Map<String, Object> requestPayload){
        // Extract data from the request payload
        String eID = id;
        String title = (String) requestPayload.get("title");
        String date = (String) requestPayload.get("date");
        String location = (String) requestPayload.get("location");
        String description = (String) requestPayload.get("description");
        String createdBy = (String) requestPayload.get("createdBy");
        List<String> participants = (List<String>) requestPayload.get("participants");

        eventService.updateEvent(eID,new Event(title, description, DateParser.parseDate(date.concat("T18:00:00.000Z")), location, userService.getUser(createdBy), Arrays.asList(""), participants ));

        return new ResponseEntity<>("Event created successfully", HttpStatus.OK);
    }
}
