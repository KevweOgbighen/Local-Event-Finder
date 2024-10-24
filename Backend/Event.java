import java.util.ArrayList;
import java.util.List;

public class Event {
    private int eventId;
    private String eventName;
    private String eventDesc;
    private String eventDate; 
    private String eventTime;
    private int venueId;
    private int organizerId;
    private String venueLocation; 

    public Event(int eventId, String eventName, String eventDesc, String eventDate, String eventTime, int venueId, int organizerId, String venueLocation) {
        this.eventId = eventId;
        this.eventName = eventName;
        this.eventDesc = eventDesc;
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.venueId = venueId;
        this.organizerId = organizerId;
        this.venueLocation = venueLocation;
    }

    public int getEventId() {
        return eventId;
    }

    public void setEventId(int eventId) {
        this.eventId = eventId;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getEventDesc() {
        return eventDesc;
    }

    public void setEventDesc(String eventDesc) {
        this.eventDesc = eventDesc;
    }

    public String getEventDate() {
        return eventDate;
    }

    public void setEventDate(String eventDate) {
        this.eventDate = eventDate;
    }

    public String getEventTime() {
        return eventTime;
    }

    public void setEventTime(String eventTime) {
        this.eventTime = eventTime;
    }

    public int getVenueId() {
        return venueId;
    }

    public void setVenueId(int venueId) {
        this.venueId = venueId;
    }

    public int getOrganizerId() {
        return organizerId;
    }

    public void setOrganizerId(int organizerId) {
        this.organizerId = organizerId;
    }

    public String getVenueLocation() {
        return venueLocation;
    }

    public void setVenueLocation(String venueLocation) {
        this.venueLocation = venueLocation;
    }

    public static List<Event> findEventByLocation(List<Event> events, String location) {
        List<Event> matchingEvents = new ArrayList<>();
        for (Event event : events) {
            if (event.getVenueLocation().equalsIgnoreCase(location)) {
                matchingEvents.add(event);
            }
        }
        return matchingEvents;
    }
}
