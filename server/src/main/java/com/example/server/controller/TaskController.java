package com.example.server.controller;

import com.example.server.model.Event;
import com.example.server.model.Task;

import com.example.server.model.User;
import com.example.server.repository.EventRepository;
import com.example.server.service.DatePrs.DateParser;
import com.example.server.service.event.EventService;
import com.example.server.service.task.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/task")
public class TaskController {
    @Autowired
    private TaskService taskService;
    @Autowired
    private EventService eventService;

    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PostMapping("/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Task createTask(@PathVariable("id") String id, @RequestBody Map<String, Object> requestPayload) {

        Event event = eventService.getEvent(id); // this id is the event id
        User user = event.getCreatedBy();
        String title = (String) requestPayload.get("title");
        String description = (String) requestPayload.get("description");
        String status = (String) requestPayload.get("status");
        String date = (String) requestPayload.get("date");
        Task task = new Task(title, description, status,
                DateParser.parseDate(date.concat("T18:00:00.000Z")),
                event, user);
        Task result = taskService.save(task);

        if (result != null) {
            event.getTasks().add(result.getTitle()); // Add the new task to the event's list of tasks
            eventService.save(event); // Save the updated event with the new task
        }

        return result;
    }


    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<Task> getMyTasks(@PathVariable("id") String id) {
        List<Task> myTasks = taskService.getMyTasks(id);
        if(myTasks.size() < 1)
            return null;
        return myTasks;
    }


}
