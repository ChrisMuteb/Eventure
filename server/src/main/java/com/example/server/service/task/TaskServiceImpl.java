package com.example.server.service.task;

import com.example.server.model.Task;
import com.example.server.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService{
    @Autowired
    private TaskRepository taskRepository;
    @Override
    public Task save(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public List<Task> getAllTasks(String id) {
        List<Task> tasks = taskRepository.findAll();
        List<Task> myTasks = new ArrayList<>();
        for(Task task : tasks){
            if(task.getUser().getId().equals(id) ){
                myTasks.add(task);
            }
        }
        return myTasks;
    }
}
