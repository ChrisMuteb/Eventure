package com.example.server.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "events")
public class Event {
    @Id
    private String id;
    private String title;
    private String description;
    private Date date;
    private String location;
//    private String createdBy; // Reference string for user ID
    @DBRef // Add this annotation
    private User createdBy; // Reference to User document

    private List<String> tasks; // Embedded references with UUID IDs

    private List<String> participants; // Embedded references with UUID IDs

    // Getters, setters, and other methods omitted for brevity

    public Event() {
    }

    public Event(String id, String title, String description, Date date, String location, User createdBy, List<String> tasks, List<String> participants) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.location = location;
        this.createdBy = createdBy;
        this.tasks = tasks;
        this.participants = participants;
    }

    public Event(String title, String description, Date date, String location, User createdBy, List<String> tasks, List<String> participants) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.location = location;
        this.createdBy = createdBy;
        this.tasks = tasks;
        this.participants = participants;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public User getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(User createdBy) {
        this.createdBy = createdBy;
    }


//    public String getCreatedBy() {
//        return createdBy;
//    }
//
//    public void setCreatedBy(String createdBy) {
//        this.createdBy = createdBy;
//    }

    public List<String> getTasks() {
        return tasks;
    }

    public void setTasks(List<String> tasks) {
        this.tasks = tasks;
    }

    public List<String> getParticipants() {
        return participants;
    }

    public void setParticipants(List<String> participants) {
        this.participants = participants;
    }
}




