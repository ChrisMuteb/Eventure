package com.example.server.service.event;

import com.example.server.model.Event;

import java.util.List;

public interface EventService {
    Event save(Event event);
    List<Event> findAllEvents();
    Event getEvent(String id);
    String deleteEvent(String id);
    Event updateEvent(String id , Event updatedEvent);
}
