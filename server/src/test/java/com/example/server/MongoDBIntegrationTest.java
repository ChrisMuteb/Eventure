package com.example.server;

import com.example.server.model.Event;
import com.example.server.model.Participant;
import com.example.server.model.Task;
import com.example.server.model.User;
import com.example.server.service.DatePrs.DateParser;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@DataMongoTest
public class MongoDBIntegrationTest {
    @Autowired
    private MongoTemplate mongoTemplate;
    @Test
    public void testCollectionExists(){
        assertTrue(mongoTemplate.collectionExists("users"));
        assertTrue(mongoTemplate.collectionExists("events"));
    }
    @Test
    public void testAddUserModel(){
        User user2 = new User("John", "john@example.com", "john", "admin");
        User user3 = new User("Sam", "sam@example.com", "sam", "dev");

        mongoTemplate.save(user2, "users");
        mongoTemplate.save(user3, "users");

    }

    @Test
    public void testAddEventModel(){
        User user2 = new User("John", "john@example.com", "john", "admin");

        mongoTemplate.save(user2, "users");

        // String title, String description, Date date, String location, User createdBy, List<String> tasks, List<String> participants
        Event event1 = new Event("BFD party", "It is John's BFD",
                DateParser.parseDate("2024-02-20T18:00:00.000Z"), "Paris",user2,
                Arrays.asList(""),
                Arrays.asList(""));

        mongoTemplate.save(event1, "events");
    }

    @Test
    public void testAddTaskModel(){
        User user = new User("test", "test@example.com", "test", "dev");
        mongoTemplate.save(user, "users");

        Event event = new Event("Karaoke", "Pick any song and sing!",
                DateParser.parseDate("2024-02-20T18:00:00.000Z"), "Lyon",user,
                Arrays.asList(""),
                Arrays.asList(""));
        mongoTemplate.save(event);

        // String title, String description, String status, Date deadline, Event event, User user
        Task task = new Task("Collect Mics", "Go to Paris and get some mics", "IN PROGRESS",
                DateParser.parseDate("2024-02-20T18:00:00.000Z"),
                event, user);
        mongoTemplate.save(task);
        Task task2 = new Task("Collect Speakers", "Go to Paris and get some amplifiers", "IN PROGRESS",
                DateParser.parseDate("2024-02-20T18:00:00.000Z"),
                event, user);
        mongoTemplate.save(task2);
    }

    @Test
    public void testAddParticipantModel(){
        User user = new User("Carl", "carl@example.com", "carl", "dev");
        mongoTemplate.save(user, "users");

        Event event = new Event("Gaming Night", "Friday night is the night!",
                DateParser.parseDate("2024-02-20T18:00:00.000Z"), "Marseille",user,
                Arrays.asList(""),
                Arrays.asList(""));
        mongoTemplate.save(event);
        //User user, Event event, String role
        Participant participant = new Participant(user, event, "Attendee");
//        Participant participant2 = new Participant(user, event, "Attendee");
        mongoTemplate.save(participant);
    }

    @Test
    public void testEventAdd(){
//        Address address1 = new Address( "123 Street", "Apt 2", "City1");
//        Address address2 = new Address( "456 Avenue", null, "City2");

//        mongoTemplate.save(address1, "address");
//        mongoTemplate.save(address2, "address");

//        Person person = new Person();
//        person.setFirstName("John");
//        person.setLastName("Doe");
//        person.setAge(30);
//        person.setHobbies(Arrays.asList("Reading", "Traveling"));
//        person.setAddresses(Arrays.asList(address1, address2));

        // Save the person with addresses to the database
//        mongoTemplate.save(person, "person");

        // Retrieve the saved person from the database
//        Person savedPerson = mongoTemplate.findById(person.getPersonId(), Person.class, "person");

        // Check if the retrieved person has the expected addresses
//        List<Address> savedAddresses = savedPerson.getAddresses();

//        System.out.println("Actual Addresses: " + savedAddresses);

//        assertEquals(2, savedAddresses.size());
//        assertEquals(address1, savedAddresses.get(0));
//        assertEquals(address2, savedAddresses.get(1));
    }
}
