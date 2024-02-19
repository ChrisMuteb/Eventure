package com.example.server.service.event;

import com.example.server.exception.UserNotFoundException;
import com.example.server.model.Event;
import com.example.server.model.Task;
import com.example.server.repository.EventRepository;
import com.example.server.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImpl implements EventService{
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private TaskRepository taskRepository;
    @Override
    public Event save(Event event) {
        return eventRepository.save(event);
    }

    @Override
    public List<Event> findAllEvents() {
        // Fetch all events using the repository
        List<Event> events = eventRepository.findAll();

        // Sort events by date in descending order (latest first)
//        events.sort((event1, event2) -> event2.getDate().compareTo(event1.getDate()));

        return events;
    }

    @Override
    public Event getEvent(String id) {
        Optional<Event> event = eventRepository.findById(id);
        if(event.isPresent()){
            return event.get();
        }
        else {
            // Handle the case where user is not found (e.g., throw exception, return null, log error)
            throw new UserNotFoundException("Event with id " + id + " not found");
        }
    }
    @Override
    public String deleteEvent(String id) {
        Event event = getEvent(id);
        List<Task> taskList = taskRepository.findAll();
        for(Task task : taskList){
            if(task.getEvent().getId().equals(id))
                taskRepository.delete(task);
        }
        if (event != null) {
            eventRepository.delete(event);
            return "Event successfully deleted";
        } else {
            return "Event not found";
        }
    }

    @Override
    public Event updateEvent(String id, Event updatedEvent) {
        Optional<Event> optionalExistingEvent = eventRepository.findById(id);

        if (optionalExistingEvent.isPresent()) {
            Event existingEvent = optionalExistingEvent.get();
            existingEvent.setTitle(updatedEvent.getTitle());
            existingEvent.setDate(updatedEvent.getDate());
            existingEvent.setLocation(updatedEvent.getLocation());
            existingEvent.setDescription(updatedEvent.getDescription());
            existingEvent.setCreatedBy(updatedEvent.getCreatedBy());
            existingEvent.setParticipants(updatedEvent.getParticipants());
            existingEvent.setTasks(updatedEvent.getTasks());
            // ... (update other fields)

            // Save the updated event to the database
            return eventRepository.save(existingEvent);
        } else {
            // Event not found, handle accordingly (throw exception, log error, etc.)
            throw new UserNotFoundException("Event with id " + id + " not found");
        }
    }

    @Override
    public List<Event> AllMyEvents(String id) {
        List<Event> allEvents = findAllEvents();
        List<Event> myEvents = new ArrayList<>();
        for(Event e : allEvents){
            if(e.getCreatedBy().getId().equals(id))
                myEvents.add(e);
        }
        return myEvents;
    }


}
