package com.example.server.service.event;

import com.example.server.model.Event;

import java.util.List;

public interface EventService {
    Event save(Event event);
    List<Event> findAllEvents();
}
