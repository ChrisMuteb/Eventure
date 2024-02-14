package com.example.server.service.event;

import com.example.server.model.Event;
import com.example.server.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventServiceImpl implements EventService{
    @Autowired
    private EventRepository eventRepository;
    @Override
    public Event save(Event event) {
        return eventRepository.save(event);
    }
}
