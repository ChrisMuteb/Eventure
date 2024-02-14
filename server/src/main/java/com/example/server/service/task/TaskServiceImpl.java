package com.example.server.service.task;

import com.example.server.model.Task;
import com.example.server.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskServiceImpl implements TaskService{
    @Autowired
    private TaskRepository taskRepository;
    @Override
    public Task save(Task task) {
        return taskRepository.save(task);
    }
}
