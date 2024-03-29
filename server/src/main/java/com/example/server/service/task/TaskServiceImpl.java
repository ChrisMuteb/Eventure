package com.example.server.service.task;

import com.example.server.model.Event;
import com.example.server.model.Task;
import com.example.server.repository.EventRepository;
import com.example.server.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
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
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
    public List<Task> getMyTasks(String id){
        List<Task> tasks = getAllTasks();
        List<Task> myTasks = new ArrayList<>();

        if(tasks.size() < 1)
            return null;

        for(Task task : tasks){
//            if(task.getUser().getId().equals(id) ){
//                myTasks.add(task);
//            }
            if(task.getEvent().getCreatedBy().getId().equals(id))
                myTasks.add(task);

        }
        return myTasks;
    }

//    @Override
//    public Task addTask(Task task) {
//        Optional<Event> events = eventRepository.findById(eventID);
//        if(events.isPresent()){
//            Event event = events.get();
//            new Task( , event, event.getCreatedBy());
//        }else {
//
//        }
//        // Task task = new Task("Collect Mics", "Go to Paris and get some mics", "IN PROGRESS",
//        //                DateParser.parseDate("2024-02-20T18:00:00.000Z"),
//        //                event, user);
//        //        mongoTemplate.save(task);
//        Task task1 = new Task()
//        return null;
//    }
}
