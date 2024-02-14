package com.example.server.repository;

import com.example.server.model.Participant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParticipantRepository extends MongoRepository<Participant, String> {
}
