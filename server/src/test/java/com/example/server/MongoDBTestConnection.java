package com.example.server;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.data.mongodb.core.MongoTemplate;

import static org.junit.jupiter.api.Assertions.assertTrue;

@DataMongoTest
public class MongoDBTestConnection {
    @Autowired
    private MongoTemplate mongoTemplate;
    @Test
    public void testMongoDBConnection(){
        assertTrue(mongoTemplate != null);
//        assertTrue(mongoTemplate.collectionExists("person"));
    }
}
