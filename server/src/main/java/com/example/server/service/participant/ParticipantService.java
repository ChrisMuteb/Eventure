package com.example.server.service.participant;

import com.example.server.model.Participant;

import java.util.List;

public interface ParticipantService {
    Participant save(Participant participant);
    List<Participant> allParticipant();
}
