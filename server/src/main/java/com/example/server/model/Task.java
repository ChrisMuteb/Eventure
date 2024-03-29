package com.example.server.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "tasks")
public class Task {
    @Id

    private String id;
    private String title;
    private String description;
    private String status; // "To Do", "In Progress", "Done"
    private Date deadline;
    @DBRef
    private Event event; // Reference to Event document using @DBRef
    @DBRef
    private User user;

    // Getters, setters, and other methods omitted for brevity


    public Task() {
    }

    public Task(String title, String description, String status, Date deadline, Event event, User user) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.deadline = deadline;
        this.event = event;
        this.user = user;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}




