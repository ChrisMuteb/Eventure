package com.example.server.controller;

import com.example.server.model.Participant;
import com.example.server.model.User;
import com.example.server.service.participant.ParticipantService;
import com.example.server.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/participant")
public class ParticipantController {
    @Autowired
    private ParticipantService participantService;

    @GetMapping
    public String testParticipant(){
        return "Participant controller";
    }

    @PostMapping
    public Participant createdParticipant(@RequestBody Participant participant){
        return participantService.save(participant);
    }
}
