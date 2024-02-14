package com.example.server.service.participant;

import com.example.server.model.Participant;
import com.example.server.repository.ParticipantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParticipantServiceImpl implements ParticipantService{
    @Autowired
    private ParticipantRepository participantRepository;

    @Override
    public Participant save(Participant participant) {
        return participantRepository.save(participant);
    }
}
