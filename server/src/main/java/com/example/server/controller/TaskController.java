package com.example.server.controller;

import com.example.server.model.Task;

import com.example.server.service.task.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/task")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping
    public String testTask(){
        return "task controller";
    }

    @PostMapping
    public Task createdTask(@RequestBody Task task){
        return taskService.save(task);
    }
}
