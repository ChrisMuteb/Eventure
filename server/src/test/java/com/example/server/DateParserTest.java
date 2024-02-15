package com.example.server;

import com.example.server.service.DatePrs.DateParser;
import org.junit.jupiter.api.Test;

import java.util.Date;

public class DateParserTest {

    @Test
    public void testDateParsing() {
        String dateString = "2024-02-20T18:00:00.000Z";
        Date parsedDate = DateParser.parseDate(dateString);
        System.out.println(parsedDate); // Output: 2024-02-20 18:00:00 UTC
    }
}
