package com.example.server.controller;

import com.example.server.model.Task;

import com.example.server.service.task.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping
    public String testTask() {
        return "Task Controller";
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Task createTask(@RequestBody Task task) {
        return taskService.save(task);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<Task> getAllTasks(@PathVariable("id") String id) {
        return taskService.getAllTasks(id);
    }
}
