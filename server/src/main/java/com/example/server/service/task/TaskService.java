package com.example.server.service.task;

import com.example.server.model.Task;

import java.util.List;


public interface TaskService {
    Task save(Task task);
    List<Task> getAllTasks();
    List<Task> getMyTasks(String id);
//    Task addTask(Task task);
}
