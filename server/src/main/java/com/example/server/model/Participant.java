package com.example.server.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "participants")
public class Participant {

    @Id
    private String id;
    @DBRef
    private User user; // Reference to User document using @DBRef
    @DBRef
    private Event event; // Reference to Event document using @DBRef
    private String role; // "Organizer", "Speaker", "Attendee"

    // Getters, setters, and other methods omitted for brevity


    public Participant() {
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
