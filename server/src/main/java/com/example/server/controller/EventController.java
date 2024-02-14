package com.example.server.controller;

import com.example.server.model.Event;
import com.example.server.model.User;
import com.example.server.service.event.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/event")
public class EventController {
    @Autowired
    private EventService eventService;

    @GetMapping
    public String testEvent(){
        return "Event controller";
    }

    @PostMapping
    public Event createdEvent(@RequestBody Event event){
        return eventService.save(event);
    }
}
