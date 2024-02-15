package com.example.server.service.DatePrs;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

public class DateParser {
    private static final String FORMAT = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";

    public static Date parseDate(String dateString) {
        SimpleDateFormat formatter = new SimpleDateFormat(FORMAT);
        formatter.setTimeZone(TimeZone.getTimeZone("UTC"));
        try {
            return formatter.parse(dateString);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }


}


