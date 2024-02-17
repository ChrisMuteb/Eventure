package com.example.server.service.event;

import com.example.server.model.Event;
import com.example.server.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService{
    @Autowired
    private EventRepository eventRepository;
    @Override
    public Event save(Event event) {
        return eventRepository.save(event);
    }

    @Override
    public List<Event> findAllEventsSortedByDate() {
        // Fetch all events using the repository
        List<Event> events = eventRepository.findAll();

        // Sort events by date in descending order (latest first)
        events.sort((event1, event2) -> event2.getDate().compareTo(event1.getDate()));

        return events;
    }
}
